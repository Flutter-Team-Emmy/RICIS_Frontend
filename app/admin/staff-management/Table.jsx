
const tableHeader = ["Staff Name", "Email Address", "Satus", "Date Applied"];

const tableData = [
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "active",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "active",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "inactive",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "active",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "active",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "inactive",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "active",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "active",
        dateApplied: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        staffname: "Sheila Daniels",
        email: "Sheiladaniel@gmail.com",
        status: "inactive",
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
                            <tr key={index} className="text-sm border-b-[1px] border-b-gray-300 border-b-solid">
                                {columns.map((col, idx) =>
                                    col === "dateApplied" ?
                                        <td key={idx} className="px-6 py-4">
                                            <p>{data.dateApplied.date}</p>
                                            <p>{data.dateApplied.time}</p>
                                        </td> :
                                        <td key={idx}
                                            className={`px-6 py-4 ${data[col] === "active" ? "text-[#69CB5C]" : data[col] === "inactive" ? "text-[#EABD52]" : "text-black"}  ${col === "status" && ""}`}>
                                            <span className={`${data[col] === "active" ? "rounded-xl bg-green-100 p-1.5" : data[col] === "inactive" ? "rounded-xl bg-orange-50 p-1.5" : "rounded-0 bg-none"}`}>{data[col]}</span>
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