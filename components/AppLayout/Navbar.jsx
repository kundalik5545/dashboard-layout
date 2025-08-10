"use client";
import { Bell } from "lucide-react";
import { User2 } from "lucide-react";

import React from "react";
import { Button } from "../ui/button";
import ModeToggle from "./ModeToggle";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">App Name</h1>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notification Icon, Dark Mode Icon,User Icon */}
          <section className="flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => alert("You have 5 Notification pending.")}
            >
              <Bell />
            </Button>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* User detail */}
            <button onClick={() => {}}>
              <User2 />
            </button>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
