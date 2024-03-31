"use client";
import { headerRound } from "../svgs";
import React, { useState } from "react";
import Btn from "./Btn";
import HeaderDropDown from "./HeaderDropDown";
import { headerDrop } from "../data";
import Link from "next/link";

const Header = () => {
	const [selectedHeader, setSelectedHeader] = useState("");


	const dropData = headerDrop();

	return (
		<div className="w-[60%] flex flex-col items-enter">
			<div className="flex justify-between w-full items-start ">
				<Link
					href="/"
					className="flex flex-col space-y-[0.5rem] items-center justify-between "
				>
					<img alt="" src="/images/logo.jpg" />
					<div className="flex flex-col space--[1px] hidden">
						<h2 className="sf600 text-[10px] leading-[12px] uppercase text-center  text-[#68768C] font-[500]">
							Regulatory IMPLEMentation & compliance scheme
						</h2>
						<h2 className="sf600 text-[10px] leading-[12px] uppercase text-center  text-[#68768C] font-[500]">
							OCCUPATIONAL SAFETY & HEALTH DEPARTMENT
						</h2>
						<h2 className="sf600 text-[10px] leading-[12px] uppercase text-center  text-[#68768C] font-[500]">
							FEDERAL MINISTRY OF LABOUR & EMPLOYMENT
						</h2>
					</div>
				</Link>

				<Link className="" href="/signin">
					<Btn text="Sign in" />
				</Link>
			</div>

			<div className='mt-[3rem] flex items-center space-x-[2rem] justify-between pb-[5px]'>
				{dropData?.map((drop, i) => (
					<HeaderDropDown
						header={drop.header}
						drop={drop.drop}
						key={i}
						href={drop.href}
						selectedHeader={selectedHeader}
						setSelectedHeader={setSelectedHeader}
					/>
				))}
			</div>
		</div>
	);
};

export default Header;
