import {
  dashboardIcon,
  applicationIcon,
  draftsIcon,
  NotificationIcon,
  CiChartIcon,
} from "@/svgs";

export const UserSidebarLinks = [
  {
    id: "s1",
    name: "Dashboard",
    href: "/user",
    icon: dashboardIcon,
  },
  {
    id: "s2",
    name: "Applications",
    href: "/user/applications",
    icon: applicationIcon,
  },
  {
    id: "s3",
    name: "Notifications",
    href: "/user/notifications",
    icon: NotificationIcon,
  },
  {
    id: "s4",
    name: "Drafts",
    href: "/user/drafts",
    icon: draftsIcon,
  },
];

export const AdminSidebarLinks = [
  {
    id: "s1",
    name: "Overview",
    href: "/admin",
    icon: CiChartIcon,
  },
  {
    id: "s2",
    name: "App Management",
    href: "/admin/app-management",
    icon: dashboardIcon,
  },
  {
    id: "s3",
    name: "Staff Management",
    href: "/admin/staff-management",
    icon: applicationIcon,
  },
  {
    id: "s4",
    name: "User Management",
    href: "/admin/user-management",
    icon: NotificationIcon,
  },
  {
    id: "s5",
    name: "Financial Management",
    href: "/admin/financial-management",
    icon: draftsIcon,
  },
];

export const StaffSidebarLinks = AdminSidebarLinks.slice(0, 2);
