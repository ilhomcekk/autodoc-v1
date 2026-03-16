import { RouterProvider } from "react-router";
import { router } from "./routes";
import { initApp } from "../config/appSettings";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18";

export default function App() {
  initApp();
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}
