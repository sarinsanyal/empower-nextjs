"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DashboardPage() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState("Dashboard");
    const router = useRouter();

    useEffect(() => {
        function fetchUser() {
            if (loading) console.log("Loading user data...");
            (async () => {
                try {
                    const res = await fetch("/api/user");
                    const data = await res.json();
                    setUser(data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
                setLoading(false);
            })();
        }

        fetchUser();
    }, [loading]);

    useEffect(() => {
        if (pathname) {
            const segments = pathname.split("/").filter(Boolean);
            const page = segments[segments.length - 1] || "Dashboard";
            setCurrentPage(page.charAt(0).toUpperCase() + page.slice(1));
        }
    }, [pathname]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center text-muted-foreground">
                Loading your dashboard...
            </div>
        );
    }

    if (!user) {
        router.push('/login');
        return null;
    }
    // else{
         //console.log(user);
    // }
    return (
        <SidebarProvider
            className="pt-17 bg-background/10"
            style={{
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "4rem",
                fontFamily: "GeistSans, sans-serif",
            }}
        >
            <AppSidebar className="bg-transparent" user={user} />

            <SidebarInset
                className="rounded-[10px] bg-background/50 ml-2 mr-2 transition-all duration-200 ease-linear"
                style={{ borderRadius: "10px !important" }}
            >
                <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1 bg-background/50" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-white" />
                        <div className="aspect-video rounded-xl bg-white" />
                        <div className="aspect-video rounded-xl bg-white" />
                    </div>

                    <div className="min-h-[100vh] flex-1 rounded-xl bg-white md:min-h-min" />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
