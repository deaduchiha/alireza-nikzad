import { AppSidebar } from "@/components/AppSidebar";
import { CustomTrigger } from "@/components/CustomSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="mt-2">
        <CustomTrigger />
        <div>{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
