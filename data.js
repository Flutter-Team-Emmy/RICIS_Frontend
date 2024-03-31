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
				header: "About Us",
				id: "02",
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
				id: "03",
				drop: servicesDrop && [...servicesDrop],
			},

			{
				header: "Legislation/Rules",
				id: "04",
				drop: legislationDrop && [...legislationDrop],
			},

			{
				header: "Information",
				id: "05",
				drop: informationDrop && [...informationDrop],
			},

			{
				header: "Notifications",
				id: "06",
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
				id: "07",
				href: "/faq",
			},

			{
				header: "Contact Us",
				id: "08",
				href: "/contact",
			},
		]
	)
};

