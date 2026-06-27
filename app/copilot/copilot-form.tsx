"use client";

import { useState } from "react";
import type { WorkCube } from "@/lib/contracts/cassandra";

export function CopilotForm() {
  const [intent, setIntent] = useState("");
  const [payload, setPayload] = useState("");
  const [allowBurst, setAllowBurst] = useState(false);
  const [result, setResult] = useState<WorkCube | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  async function submit() {
    setIsRunning(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/cassandra", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ intent, payload, allow_burst: allowBurst }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Cassandra Control Plane returned an error");
      }
      setResult(data as WorkCube);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unknown error");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="panel">
      <label className="label" htmlFor="intent">Intent</label>
      <textarea
        id="intent"
        value={intent}
        onChange={(event) => setIntent(event.target.value)}
        placeholder="Descreva a intenção ou o problema a atravessar."
      />
      <label className="status" style={{ marginBottom: 12 }}>
        <input type="checkbox" checked={allowBurst} onChange={(event) => setAllowBurst(event.target.checked)} />
        Autorizar BURST externo quando o Control Plane o solicitar.
      </label>
      <button type="button" onClick={submit} disabled={!intent.trim() || isRunning}>
        {isRunning ? "PROCESSANDO" : "ENVIAR AO CASSANDRA"}
      </button>
      {error ? <p role="alert">Erro: {error}</p> : null}
      {result ? (
        <div className={`panel tier-${result.decision_tier}`} style={{ marginTop: 16 }}>
          <div className="status"><span className="dot" />{result.decision_tier}</div>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
}
