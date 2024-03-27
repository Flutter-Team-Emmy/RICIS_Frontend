
const pagination = "<1/12 Pages >";

const NewApplication = () => {
    return (
        <div className="pt-16 pb-12">
            <div className="w-[95%] m-auto pb-8">
                <h1 className="text-black font-bold">NEW APPLICATION</h1>
                <p className="text-gray-600 text-sm">Please fill all information correctly</p>
                <p className="text-sm text-gray-600 text-end pt-4">{pagination}</p>
            </div>
            <div className="bg-white w-[95%] m-auto shadow-md rounded-md space-y-8 py-6 pl-6">
                <h1 className="text-[#46B038] font-bold">APPLICATION DETAILS</h1>
                <form className="max-w-sm">
                    <label for="applicationType" className="block mb-2 font-medium">Application Type</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[70%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select a Type</option>
                        <option value="pdf">Clearance</option>
                        <option value="docs">Oil and greasing equipments check</option>
                        <option value="exe">Suit check</option>
                    </select>
                </form>
                <button className="bg-[#46B038] px-4 py-2 text-white text-sm font-medium rounded-sm">Save and Proceed</button>
            </div>
        </div>
    )
};

export default NewApplication