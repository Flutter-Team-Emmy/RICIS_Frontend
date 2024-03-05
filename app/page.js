import Header from "@/components/Header";
import Image from "next/image";
import FirstSect from "./FirstSect";
import Services from "./Services";
import ThirdSect from "./ThirdSect";
import Notice from "./Notice";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div>			
			<FirstSect />
			<Services />
			<ThirdSect />
			<Notice />			
		</div>
	);
}
