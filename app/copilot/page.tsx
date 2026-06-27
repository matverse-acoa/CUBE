import { CopilotForm } from "./copilot-form";
import { WorkspaceChrome } from "@/components/workspace-chrome";

export default function CopilotPage() {
  return (
    <WorkspaceChrome
      title="Copilot"
      subtitle="intenção → decisão declarada"
      inspector={
        <>
          <div className="eyebrow">Flow</div>
          <div className="panel" style={{ marginTop: 12 }}>
            <p>Entrada humana → proxy local → Cassandra.</p>
            <p>O CUBE não escolhe o tier nem autoriza execução.</p>
          </div>
        </>
      }
    >
      <CopilotForm />
    </WorkspaceChrome>
  );
}
