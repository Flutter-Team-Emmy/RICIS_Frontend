"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { UserSidebarLinks, AdminSidebarLinks, StaffSidebarLinks } from ".";
import {
  getToken,
  removeToken,
  removeLoginTime,
  getLoginTime,
} from "@/utils/authHelpers";
import { useGetCurrentUserQuery } from "@/store/api/userApi";
import { LogoutIcon, crossIcon } from "@/svgs";

const activeClass = "bg-blue-700 hover:bg-blue-600";

const Sidebar = ({
  display,
  lg_display,
  zIndex,
  showSidebar,
  setShowSidebar,
}) => {
  // const []
  const pathname = usePathname();
  const router = useRouter();
  const isAdmin = pathname.includes("admin");
  const { isLoading, isSuccess, isError, error, data } = useGetCurrentUserQuery();
  const role = data?.data.role;
  const currentUser = data?.data.user;
  const token = getToken();
  console.log(role);

  const openProfilePage = () => {
    if (role === "ADMIN" || role === "STAFF") {
      router.push("/admin/profile");
    }
    if (role === "USER") {
      router.push("/user/profile");
    }
  };

  const logout = () => {
    router.replace("/");
    removeToken();
  };

  useEffect(() => {
    const loginTime = getLoginTime();
    if (loginTime) {
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(loginTime, 10);

      if (elapsedTime >= twentyFourHours) {
        logout();
        removeLoginTime();
      } else {
        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const elapsedTime = currentTime - parseInt(loginTime, 10);
          if (elapsedTime >= twentyFourHours) {
            logout();
            removeLoginTime();
            clearInterval(interval);
          }
        }, 60000);
      }
    }
  }, []);

  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  }, [token]);

  return (
    <aside
      className={`h-screen bg-[#1A191B] px-2 fixed top-0 w-[12rem] z-[1000] lg:block ${showSidebar}`}
    >
      <span
        className="w-12 h-12 lg:hidden ml-32 mt-6"
        onClick={() => setShowSidebar("hidden")}
      >
        {crossIcon}
      </span>
      <div className="flex flex-col space-y-3 text-white mt-2">
        <ul className="mt-28 space-y-3 text-sm">
          {isSuccess &&
            (role === "USER"
              ? UserSidebarLinks
              : role === "STAFF"
              ? StaffSidebarLinks
              : AdminSidebarLinks
            ).map((link, index) => (
              <>
                <li
                  key={link.id}
                  className={`${pathname === link.href ? activeClass : ""}
                 flex items-center gap-2 p-2 rounded-md mb-3 text-xs`}
                >
                  <span className="">{link.icon}</span>
                  <Link className="" href={link.href}>
                    {link.name}
                  </Link>
                </li>
                {index === 0 ? <hr className="border-gray-600" /> : ""}
              </>
            ))}
          {isLoading &&
            [1, 2, 3, 4, 5].map((loader) => (
              <div
                key={loader}
                className="w-full h-8 rounded-md bg-gray-700 animate-pulse"
              ></div>
            ))}
        </ul>
        <div className="text-sm">
          <button
            onClick={logout}
            className="flex items-center gap-1 mt-20 px-6 py-2 bg-blue-800 rounded-md hover:bg-blue-700"
          >
            <span>{LogoutIcon}</span>
            <span className="">Logout</span>
          </button>
        </div>
        {isSuccess && (
          <div
            onClick={openProfilePage}
            className="fixed bottom-6 flex justify-center items-center gap-2 cursor-pointer"
          >
            <Image
              width={30}
              height={30}
              className=""
              src="/images/avatar.png"
              alt="avatar"
            />
            <div className>
              <p className="text-sm">David Stephen</p>
              <p className="text-xs text-gray-200">Applicant</p>
            </div>
          </div>
        )}
        {(isLoading || data?.data?.length === 0) && (
          <div className="fixed bottom-6 flex justify-center items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full animate-pulse bg-gray-700"></div>
            <div className="space-y-2">
              <p className="w-12 h-2 animate-pulse bg-gray-700"></p>
              <p className="w-24 h-3 animate-pulse bg-gray-700"></p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
