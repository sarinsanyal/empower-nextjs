import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

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
} from "@/components/ui/sidebar"

// Navigation data for journal analysis dashboard
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
        },
        {
          title: "Recent Entries", 
          url: "/dashboard/entries"
        }
      ],
    },
    {
      title: "Analysis",
      url: "/analysis",
      items: [
        {
          title: "Sentiment Trends",
          url: "/analysis/sentiment",
        },
        {
          title: "Topic Analysis",
          url: "/analysis/topics", 
        },
        {
          title: "Key Insights",
          url: "/analysis/insights",
        },
      ],
    },
    {
      title: "Visualizations",
      url: "/graphs",
      items: [
        {
          title: "Mood Timeline",
          url: "/graphs/mood",
        },
        {
          title: "Word Frequency",
          url: "/graphs/words",
        },
        {
          title: "Theme Distribution",
          url: "/graphs/themes"
        }
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      items: [
        {
          title: "Preferences",
          url: "/settings/preferences",
        },
        {
          title: "Notifications",
          url: "/settings/notifications"
        }
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
        {
          title: "Support",
          url: "/about/support",
        },
        
      ]
    }
  ],
}

export function AppSidebar({ user, ...props }) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                {/* User Profile Section */}
                <div className="flex items-center gap-3">
                  <img
                    src={user?.photo || "/default-image.png"} // Fallback avatar
                    alt="User Avatar"
                    className="size-8 rounded-full border border-gray-300"
                  />
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">{user?.name || "User"}</span>
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
