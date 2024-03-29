"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserSidebarLinks, AdminSidebarLinks } from ".";
import crossIcon from "../../public/images/Cross.svg";

const activeClass = "bg-blue-700 hover:bg-blue-600";

const Sidebar = ({ setShowSidebar, showSidebar }) => {

  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  console.log(pathname)

  return (
    <aside className={`h-screen bg-[#1A191B] px-2 fixed top-0 w-[12rem] z-[1000] lg:block ${showSidebar}`}>
      <Image onClick={() => setShowSidebar("hidden")} src={crossIcon} className="w-12 h-12 lg:hidden ml-32 mt-6" alt="" />
      <div className="flex flex-col space-y-3 text-white mt-2">
        <ul className="mt-16 lg:mt-28 space-y-3 text-sm">
          {(isAdmin ? AdminSidebarLinks : UserSidebarLinks).map((link, index) => (
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
        </ul>
        <div className="fixed bottom-6 flex justify-center items-center gap-2">
          <Image
            width={30}
            height={30}
            className=""
            src="/images/avatar.png"
            alt="avatar"
          />
          <div className>
            <p className="text-sm">David Stephen</p>
            <p className="text-sm lg:text-xs text-gray-200">Applicant</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
