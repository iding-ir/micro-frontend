import React, { ReactNode } from "react";

import "./Main.css";

interface Props {
  children?: ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="main">{children}</main>;
};

export default Main;
