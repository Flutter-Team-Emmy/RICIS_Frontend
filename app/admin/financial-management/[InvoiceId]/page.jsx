import DashboardLayout from "@/components/layouts/DashboardLayout";

const Invoice = () => {
    return (
        <DashboardLayout header="Admin">
            <div className="w-full pb-8">
                <h1 className="text-black font-bold text-2xl">Account Invoices</h1>
                <p className="text-gray-600 text-sm">view all account purchase below</p>
            </div>
            <div className="bg-white rounded-lg py-6 pl-4">
                <h1 className="font-bold text-[#46B038] pb-6">IVOICE DEATAILS:</h1>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="font-bold">Payment ID</h1>
                        <p className="text-gray-400 text-sm">EAD2938389294284374</p>
                    </div>
                    <div  className="space-y-2">
                        <h1 className="font-bold">Application Ref</h1>
                        <p className="text-gray-400 text-sm">2938389294284374</p>
                    </div>
                    <div  className="space-y-2">
                        <h1 className="font-bold">Application Name</h1>
                        <p className="text-gray-400 text-sm">Clearance</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Applicant Name</h1>
                        <p className="text-gray-400 text-sm">AJ Gisthing LRD</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Company Details</h1>
                        <p className="text-gray-400 text-sm">Oshell Kaniuelly SIksy Directive Limited 12th floor, Daine Horne Street, Lagos. BNEEM</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Amount Paid</h1>
                        <p className="text-gray-400 text-sm">$ 30,000</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
};

export default Invoice;