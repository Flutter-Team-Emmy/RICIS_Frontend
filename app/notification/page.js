"use client";
import React, { useState } from "react";
import BgImgText from "@/components/BgImgText";
import Tab from "./Tab";
import News from "./News";
import Notice from "./Notice";
import Circular from "./Circular";

const Page = () => {
	const [selectedTab, setSelectedTab] = useState("News");

	const handleClick = (name) => {
		setSelectedTab(name);
	};

	return (
		<div className='mb-[6rem]  '>
			<BgImgText header='NOTIFICATION' text='News, Notice & Circular' />
			<div className='border-b-[2px] border-transparent border-b-[#0000000A]    '>
				<div className='w-[90%] mx-auto flex space-x-[64px] pt-[2rem]'>
					<Tab
						name='News'
						selected={selectedTab === "News"}
						handleClick={handleClick}
					/>
					<Tab
						name='Notice'
						selected={selectedTab === "Notice"}
						handleClick={handleClick}
					/>
					<Tab
						name='Circular'
						selected={selectedTab === "Circular"}
						handleClick={handleClick}
					/>
				</div>
			</div>

			<div className='pt-[2rem]'>
				{selectedTab === "News" ? (
					<News />
				) : selectedTab === "Notice" ? (
					<Notice />
				) : (
					<Circular />
				)}
			</div>
		</div>
	);
};

export default Page;
