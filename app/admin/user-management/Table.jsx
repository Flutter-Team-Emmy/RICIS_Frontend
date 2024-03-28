 
const tableHeader = ["Username", "Email Address", "Phone Number", "Date Applied"];

const tableData = [
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        username: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        phone: "09050000000",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    
];


const Table = () => {
    return (
        <div className="w-full overflow-x-scroll lg:overflow-x-hidden z-[-10] rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className={`text-sm bg-dark-gray text-gray-400 py-4`}>
                    <tr className="whitespace-nowrap">
                        {tableHeader.map((data, index) =>
                            <th key={index} scope="col" className="lg:px-6 px-4 py-3">
                                {data}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="">
                    {tableData.map((data, index) => {
                        const columns = Object.keys(data);
                        return (
                            <tr key={index} className="border-b-[1px] border-b-gray-300 border-b-solid">
                                {columns.map((col, idx) =>
                                    col === "dateApplied" ?
                                        <td key={idx} className="px-6 py-4">
                                            <p>{data.dateApplied.date}</p>
                                            <p>{data.dateApplied.time}</p>
                                        </td> :
                                        <td key={idx}
                                            className={`px-6 py-4 ${col === "status" && ""}`}>
                                            {data[col]}
                                        </td>
                                )}
                            </tr>
                        )
                    }

                    )}
                </tbody>
            </table>
        </div>
    )
};

export default Table;