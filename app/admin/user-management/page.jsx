import DashboardLayout from "@/components/layouts/DashboardLayout";
import Table from "./Table";

const UserManagement = () => {
    return (
        <DashboardLayout header="Admin">
            <div className="w-full pb-8">
                <h1 className="text-black font-bold text-2xl">User Management</h1>
                <p className="text-gray-600 text-sm">view all user account details list below</p>
            </div>
            <div className="bg-white rounded-lg">
                <h1 className="text-[#3361FF] font-bold pt-4 pl-6 pb-6">All</h1>
                <Table />
            </div>
        </DashboardLayout>
    )
};

export default UserManagement;