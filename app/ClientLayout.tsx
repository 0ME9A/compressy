"use client";

import { Provider } from "react-redux";
import { store } from "@/RTK/store";
import { ReactNode } from "react";

import Footer from "@/components/footer/footer";
import Theme from "@/components/theme/theme";
import Nav from "@/components/nav/nav";
import Faq from "@/components/faq/faq";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Theme />
      <Nav />
      <main className="container p-2 mx-auto">{children}</main>
      <Faq/>
      <Footer />
    </Provider>
  );
};
