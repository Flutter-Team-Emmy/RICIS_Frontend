import BgImgText from "@/components/BgImgText";
import CardCenter from "@/components/CardCenter";
import MainLayout from "@/components/mainLayout";
import React from "react";

const page = () => {
	return (
		<MainLayout>
			<div>
				<BgImgText text='Our Services' url='/images/services.png' />
				<div className='w-[90%] mx-auto my-[4rem]'>
					<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
						She set up some Google Alerts, and subscribed to emails from
						assorted websites, but it was messy. And if members of the team
						weren’t already experts in an area (like bioprocessing, for
						example), Sienna found it hard to know which sources to look at for
						relevant research. Sienna and her team needed a way to ​track dozens
						of different topics and trends in biopharma at the same time from a
						large range of source <br /> <br />
						For certain queries, Sienna and her team get their information from
						published literature in research journals, like PubMed. However,
						Sienna remembers how tricky things got when her team started getting
						requests for information about broader topics like drug innovations,
						regulatory decisions, political decisions, or industry updates.
						“Rather than being about a specific disease, we started getting
						asked about things like drug pricing, or the gene and cell therapy
						industry.” Sienna commented that it wasn’t easy to capture this type
						of news about “those more general areas where there is news, rather
						than just published literature.”
					</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] w-[80%] mb-[6rem] mx-auto'>
					<CardCenter
						header='Regulation of Boilers & Pressure Vessel'
						subHeader='Ensure safety and compliance with our expert regulation
                        services for boilers and pressure vessels.'
						href='/services/regulation_of_boilers_pressure_vessel'
						img='/images/r&b.jpg'
					/>
					<CardCenter
						header='Registration of Passenger Lift & Elevators'
						subHeader='Keep your passengers safe and your building compliant with our expert lift and
                        elevator registration services.'
						href='/services/registration_of_passenger_lifts_elevators'
						img='/images/rop.jpg'
					/>
					<CardCenter
						header='Registration of Crane & Lifting Equipment'
						subHeader='Ensure the safe and legal operation of your cranes and lifting equipment with our
                        comprehensive registration services.'
						href='/services/registration_of_creanes_and_lifting_equipments'
						img='/images/roc.jpg'
					/>
					<CardCenter
						header='Approval of Boiler &amp; Pressure Vessel
                        Manufacturer'
						subHeader='Get certified to manufacture safe, high-quality boilers &amp; pressure vessels.'
						href='/services/approval_of_boiler_and_pressure_vessel_manufacturer'
						img='/images/ropc.jpg'
					/>
					<CardCenter
						header='Renewal of Certificate on Boiler &amp;
                        Pressure Vessels'
						subHeader='Avoid Downtime, Ensure Safety: Boiler &amp; Pressure Vessel
                        Certificate Renewal'
						href='/services/renewal_of_certificate_on_boiler_and_pressure_vessels'
						img='/images/aot.jpg'
					/>

					<CardCenter
						header='Renewal of Certificates on Passenger &amp;
                        Elevators'
						subHeader='Ensure uninterrupted service and passenger safety with our efficient
                        renewal services.'
						href='/services/renewal_of_certificates_on_passenger_and_elevators'
						img='/images/aoc.jpg'
					/>

					<CardCenter
						header='Renewal of Certificates on Passenger &amp;
                        Lift Equipment'
						subHeader='Ensure uninterrupted service and passenger safety with our efficient
                        renewal services.'
						href='/services/renewal_of_certificates_on_passenger_and_lift_equipment'
						img='/images/aoc.jpg'
					/>
					<CardCenter
						header='Approval of AIA'
						subHeader='Leverage our expertise to ensure your AIA contracts are clear, comprehensive,
                        and protect your interests.'
						href='/services/approval_of_aia'
						img='/images/aoc.jpg'
					/>

					<CardCenter
						header='Certificate Verfication'
						subHeader='Ensure the authenticity of diplomas, licenses, and more
                        with our fast, secure verification services.'
						href='/services/cetificate_verification'
						img='/images/aoc.jpg'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
