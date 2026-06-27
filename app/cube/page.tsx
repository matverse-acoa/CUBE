import { WorkspaceChrome } from "@/components/workspace-chrome";

const faces = [
  ["Bruto", "filled"],
  ["Semântico", "filled"],
  ["Comprimido", "stroke"],
  ["Digital", "stroke"],
  ["Experimental", "stroke"],
  ["Autorizado", "stroke"],
  ["Físico", "stroke"],
  ["Produtivo", "stroke"],
] as const;

export default function CubePage() {
  return (
    <WorkspaceChrome
      title="Cube"
      subtitle="projeção geométrica do estado"
      inspector={
        <>
          <div className="eyebrow">Projection rule</div>
          <div className="panel" style={{ marginTop: 12 }}>
            <p>Faces mostram maturidade declarada do processo.</p>
            <p>Face preenchida não implica execução real, produção ou verdade.</p>
          </div>
        </>
      }
    >
      <section className="panel">
        <div className="label">Sample projection</div>
        <div className="cube-grid" style={{ marginTop: 16 }}>
          {faces.map(([name, state]) => (
            <article className="face" data-state={state} key={name}>
              <span className="label">{name}</span>
              <strong>{state === "filled" ? "observed" : "pending"}</strong>
            </article>
          ))}
        </div>
      </section>
      <section className="panel">
        <div className="label">Invariant</div>
        <p>O Cube é uma representação navegável. O estado canônico pertence ao Control Plane e seus registros de memória e evidência.</p>
      </section>
    </WorkspaceChrome>
  );
}
