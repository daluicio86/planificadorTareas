"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";

import "../../public/assets/css/flaticon.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/fontawesome.css";

import "../../public/assets/css/theme-default.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";

import { Rubik } from "next/font/google";
import Dependency from "@/src/components/utilities/Dependency";
import { StateProvider } from "@/src/contexto/store";
import { initialState } from "@/src/contexto/initialState";
import { mainReducer } from "@/src/contexto/reducers";
import React from "react";
import HeaderV1 from "@/src//components/header/HeaderV1";
import FooterV1 from "../components/footer/FooterV1";

const inter = Rubik({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StateProvider initialState={initialState} reducer={mainReducer}>
          <HeaderV1 />
          {children}
          <FooterV1 />
        </StateProvider>
      </body>
    </html>
  );
}
