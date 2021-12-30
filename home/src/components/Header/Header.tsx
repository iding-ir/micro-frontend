import React, { ReactNode } from "react";

import "./Header.css";
import Tabs from "../Tabs/Tabs";

interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className="header">
      <div className="title">{children}</div>

      <Tabs />
    </header>
  );
};

export default Header;
