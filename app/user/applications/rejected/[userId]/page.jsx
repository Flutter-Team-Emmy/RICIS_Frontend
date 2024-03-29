import ApplicationStatus from "@/components/Application/ApplicationStatus";
import DashboardLayout from "@/components/layouts/DashboardLayout";


const ApplicationRejected = () => {
    return (
        <DashboardLayout header="Application">
            <div className="lg:flex lg:justify-between w-[95%] pb-8">
                <div className="w-full pb-8">
                    <h1 className="text-black font-bold text-2xl">APPLICATION REJECTED</h1>
                    <p className="text-gray-600 text-sm">Sorry! Your Application was unsuccessful</p>
                </div>
                <div className="lg:w-[30%]">
                    {/* <Image src={certificateIcon} alt="download certificate icon" /> */}
                    <button className="text-sm bg-[#46B038] text-white py-2 px-4 w-fit rounded-md">Download Certificate</button>
                </div>
            </div>
            <div className="bg-white lg:flex lg:justify-between rounded-md pt-12 px-6 pb-6">
                <ApplicationStatus />
                <div className="lg:w-[45%] h-[80%] mt-8 pb-6 px-6 pt-8 bg-[#FFF6F6] text-[#7D3434] border-solid border-[1px] border-[#7D3434] rounded-md">
                    <p className="pb-4 font-bold">Reason:</p>
                    <p className="text-sm text-justify">
                        Thanks! it's amazing. however, I cannot open this and 'cleverly' which was also just released by the same author, on sketch 63.1. I get a message that says that the file... On the other hand, independent oil companies focus on a specific segment of the industry and typically engage in only one type of operation, such as exploration or production. While they may have a sharper focus on their core business activity, independent oil companies may face challenges in unfavorable market conditions due to the lack of profit counterbalance between upstream and downstream operations.

                        Integrated oil companies are involved in multiple stages of oil production, both upstream (exploration and production) and downstream (refining, distribution, and marketing). Being integrated allows these companies to have complete control over the entire value chain, leading to improved efficiency and diversified revenue streams. The oil and gas industry is dominated by several major companies, often referred to as "Big Oil." These companies are typically large, multinational corporations with significant resources and global operations. Some of the largest oil companies include Saudi Aramco, ExxonMobil, BP, Royal Dutch Shell, and Chevron.

                        Being integrated allows these companies to have complete control over the entire value chain, leading to improved efficiency and diversified revenue streams. The oil and gas industry is dominated by several major companies, often referred to as "Big Oil." These companies are typically large, multinational corporations with significant resources and global operations. Some of the largest oil companies include Saudi Aramco, ExxonMobil, BP, Royal Dutch Shell, and Chevron.
                    </p>
                </div>
            </div>
        </DashboardLayout>
    )
};

export default ApplicationRejected;