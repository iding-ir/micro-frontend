import React, { ReactNode } from "react";

import "./Footer.css";

interface Props {
  children?: ReactNode;
}

const Footer = ({ children }: Props) => {
  return <footer className="footer">{children}</footer>;
};

export default Footer;
