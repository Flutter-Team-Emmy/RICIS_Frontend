const { default: DashboardLayout } = require("@/components/layouts/DashboardLayout");


const staffDetails = [
    {
        header: "Name",
        des: "Sheila Daniels"
    },
    {
        header: "Email Address",
        des: "Sheiladaniel@gmail.com"
    },
    {
        header: "Date Added",
        des: "01/01/2025"
    },
];

const StaffProfile = () => {
    return (
        <DashboardLayout header="Admin">
            <div className="flex justify-between">
                <div className="w-full pb-8">
                    <h1 className="text-black font-bold text-2xl">Staff Profile</h1>
                    <p className="text-gray-600 text-sm">view all your account details below</p>
                </div>
                <div className="flex gap-x-4 w-full justify-end">
                    <button className="rounded-md h-[50%] text-sm text-[#46B038] p-2 border-[1px] border-solid border-[#46B038]">Suspend</button>
                    <button className="text-sm bg-[#46B038] h-[50%] text-white py-2 px-4 w-fit rounded-md">Save Changes</button>
                </div>
            </div>
            <div className="bg-white rounded-lg pt-8 pl-4 pb-8">
                <h1 className="text-[#46B038] font-bold pt-4 pb-6">USER DETAILS:</h1>
                <div className="flex justify-between w-full">
                    <div className="space-y-6 w-full">
                        {staffDetails.map((data, index) =>
                            <div key={index} className="w-[40%] space-y-2">
                                <h2 className="font-bold">{data.header}</h2>
                                <div className="border-[1px] border-gray-150 border-solid rounded-lg py-2 pl-4">
                                    <p className="text-sm text-gray-400">{data.des}</p>
                                </div>
                            </div>
                        )}
                        <div className="bg-[#e9fce9] text-sm text-[#69CB5C] text-center w-16 h-6 rounded-lg">Active</div>
                    </div>

                    <div className="space-y-4 w-[60%]">
                        <h1 className="font-bold">Roles</h1>
                        <div className="flex gap-x-2 text-sm">
                            <input type="radio" className="text-[#46B038] w-4 h-4" />
                            <label htmlFor="">Clearance</label>
                        </div>
                        <div className="flex gap-x-2 text-sm">
                            <input type="radio" className="text-[#46B038] w-4 h-4" />
                            <label htmlFor="">Oil and Greasing Equipment</label>
                        </div>
                        <div className="flex gap-x-2 text-sm">
                            <input type="radio" className="text-[#46B038] w-4 h-4" checked />
                            <label htmlFor="">Suit Validation</label>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
};

export default StaffProfile;