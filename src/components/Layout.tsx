import type { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  title: string;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const Layout = ({ title, header, footer, children }: LayoutProps) => {
  return (
    <>
      {header && <header>{header}</header>}

      <h3>{title}</h3>

      {children}

      {footer && <footer>{footer}</footer>}
      {/* {footer ? <footer>{footer}</footer> : <footer>No Footer</footer>} */}
    </>
  );
};

export default Layout;
