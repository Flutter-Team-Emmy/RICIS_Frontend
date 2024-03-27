import {
    dashboardIcon,
    applicationIcon,
    draftsIcon,
    NotificationIcon,
  } from "@/svgs";

export const sidebarLinks = [
    {
        id: "s1",
        name: "Dashboard",
        href: "/dashboard",
        icon: dashboardIcon
    },
    {
        id: "s2",
        name: "Applications",
        href: "/applications",
        icon: applicationIcon
    },
    {
        id: "s3",
        name: "Notifications",
        href: "/notifications",
        icon: NotificationIcon
    },
    {
        id: "s4",
        name: "Drafts",
        href: "/drafts",
        icon: draftsIcon
    },
]