import DashboardLayout from "@/components/layouts/DashboardLayout";
import StaffDetails from "../../staffDetails";

const EditStaff = () => {
  return (
    <DashboardLayout header="Admin">
      <StaffDetails />
      <div className="flex gap-x-2 pt-12 pb-20">
        <h1 className="font-bold">Role:</h1>
        <p className="text-[#46B038]">clearance and oil and greasing</p>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold">Add available Staff roles</h1>
        <div className="space-y-4">
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Clearance</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="border-green-500 appearance-none w-4 h-4 border-[0.5px] border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none "
            />
            <p>Oil and Greasing Equipment</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-8 pt-20">
        <button className="bg-[#F0F2F2] shadow-sm rounded-md flex gap-x-4 px-6 py-2">
          <p className="font-medium text-sm">Save Changes</p>
        </button>
        <button className="bg-[#46B038] shadow-sm rounded-md text-sm text-white py-2 px-6">
          Suspend
        </button>
      </div>
    </DashboardLayout>
  );
};

export default EditStaff;
