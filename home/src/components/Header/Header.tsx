import React, { ReactNode } from "react";

import "./Header.css";

interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  return <header className="header">{children}</header>;
};

export default Header;
