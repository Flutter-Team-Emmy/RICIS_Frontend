"use client";
import Table from "@/components/Table";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import StatsCard from "../user/dashboard/statsCard";
import Link from "next/link";
import { AddCircleIcon } from "@/svgs";
import { stats } from "../user/dashboard/stats";
import { applications } from "@/utils/data";
import { useGetAllApplicationsQuery } from "@/store/api/applicationApi";
import axios from "axios";
import { baseUrl } from "@/lib/configs";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/authHelpers";

const Admin = () => {

  // hello george, i dont understand the way u handle ur api, so i decided to do something over here
  const getApplications = async () =>{
    try {
       const token = getToken(); 
     const res = await axios.get(`${baseUrl}/application`, {
       headers:{
         "Authorization": `Bearer ${token}`
       }
     })
     
    if(res){
      setData(res.data.data.applications)
    }
      
    } catch (error) {
        console.log(error)
    } 
  }

  const [data, setData] = useState([])

  useEffect(()=>{
      getApplications()
    
    
  },[])



  return (
    <DashboardLayout header="Admin">
      <div className="space-y-10 w-full">
        <div className="lg:flex lg:justify-between w-full items-center">
          <div className="space-y-2">
            <h1 className="text-gray-900 text-3xl font-medium">Welcome Back</h1>
            <p className="text-gray-500">
              Here is a preview of your activities and information
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full gap-6 overflow-x-scroll lg:overflow-x-hidden">
          { stats.map((stat) => (
            <StatsCard
              key={stat.id}
              status={stat.status}
              amount={stat.amount}
              percentage={stat.percentage}
              increase={stat.increase}
              colorCode={stat.colorCode}
              colorClass={stat.colorClass}
            />
          ))}
        </div>
        <Table />
      </div>
    </DashboardLayout>
  );
};

export default Admin;
