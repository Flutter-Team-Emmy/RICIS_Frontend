"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderDropDown = ({
	header,
	drop,
	href,
	selectedHeader,
	setSelectedHeader,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [selected, setSelected] = useState(false);
	const [counter, setCounter] = useState(0);
	const router = useRouter();


	const isSelected = selectedHeader === header;

	useEffect(() => {
		if (
			window.location.pathname.startsWith("/about") ||
			window.location.pathname.startsWith("/contact")
		) {
			const selected = window.location.pathname.startsWith(
				`/${header.split(" ")[0].toLowerCase()}`,
			);
			setSelected(selected);
			return;
		}
		const selected = window.location.pathname.startsWith(
			`/${header.toLowerCase()}`,
		);
		setSelected(selected);
	}, [header]);

	return (
		<div
			className={`relative  w-fit  z-[30] h-[20px]  ${isSelected && "border-[#2056A7] border-b-[2px]"
				}  `}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => {
				setSelectedHeader(header);
				!drop && router.push(href);
			}}
		>
			<h1
				className={` headerNav cursor-pointer sf600 text-[13px] leading-[19.5px] text-center  ${isSelected ? "text-[#3361FF]" : "text-[#7E849B]"
					} `}
			>
				{header}
			</h1>

			{isHovered && drop && (
				<div className='absolute left-[-50%]  bg-[#FFFFFF]  border-[4px] border-transparent border-b-[#3361FF] py-[1.5rem] px-[2rem]  flex-col flex gap-[12px]'>
					{drop.map((drop,i) => (
						<Link
							href={header === "Services" ? `/services/${drop.id}` : header === "Legislation/Rules" ? "/legislation_rules" : header === "Information" ? "/information" : drop.href}
							key={i}
							className=' cursor-pointer  '
							onClick={() => {
								setCounter((count) => count + 1);
								setIsHovered(false);
							}}
						>
							<h2 className='sf500 text-[13px] leading-[19.5px] whitespace-nowrap  text-[#7E849B] '>
								{drop.name}
							</h2>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default HeaderDropDown;
