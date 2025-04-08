"use client"

import { AppSidebar } from "@/components/ui/app-sidebar"
import { useState } from "react"
import { GeistSans } from 'geist/font/sans';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
    const [currentPage, setCurrentPage] = useState("");
    return (
        <SidebarProvider
            className="pt-17 bg-background/10"
            style={{
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "4rem",
                fontFamily: "GeistSans, sans-serif",
            }}
        >
            <AppSidebar className="bg-transparent" />
            <SidebarInset className="rounded-[10px] bg-background/50 ml-2 mr-2 transition-all duration-200 ease-linear"
                style={{
                    borderRadius: "10px !important",
                }}
            >
                <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1 bg-background/50" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard">
                                    Dashboard
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{currentPage || "Data"}</BreadcrumbPage>
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
    )
}
