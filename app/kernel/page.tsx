import { WorkspaceChrome } from "@/components/workspace-chrome";

const axioms = [
  "Todo organismo possui estado, contexto e trajetória.",
  "Toda transformação relevante deve poder ser representada.",
  "Uma representação não é o organismo inteiro.",
  "COG organiza pensamento; MNB organiza informação.",
  "Evidência não equivale a autorização.",
  "Execução exige admissibilidade explícita.",
  "Hash preserva integridade de bytes, não prova verdade.",
  "Memória sem replay é arquivo, não continuidade operacional.",
];

export default function KernelPage() {
  return (
    <WorkspaceChrome
      title="Kernel"
      subtitle="constituição, contratos e limites"
      inspector={
        <>
          <div className="eyebrow">Canonical split</div>
          <div className="panel" style={{ marginTop: 12 }}>
            <p>OG1 define limites e mandatos.</p>
            <p>OG2 interpreta, testa e decide.</p>
            <p>OG3 materializa somente o que foi admitido.</p>
          </div>
        </>
      }
    >
      <section className="panel">
        <div className="label">OG1 / Constitution</div>
        <ol>
          {axioms.map((axiom) => <li key={axiom}>{axiom}</li>)}
        </ol>
      </section>
      <section className="grid-two">
        <article className="panel">
          <div className="label">Control-plane envelope</div>
          <pre>{`run_id\nkernel_version\npolicy_version\ninput_hash\ntier\ndecision\nparent_id\nreceipt_hash\ncreated_at`}</pre>
        </article>
        <article className="panel">
          <div className="label">Gate states</div>
          <pre>{`PASS\nHOLD\nBLOCK\nESCALATE`}</pre>
        </article>
      </section>
    </WorkspaceChrome>
  );
}
