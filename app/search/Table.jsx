"use client"

const tableColumn = ["Certificate No.", "Category", "Validity", "Status"];

const certificates = [
    {
        ref_no: "FFEY55278282DGGDDT26",
        application_name: "Lifting",
        expiry_date: "21 Aug 2022",
        status: "ACTIVE"
    },
    {
        ref_no: "FFEY55278282DGGDDT26",
        application_name: "Lifting",
        expiry_date: "21 Aug 2022",
        status: "EXPIRED"
    },
    {
        ref_no: "FFEY55278282DGGDDT26",
        application_name: "Lifting",
        expiry_date: "21 Aug 2022",
        status: "ACTIVE"
    },
    {
        ref_no: "FFEY55278282DGGDDT26",
        application_name: "Lifting",
        expiry_date: "21 Aug 2022",
        status: "ACTIVE"
    },
    {
        ref_no: "FFEY55278282DGGDDT26",
        application_name: "Lifting",
        expiry_date: "21 Aug 2022",
        status: "EXPIRED"
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
                    {certificates?.map((data, index) => {
                        return (
                            <tr
                                key={data.id}
                                className=" border-b-[1px] border-b-gray-300 border-b-solid cursor-pointer hover:opacity-70" >
                                <td className={`px-6 py-4  `}>{data.ref_no}</td>
                                <td className={`px-6 py-4`}>{data.application_name}</td>
                                <td className={`px-6 py-4`}>{data.expiry_date}</td>
                                <td className={`whitespace-nowrap text-white`}>
                                    <div className={`px-2 w-fit py-1 ${data.status === "ACTIVE" ? "bg-green-600" : "bg-red-600"} rounded-md`}>
                                        {data.status}
                                    </div>
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