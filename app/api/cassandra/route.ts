import { NextRequest, NextResponse } from "next/server";
import type { CassandraProcessRequest } from "@/lib/contracts/cassandra";

const DEFAULT_PATH = "/api/cassandra/process";

export async function POST(request: NextRequest) {
  const controlPlaneUrl = process.env.CASSANDRA_CONTROL_PLANE_URL;
  const body = (await request.json()) as Partial<CassandraProcessRequest>;

  if (!body.intent || typeof body.intent !== "string" || !body.intent.trim()) {
    return NextResponse.json({ error: "intent is required" }, { status: 400 });
  }

  if (!controlPlaneUrl) {
    return NextResponse.json(
      {
        error: "Cassandra Control Plane is not configured",
        detail: "Set CASSANDRA_CONTROL_PLANE_URL in the deployment environment.",
      },
      { status: 503 },
    );
  }

  const baseUrl = controlPlaneUrl.replace(/\/$/, "");
  const target = `${baseUrl}${DEFAULT_PATH}`;

  try {
    const upstream = await fetch(target, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        intent: body.intent.trim(),
        payload: typeof body.payload === "string" ? body.payload : "",
        allow_burst: body.allow_burst === true,
        force_tier: body.force_tier,
      }),
      cache: "no-store",
    });

    const data = await upstream.json().catch(() => ({ error: "invalid upstream response" }));
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json(
      { error: "Cassandra Control Plane is unavailable" },
      { status: 502 },
    );
  }
}
