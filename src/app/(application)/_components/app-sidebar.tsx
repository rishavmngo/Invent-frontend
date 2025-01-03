import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi";
import { LuBoxes } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: RxDashboard,
  },
  {
    title: "Parties",
    url: "/parties",
    icon: HiOutlineUsers,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: LuBoxes,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: TbTransactionRupee,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: IoSettingsOutline,
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <div className="flex justify-content items-center px-5 py-5">
        <Image
          src="/Invent_logo.svg"
          width={32}
          height={32}
          alt="invent logo"
        />
        <span className="ml-2 text-2xl">Invent.</span>
      </div>
      <SidebarContent>
        <SidebarMenu className="px-5">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />

                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
