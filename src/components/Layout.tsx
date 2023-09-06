"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactElement;
}

const Layout = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Layout;
