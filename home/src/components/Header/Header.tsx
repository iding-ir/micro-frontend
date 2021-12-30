import React, { ReactNode } from "react";

import "./Header.css";
import Tabs from "../Tabs/Tabs";

interface Props {
  children?: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className="header">
      <Tabs />

      {children}
    </header>
  );
};

export default Header;
