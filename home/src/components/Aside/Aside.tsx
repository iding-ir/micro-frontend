import React, { ReactNode } from "react";

import "./Aside.css";
import Welcome from "../Welcome/Welcome";

interface Props {
  children?: ReactNode;
}

const Aside = ({ children }: Props) => {
  return (
    <aside className="aside">
      <Welcome />

      {children}
    </aside>
  );
};

export default Aside;
