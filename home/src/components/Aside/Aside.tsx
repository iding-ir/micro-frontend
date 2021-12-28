import React, { ReactNode } from "react";

import "./Aside.css";

interface Props {
  children?: ReactNode;
}

const Aside = ({ children }: Props) => {
  return <aside className="aside">{children}</aside>;
};

export default Aside;
