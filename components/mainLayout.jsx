"use client"

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HomeSidebar from "./HomeSidebar";

const MainLayout = ({ children }) => {

	const [showHomeSidebar, setShowHomeSidebar] = useState(false);

	return (
		<>
			{showHomeSidebar && <HomeSidebar setShowHomeSidebar={setShowHomeSidebar} />}
			<div>
				<Header />
				<Navbar  setShowHomeSidebar={setShowHomeSidebar} />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
