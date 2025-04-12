"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// Navigation data
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        { title: "Overview", url: "/dashboard/overview" },
        { title: "Recent Entries", url: "/dashboard/entries" },
      ],
    },
    {
      title: "Analysis",
      url: "/analysis",
      items: [
        { title: "Sentiment Trends", url: "/analysis/sentiment" },
        { title: "Topic Analysis", url: "/analysis/topics" },
        { title: "Key Insights", url: "/analysis/insights" },
      ],
    },
    {
      title: "Visualizations",
      url: "/graphs",
      items: [
        { title: "Mood Timeline", url: "/graphs/mood" },
        { title: "Word Frequency", url: "/graphs/words" },
        { title: "Theme Distribution", url: "/graphs/themes" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      items: [
        { title: "Preferences", url: "/settings/preferences" },
        { title: "Notifications", url: "/settings/notifications" },
      ],
    },
    {
      title: "Community",
      url: "/about",
      items: [
        {
          title: "Contribute",
          url: "https://github.com/sarinsanyal/empower-nextjs",
        },
        { title: "Support", url: "/about/support" },
      ],
    },
  ],
};

export function AppSidebar({ user, ...props }) {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" {...props}>
      {/* Top Profile Section */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      user?.profilePhoto ||
                      "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                    }
                    alt="User Avatar"
                    className="size-8 rounded-full border border-gray-300"
                  />
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">
                      {user?.name || "User"}
                    </span>
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Navigation Menu */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.url}
                >
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>

                {/* Sub-items if present */}
                {item.items?.length > 0 && (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === subItem.url}
                        >
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
