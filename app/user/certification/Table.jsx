import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const tableColumn = ["App.No.", "Category", "Certificate No.", "Validity", "Status", "Action"];

const certifications = [
    {
        id: "cr1",
        appNo: "FJDHDGSTTSH36633836",
        category: "Consultant Services",
        certNo: "N/A",
        validity: "N/A",
        status: "Not Submitted",
        action: "Open"
    },
    {
        id: "cr2",
        appNo: "FJDHDGSTTSH36633836",
        category: "Quality control inspection and testing",
        certNo: "N/A",
        validity: "N/A",
        status: "Approved, Awaiting PickUp",
        action: "Open"
    },
    {
        id: "cr3",
        appNo: "FJDHDGSTTSH36633836",
        category: "Consultant Services",
        certNo: "N/A",
        validity: "N/A",
        status: "Not Submitted",
        action: "Open"
    },
    {
        id: "cr2",
        appNo: "FJDHDGSTTSH36633836",
        category: "Quality control inspection and testing",
        certNo: "N/A",
        validity: "N/A",
        status: "Approved, Awaiting PickUp",
        action: "Open"
    },
    {
        id: "cr2",
        appNo: "FJDHDGSTTSH36633836",
        category: "Quality control inspection and testing",
        certNo: "N/A",
        validity: "N/A",
        status: "Approved, Awaiting PickUp",
        action: "Open"
    },
];

const Table = () => {
    return (
        <div className="w-full overflow-x-scroll lg:overflow-x-hidden z-[-10] rounded-lg text-xs">
            <table className="w-full text-left rtl:text-right">
                <thead className={` bg-dark-gray text-gray-400 py-4 bg-gray-100`}>
                    <tr className="whitespace-nowrap">
                        {tableColumn.map((data, index) => (
                            <th key={index} scope="col" className="lg:px-6 px-4 py-3">
                                {data}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="">
                    {certifications.map((data, index) => {
                        // const columns = Object.keys(data);
                        return (
                            <tr
                                key={data.id}
                                className=" border-b-[1px] border-b-gray-300 border-b-solid cursor-pointer hover:opacity-70" >
                                <td className={`px-6 py-4  `}>{data.appNo}</td>
                                <td className={`px-6 py-4`}>{data.category}</td>
                                <td className={`px-6 py-4`}>{data.certNo}</td>
                                <td className={`px-6 py-4`}>{data.validity}</td>
                                <td className={`whitespace-nowrap text-white`}>
                                    <div className="px-2 w-fit py-1 bg-yellow-300 rounded-md">
                                        {data.status}
                                    </div>
                                </td>
                                <td className={`px-6 py-4`}>
                                    <Select>
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue placeholder={data.action} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>North America</SelectLabel>
                                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;