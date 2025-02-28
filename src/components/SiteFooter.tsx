"use client";

import { Footer } from "flowbite-react";

export function SiteFooter() {
  return (
    <Footer container className="bg-gray-950">
      <div className="w-full text-center">
        <Footer.Copyright href="#" by="Cyruss Amante" year={2025} />
      </div>
    </Footer>
  );
}

export default SiteFooter;
