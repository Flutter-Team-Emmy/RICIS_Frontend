import DashboardLayout from "@/components/layouts/DashboardLayout";

const userDetails = [
    {
        header: "Name",
        des: "Sheila Daniels"
    },
    {
        header: "Email Address",
        des: "Sheiladaniel@gmail.com"
    },
    {
        header: "Phone Number",
        des: "09050000000"
    },
    {
        header: "Date Added",
        des: "01/01/2025"
    },
];

const UserProfile = () => {
    return (
        <DashboardLayout header="Admin">
            <div className="w-full pb-8">
                <h1 className="text-black font-bold text-2xl">User Profile</h1>
                <p className="text-gray-600 text-sm">view all user account details below</p>
            </div>
            <div className="bg-white rounded-lg pl-6 pb-6">
                <h1 className="text-[#46B038] font-bold pt-4 pb-6">USER DETAILS:</h1>
                <div className="space-y-6">
                    {userDetails.map((data, index) =>
                        <div key={index} className="w-[70%] lg:w-[25%] space-y-2">
                            <h2 className="font-bold">{data.header}</h2>
                            <div className="border-[1px] border-gray-150 border-solid rounded-lg py-2 pl-4">
                                <p className="text-sm text-gray-400">{data.des}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
};

export default UserProfile;