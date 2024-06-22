 import { useGetInformationQuery, useGetServicesQuery, useGetlegislaionsQuery } from "./store/api/generalApi";


export const headerDrop = () => {

	const { data: servicesData} = useGetServicesQuery();
	const { data: information } = useGetInformationQuery();
	const { data: legislationData } = useGetlegislaionsQuery();

	const servicesDrop = servicesData?.data.services;
	const legislationDrop = legislationData?.data.legislations;
	const informationDrop = information?.data.information;

	console.log(servicesDrop)

	return (
		[
			{
				header: "Home",
				href: "/",
				id: "01"
			},
			{
				header: "Search",
				href: "/search",
				id: "02"
			},
			{
				header: "About Us",
				id: "03",
				href: "about_us",
				drop: [
					{
						name: "Activities",
						href: "/about_us",
					},
					{
						name: "Administrative Structure",
						href: "/about_us/administrative_structure",
					},
					{
						name: "Certificate Issued",
						href: "/about_us/certificate_issued",
					},
				],
			},

			{
				header: "Services",
				id: "04",
				href: "/services",
				drop: servicesDrop && [...servicesDrop],
			},

			{
				header: "Legislation/Rules",
				id: "05",
				href: "/legislation_rules",
				drop: legislationDrop && [...legislationDrop],
			},

			{
				header: "Information",
				id: "06",
				drop: informationDrop && [...informationDrop],
			},

			{
				header: "Notifications",
				id: "07",
				drop: [
					{
						name: "News",
						href: "/notification?selected=News",
					},
					{
						name: "Notice",
						href: "/notification?selected=Notice",
					},
					{
						name: "Circular",
						href: "/notification?selected=Circular",
					},
				],
			},

			{
				header: "FAQs",
				id: "08",
				href: "/faq",
			},

			{
				header: "Contact Us",
				id: "09",
				href: "/contact",
			},
		]
	)
};

