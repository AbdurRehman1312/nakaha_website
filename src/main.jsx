import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Blogs from "./pages/Blogs.jsx";
import Services from "./pages/Services.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { I18nextProvider } from "react-i18next";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="services" element={<Services />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n = {i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
