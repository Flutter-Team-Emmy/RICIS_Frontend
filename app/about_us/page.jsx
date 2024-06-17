import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import React from "react";

const Activities = () => {
  return (
    <MainLayout>
      <div>
        <BgImgText header="About Us" text="Activities" />
        <div className="w-[90%] mx-auto pt-[4rem] pb-[6rem] space-y-10">
          <h1 className="font-semibold text-2xl">
            Activities of Regulatory Implementation & Compliance Services
            (RICS)
          </h1>
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Develop technical guidelines for the administration, management
                and implementation of the Boiler & Pressure Vessel Regulation,
                2018 (BPVR) and the Lifting & Allied Work Equipment (Safety)
                Regulation, 2018 (LAWER).
              </span>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-2 h-1.5 rounded-full bg-gray-500">.</p>
              <p className="text-gray-500 leading-regula">
                Organize awareness campaigns and carry out training on
                implementation and compliance to requirements of BPVR and LAWER
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Inspect and monitor organizations for implementation and
                compliance of the BPVR and LAWER.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Carry out inspection of Steam Boilers, Pressure Vessels, Cranes
                and Lifting Equipment, during manufacture or installation for
                the purpose of registration as required by Regulation.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Publish records of registered equipment and all other activities
                undertaken in relation to implementation and compliance of the
                BPVR and LAWER.
              </span>
            </div>
            <div className="flex items-center  gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Review and approve design calculations and drawings associated
                with the manufacture and erection of boilers, pressure vessels,
                passenger lifts, escalators, and other lifting equipment as
                appropriate.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Review quality program and quality documents pertaining to
                manufacture of boilers, pressure vessels, passenger lifts,
                escalators, lifting equipment and other related components.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Investigate and submit reports on accident involving boilers,
                pressure vessels, passenger lifts, escalators, lifting equipment
                and other related components under the purview of the BPVR and
                LAWER.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Recommend for prosecution of the owners of boilers, pressure
                vessels, passenger lifts, escalators, lifting equipment and
                other related components for violation of the provisions in the
                Regulations.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Update records of the OSH Department with respect to location
                change and transfer of boilers and pressure vessels.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                In conjunction with the Exam Board, develop body of knowledge
                for personnel competency examinations and purse accreditation of
                certification program to international standard.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Coordinate the activities of the Examination Board and
                administer competency examinations as enshrined in BPVR and
                LAWER.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                Conduct qualification tests of pressure welders and recommend
                successful candidates for certification.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-1.5 rounded-full bg-gray-500">.</span>
              <span className="text-gray-500 leading-regula">
                In conjunction with the OSH Department compliance team, conduct
                approval audit for Registered Contactors, Authorised Inspection
                Agency and Training Organisations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Activities;
