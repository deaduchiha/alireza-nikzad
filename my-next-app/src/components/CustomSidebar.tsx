"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant={"outline"} className="text-black inline-block md:hidden" onClick={toggleSidebar}>
      Toggle Sidebar
    </Button>
  );
}
