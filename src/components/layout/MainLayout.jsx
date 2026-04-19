import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterBar from "./FooterBar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}
