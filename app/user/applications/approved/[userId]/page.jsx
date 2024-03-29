import ApplicationStatus from "@/components/Application/ApplicationStatus";


const { default: DashboardLayout } = require("@/components/layouts/DashboardLayout")

const ApplicationApproved = () => {
    return (
        <DashboardLayout header="Application">
            <div className="flex justify-between w-[95%]">
                <div className="w-full pb-8">
                    <h1 className="text-black font-bold text-2xl">APPLICATION APPROVED</h1>
                    <p className="text-gray-600 text-sm">Congratulations! Your Application was successful</p>
                </div>
                <div className="w-[30%]">
                    <button className="text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md">Download Certificat</button>
                </div>
            </div>
            <div className="bg-white rounded-md pt-8 pl-6 pb-6">
                <ApplicationStatus />
            </div>
        </DashboardLayout>
    )
};

export default ApplicationApproved;