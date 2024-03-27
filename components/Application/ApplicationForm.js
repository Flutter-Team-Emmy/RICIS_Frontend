const { default: InputField } = require("./InputField")

const ApplicationForm = () => {
    return (
        <div>
            <div className="w-[95%] m-auto pb-8">
                <h1 className="text-black font-bold">NEW APPLICATION</h1>
                <p className="text-gray-600 text-sm">Please fill all information correctly</p>
                <p className="text-sm text-gray-600 text-end pt-4">{pagination}</p>
            </div>
            <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
                <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS</h1>
                <form className=" ">
                    <div className="flex gap-x-8 w-full justify-around">
                        <div className="space-y-4 w-full">
                            <div className="">
                                <label for="applicationType" className="block mb-2 font-medium">Application Type</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-[90%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected >Clearance</option>
                                    <option value="docs">Oil and greasing equipments check</option>
                                    <option value="exe">Suit check</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Union Certificate</label>
                                <button className="bg-gray-200 px-4 py-2 rounded-3xl text-sm">Choose File</button>
                            </div>
                        </div>

                        <div className="space-y-4 w-full">
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Union Certificate</label>
                                <button className="bg-gray-200 px-4 py-2 rounded-3xl text-sm">Choose File</button>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                        </div>

                        <div className="space-y-4 w-full">
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Union Certificate</label>
                                <button className="bg-gray-200 px-4 py-2 rounded-3xl text-sm">Choose File</button>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium" for="companyname">Company Name</label>
                                <InputField placeholder="Enter Company Name" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-2 mt-8">
                        <button className="bg-black px-4 py-2 text-white text-sm font-medium rounded-sm">Back</button>
                        <button className="bg-[#46B038] px-4 py-2 text-white text-sm font-medium rounded-sm">Save and Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ApplicationForm;