"use client";

import React from "react";
import MainLayout from "@/components/mainLayout";


const Admin = () => {


  return (
    <MainLayout>
      <div>
        <div className="grid bg-[url('/images/contact-us.png')] relative bg-cover bg-no-repeat w-full h-[30rem] pt-20 lg:px-10 px-4">
        <div className="absolute inset-0 bg-black opacity-40 h-full"></div>
          <div className="mt-auto text-white pb-12 pl-12 relative">
            <h1 className="text-sm font-light">ABOUT US</h1>
            <h1 className="text-3xl font-[700]">Administrative Structure</h1>
          </div>
        </div>
        <div className="max-w-[60%] mx-auto text-center py-20 space-y-4">
          <h1 className="font-bold text-3xl">List of Our RIC Inspection Services Structure </h1>
          <p className="text-sm text-gray-400">Our RICIS structure encompasses a comprehensive framework that drives our organization's approach to addressing complex societal challenges.  It guides our endeavors towards meaningful and enduring contributions to the world.</p>
        </div>
        <img src="/images/administrativeStructure.png" className="w-[80%] mx-auto h-[50rem] pb-32" alt="" />
      </div>
    </MainLayout>
  );
};

export default Admin;
