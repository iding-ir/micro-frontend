import React, { ReactNode } from "react";
import classnames from "classnames";

import "./Layout.css";

interface LayoutProps {
  wide?: boolean;
  children: ReactNode;
}

const Layout = ({ children, wide }: LayoutProps) => {
  const classes = classnames("layout", {
    wide,
  });

  return <div className={classes}>{children}</div>;
};

export default Layout;
