import Link from "next/link";
import type { ReactNode } from "react";

type WorkspaceChromeProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  inspector?: ReactNode;
};

export function WorkspaceChrome({ title, subtitle, children, inspector }: WorkspaceChromeProps) {
  return (
    <main className="workspace">
      <header className="topbar">
        <Link className="brand" href="/">MATVERSE / CUBE</Link>
        <span className="eyebrow">Field Kernel v1.0 · interface projection</span>
      </header>
      <aside className="sidebar">
        <div className="eyebrow">Workspace</div>
        <nav className="nav" aria-label="Navegação principal">
          <Link href="/copilot">/copilot</Link>
          <Link href="/cube">/cube</Link>
          <Link href="/kernel">/kernel</Link>
        </nav>
        <div className="panel" style={{ marginTop: 24 }}>
          <div className="label">Authority model</div>
          <p><strong>OG1</strong> constitui.</p>
          <p><strong>OG2</strong> interpreta e admite.</p>
          <p><strong>OG3</strong> executa sob decisão.</p>
        </div>
      </aside>
      <section className="canvas">
        <div className="eyebrow">{subtitle}</div>
        <h1>{title}</h1>
        {children}
      </section>
      <aside className="inspector">
        {inspector ?? (
          <>
            <div className="eyebrow">Control Plane</div>
            <div className="panel" style={{ marginTop: 12 }}>
              <div className="status"><span className="dot" />Cassandra: configuration pending</div>
              <p>O CUBE apresenta estados e trajetórias. A decisão permanece fora da interface, no Cassandra Control Plane.</p>
            </div>
          </>
        )}
      </aside>
    </main>
  );
}
