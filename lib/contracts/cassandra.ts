export type RouterTier = "ZERO" | "TINY" | "BURST";
export type GateDecision = "PASS" | "HOLD" | "BLOCK" | "ESCALATE";
export type FaceState = "stroke" | "filled" | "hold" | "blocked";

export type CubeFaces = Record<string, FaceState>;

export interface CassandraProcessRequest {
  intent: string;
  payload?: string;
  allow_burst?: boolean;
  force_tier?: RouterTier;
}

export interface CassandraReceipt {
  cube_id: string;
  seed: string;
  input_hash: string;
  decision_tier: RouterTier;
  timestamp: string;
  signature: string;
}

export interface WorkCube {
  id: string;
  intent: string;
  payload_preview: string;
  payload_full_hash: string;
  decision_tier: RouterTier;
  seed: string;
  faces: CubeFaces;
  evidence: Record<string, unknown>;
  value_score: number;
  latency_ms: number;
  parent_id?: string | null;
  receipt: CassandraReceipt;
  created_at: string;
}

export interface ControlPlaneEnvelope {
  run_id: string;
  kernel_version: "1.0.0";
  policy_version: string;
  intent: string;
  input_hash: string;
  tier: RouterTier;
  actor: "human" | "twin" | "base44" | "capability";
  decision: GateDecision;
  parent_id: string | null;
  receipt_hash: string;
  created_at: string;
}
