"use client";
import { headerRound } from "@/svgs";
import React, { useState } from "react";
import Btn from "./Btn";
import HeaderDropDown from "./HeaderDropDown";
import { headerDrop } from "@/data";

const Header = () => {
	const [selectedHeader, setSelectedHeader] = useState("");
	return (
		<div className='flex justify-between w-full px-[3.75rem] pt-[2rem] items-end '>
			<div className='flex flex-col space-y-[10px] w-[30%] mb-[1rem]'>
				<span>{headerRound("#2056A7")}</span>
				<div>
					<h2 className='sf500 text-[10px] leading-[12px] tracking-[-0.2px]'>
						Technical Consultant
					</h2>
					<h2 className='sf500 text-[10px] leading-[12px] tracking-[-0.2px]'>
						Boiler & Pressure Vessel Regulation{" "}
					</h2>
					<h2 className='sf500 text-[10px] leading-[12px] tracking-[-0.2px]'>
						{" "}
						Lifting & Allied Work Equipment (Safety) Regulation
					</h2>
					<h2 className='sf500 text-[10px] leading-[12px] tracking-[-0.2px]'>
						info@ries.gov.ng, www. ries.gov.ng
					</h2>
				</div>
			</div>

			<div className='w-[60%] flex flex-col items-enter'>
				<div className='flex justify-between w-full items-start '>
					<div className='flex flex-col space-y-[0.5rem] items-center justify-between '>
						<img src='/images/logo.jpg' />
						<div className='flex flex-col '>
							<h2 className='sf600 text-[10px] leading-[12px] uppercase text-center'>
								Regulatory IMPLEMentation & compliance scheme
							</h2>
							<h2 className='sf600 text-[10px] leading-[12px] uppercase text-center'>
								OCCUPATIONAL SAFETY & HEALTH DEPARTMENT
							</h2>
							<h2 className='sf600 text-[10px] leading-[12px] uppercase text-center'>
								FEDERAL MINISTRY OF LABOUR & EMPLOYMENT
							</h2>
						</div>
					</div>

					<div>
						<Btn text='Sign in' />
					</div>
				</div>

				<div className='mt-[3rem] flex items-center space-x-[2rem] justify-between '>
					{headerDrop.map((drop, i) => (
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
		</div>
	);
};

export default Header;
