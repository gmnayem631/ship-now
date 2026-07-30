"use client";

import React from "react";
import Instagram from "../icons/socials/Instagram";
import X from "../icons/socials/X";
import Youtube from "../icons/socials/Youtube";
import LinkedIn from "../icons/socials/LinkedIn";
import Facebook from "../icons/socials/Facebook";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F0F0F0] px-6 py-4">
      <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#757575] md:flex-row">
        {/* Left Side: Copyright */}
        <p className="font-semibold text-[#333]">
          Copyright © 2025{" "}
          <span className="font-semibold text-[#333333]">Petershow</span>
        </p>

        {/* Center: Legal & Policy Links */}
        <div className="flex items-center space-x-6 text-[#757575]">
          <a href="#" className="transition-colors hover:text-[#333333]">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-[#333333]">
            Terms and conditions
          </a>
          <a href="#" className="transition-colors hover:text-[#333333]">
            Contact
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-3.5 text-[#757575]">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="transition-colors hover:text-[#333333]"
            aria-label="Website"
          >
            <Facebook />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            className="transition-colors hover:text-[#333333]"
            aria-label="X (Twitter)"
          >
            <X />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="transition-colors hover:text-[#333333]"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="transition-colors hover:text-[#333333]"
            aria-label="YouTube"
          >
            <Youtube />
          </Link>
          <Link
            href="https://linkedin.com/in/gulam-mustafa-nayem"
            target="_blank"
            className="transition-colors hover:text-[#333333]"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </Link>
        </div>
      </div>
    </footer>
  );
};
