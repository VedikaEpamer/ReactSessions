import type { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  title: string;
}

function BlobLayout({ title, children }: LayoutProps) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <hr />
      </header>
      <br />

      <main>{children}</main>
      <br />
      <hr />
      <footer>
        <p>© 2026 My Blog App</p>
      </footer>
    </>
  );
}

export default BlobLayout;
