"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarLinks } from ".";

const activeClass = "bg-blue-700 hover:bg-blue-600";

const Sidebar = ({ display, lg_display, zIndex }) => {
  const pathname = usePathname();
  return (
    <aside className={`h-screen bg-[#1A191B] px-4 fixed top-0 w-[12rem]`}>
      <div className="flex flex-col space-y-3 text-white mt-2">
        <ul className="mt-28 space-y-3 text-sm">
          {sidebarLinks.map((link, index) => (
            <>
              <li
                key={link.id}
                className={` ${pathname === link.href && activeClass}
                  ${pathname.includes(link.href) && activeClass}
                 flex items-center gap-2 p-2 rounded-md mb-3`}
              >
                <span className="">{link.icon}</span>
                <Link className="" href={link.href}>
                  {link.name}
                </Link>
              </li>
              {index === 0 && <hr className="border-gray-600" />}
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
            <p className="text-xs text-gray-200">Applicant</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
