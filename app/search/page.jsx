"use client"

import { ArrowLeft } from "@/svgs";
import { useRouter } from "next/navigation";
import Table from "./Table";

const Search = () => {

    const router = useRouter();

    return (
        <div className="w-full pb-8">
            <div
                className="mt-8 ml-8 w-[3rem] h-[3rem] cursor-pointer hover:opacity-70 p-2 rounded-full border-gray-400 border-2 border-dashed"
                onClick={() => router.back()}>
                {ArrowLeft}
            </div>
            <form className="p-8 mx-auto w-[50%] mt-16 mx-auto" action="">
                <div className="flex space-y-4 flex-col">
                    <label className="font-bold" htmlFor="lastName">Last Name:</label>
                    <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none" placeholder="Enter Last Name" type="text" />
                </div>
                <div className="flex justify-center items-center space-x-4 my-4">
                    <div className="border-t border-gray-300 flex-grow" />
                    <p className="text-gray-500 font-semibold">Or</p>
                    <div className="border-t border-gray-300 flex-grow" />
                </div>
                <div className="mb-4 flex flex-col space-y-4">
                    <label className="font-bold" htmlFor="lastName">Certificate Number:</label>
                    <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none" placeholder="Enter Certificate Number" type="text" />
                </div>
                <button className="bg-blue-600 text-white rounded-md px-12 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2" type="submit">Search</button>
            </form>
            <div className="bg-white p-6 mt-12 w-[90%] mx-auto">
                <Table />
            </div>
        </div>
    )
};

export default Search;