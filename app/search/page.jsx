"use client"

import { ArrowLeft } from "@/svgs";
import { useRouter } from "next/navigation";
import Table from "./Table";

const Search = () => {

    const router = useRouter();

    return (
        <div className="w-full pb-8">
            <div
                className="mt-8 ml-8 w-[2.5rem] h-[2.5rem] flex items-center justify-center cursor-pointer hover:opacity-70 p-2 rounded-full border-gray-400 border-2 border-dashed"
                onClick={() => router.back()}>
                {ArrowLeft}
            </div>
            <div className="w-[90%] mx-auto py-8">
                <h1 className="text-black font-bold text-2xl">SEARCH</h1>
                <p className="text-gray-600 text-sm">
                    Search Certificate And Qualification Holders
                </p>
            </div>
            <form className="bg-white p-8 mx-auto w-[90%] rounded-md shadow-md mt-16" action="">
                <div className="w-[80%] mx-auto">
                    <div className="flex space-y-4 flex-col w-[90%]">
                        <label className="font-bold" htmlFor="lastName">Last Name:</label>
                        <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none" placeholder="Enter Last Name" type="text" />
                    </div>
                    <div className="flex justify-center items-center space-x-4 my-8 w-[90%]">
                        <div className="border-t border-gray-300 flex-grow" />
                        <p className="text-gray-500 font-semibold">Or</p>
                        <div className="border-t border-gray-300 flex-grow" />
                    </div>
                    <div className="mb-4 flex flex-col space-y-4 w-[90%]">
                        <label className="font-bold" htmlFor="lastName">Certificate Number:</label>
                        <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none" placeholder="Enter Certificate Number" type="text" />
                    </div>
                    <button className="bg-blue-600 text-white rounded-md px-12 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2" type="submit">Search</button>
                </div>
            </form>
            <div className="w-[90%] mx-auto font-bold text-md text-center pt-8">
                <p className="">5 Results for Last Name: Moses</p>
            </div>
            <div className="bg-white p-6 mt-12 w-[90%] mx-auto rounded-md shadow-md">
                <Table />
            </div>
        </div>
    )
};

export default Search;