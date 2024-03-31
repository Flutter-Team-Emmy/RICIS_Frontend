import Link from "next/link";
import { accountCircle, headerRound } from "../svgs";
import crossIcon from "../public/images/Cross.svg";
import Image from "next/image";
import { headerDrop } from "../data";
import dropdown from "../public/images/dropdown.svg";
import { useState } from "react";
import { getToken } from "@/utils/authHelpers";


const HomeSidebar = ({ setShowHomeSidebar }) => {

    const [toggle, setToggle] = useState(false);
    const [selectedId, setSelectedId] = useState(["01"]);

    const token = getToken();

    const toggleDropDown = (dropdown_id) => {
        if (selectedId.includes(dropdown_id)) {
            setSelectedId(selectedId.filter(id => id !== dropdown_id));
        } else {
            setSelectedId(prev => [...prev, dropdown_id])
        }
    }

    // console.log(selectedId)

    return (
        <div className="h-screen bg-white px-2  top-0 w-[16rem] pb-8 z-[1000] lg:hidden fixed">
            <div className="flex justify-between items-center px-4 py-8">
                {token && <span className="">{accountCircle}</span>}
                <Image width={40} h={40} onClick={() => setShowHomeSidebar(false)} className="" src={crossIcon} alt="" />
            </div>
            <Link href='/' className='flex flex-col space-y-[10px] w-full pt-8 pb-6 pl-4'>
                <span>{headerRound("#2056A7")}</span>
                <div className="flex flex-col space-y-[1px]">
                    <h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
                        Technical Consultant
                    </h2>
                    <h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
                        Boiler & Pressure Vessel Regulation{" "}
                    </h2>
                    <h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
                        {" "}
                        Lifting & Allied Work Equipment (Safety) Regulation
                    </h2>
                    <h2 className='sf500 text-[10px] text-[#68768C] uppercase leading-[12px] tracking-[-0.2px] font-[500]'>
                        info@ries.gov.ng, www. ries.gov.ng
                    </h2>
                </div>
            </Link>
            <ul className="py-6 pl-4 text-gray-400 h-full overflow-y-scroll">
                {headerDrop.map((data, index) => {
                    const isOpen = selectedId.includes(data.id);
                    return <li key={index}>
                        {data.drop ?
                            <div onClick={() => toggleDropDown(data.id)} className="flex items-center gap-x-2">
                                <p className="font-medium ">{data.header}</p>
                                <Image width={20} height={20} color="gray" className={`${isOpen ? "rotate-180" : "rotate-0"} text-gray-300`} src={dropdown} alt="" />
                            </div> :
                            <p className="font-medium ">{data.header}</p>
                        }
                        {isOpen && <div className="text-gray-300">
                            {data.drop?.map((info, idx) =>
                                <p key={idx}>{info.text}</p>
                            )}
                        </div>}
                    </li>
                }
                )}
                {!token && <button className="bg-[#3361FF] text-white w-[70%] rounded-md ml-4 mt-6 px-4 py-2">Sign In</button>}
            </ul>
        </div>
    )
};

export default HomeSidebar;