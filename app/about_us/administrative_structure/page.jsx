"use client";

import React from "react";
import MainLayout from "@/components/mainLayout";
import BgImgText from "@/components/BgImgText";

const Admin = () => {
  return (
    <MainLayout>
      <div>
        <BgImgText header="About Us" text="Administrative Structure" url="/images/9347.jpg" />
        <div className="max-w-[60%] mx-auto text-center py-20 space-y-4">
          <h1 className="font-bold text-3xl">
            List of Our RIC Inspection Services Structure{" "}
          </h1>
          <p className="text-sm text-gray-400">
            Our RICIS structure encompasses a comprehensive framework that
            drives our organization's approach to addressing complex societal
            challenges. It guides our endeavors towards meaningful and enduring
            contributions to the world.
          </p>
        </div>
        <img
          src="/images/administrativeStructure.png"
          className="w-[80%] mx-auto h-[50rem] pb-32"
          alt=""
        />
      </div>
    </MainLayout>
  );
};

export default Admin;
