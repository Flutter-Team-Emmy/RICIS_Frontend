"use client"

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { applicationsTabs } from "@/utils/data";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Table from "@/components/Table";

const activeClass = "text-blue-700 font-semibold";
const inactiveClass = "text-gray-400";

const Applications = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const param = searchParams.get("tab");

    return (
        <DashboardLayout header="Dashboard">
            <div className="space-y-10 w-full bg-white p-4">
                <div className="flex items-center gap-2 text-sm">
                    {applicationsTabs.map((tab, index) => {
                        return <Link
                            className={`${!param && index === 0 ? activeClass : inactiveClass} ${param === tab.tab ? activeClass : inactiveClass}`}
                            key={tab.id}
                            href={{ pathname: pathname, query: { tab: tab.tab } }}>
                            {capitalizeFirstLetter(tab.tab)}
                        </Link>
                    })}
                </div>
                <Table />
            </div>
        </DashboardLayout>
    )
}

export default Applications;