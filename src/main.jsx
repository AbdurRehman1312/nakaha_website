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
import HomeVisit from "./pages/HomeVisit.jsx";
import NursingCare from "./pages/NursingCare.jsx";
import Nutrition from "./pages/Nutrition.jsx";
import ManageMedication from "./pages/ManageMedication.jsx";
import BedSores from "./pages/BedSores.jsx";
import Physiotherapy from "./pages/Physiotherapy.jsx";
import Telemedicine from "./pages/Telemedicine.jsx";
import Vascular from "./pages/Vascular.jsx";
import Urinary from "./pages/Urinary.jsx";
import Radiology from "./pages/Radiology.jsx";
import BooknowForm from "./pages/BooknowForm.jsx";

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
      <Route path="consultaion" element={<ContactUs />} />
      <Route path="home-visit" element={<HomeVisit />} />
      <Route path="nursing-care" element={<NursingCare />} />
      <Route path="nutrition" element={<Nutrition />} />
      <Route path="manage-medication" element={<ManageMedication />} />
      <Route path="bed-sores" element={<BedSores />} />
      <Route path="physiotherapy" element={<Physiotherapy />} />
      <Route path="telemedicine" element={<Telemedicine />} />
      <Route path="vascular" element={<Vascular />} />
      <Route path="urinary" element={<Urinary/>} />
      <Route path="radiology" element={<Radiology/>} />
      <Route path="book-now" element={<BooknowForm/>} />
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
