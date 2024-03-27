import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import React from "react";
import TextComp from "../TextComp";

const page = () => {
	return (
		<MainLayout>
			<BgImgText text='Renewal of certificates on Passenger &amp; Lift Equipment' />
			<div className='w-[90%] mx-auto mb-[120px]'>
				<h1 className='sf700 font-[700] md:text-[24px] md:leading-[30px] text-[#000000CC]  text-center mt-[1.5rem] mb-[1.5rem]   '>
					Renewing Safety &amp; Smooth Movement: Passenger &amp; Lift Equipment
					Certificates
				</h1>

				<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mb-[1rem] '>
					Don&#39;t let expired certificates disrupt operations. We handle
					renewals for lifts, elevators, and litty equipment.
				</h2>

				<div className='flex flex-col space-y-[1.5rem]'>
					<TextComp header='Maintain Compliance and Confidence with Streamlined Renewal Services'>
						<div>
							<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
								Passenger lifts, elevators, and lifts equipment are crucial for
								keeping people and goods moving efficiently in buildings.
								However, their safe operation hinges on up-to- date
								certificates. Failing to renew these certificates can lead to:
							</h2>

							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Safety Hazards:",
										text: `Out-of-date equipment might malfunction, potentially
                                        causing injuries and disruptions.`,
									},
									{
										header: "Operational Disruptions:",
										text: `Non-compliants equipment could be shut down by
                                        authorities, impacting building operations and tenants.`,
									},

									{
										header: "Legal Issues:",
										text: `Neglecting certificate renewal can result in fines and penalties
                                    from regulatory bodies.`,
									},
								].map((data, i) => (
									<li key={i}>
										<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
											<span className='font-[700] text-[#000000CC] '>
												{data.header}
											</span>{" "}
											{data.text}
										</h2>
									</li>
								))}
							</ul>
						</div>
					</TextComp>

					<TextComp
						header='Your Partner in Efficient Renewal'
						text='At [Your Company Name], we understand the importance of maintaining valid
                        certificates for your passenger lifts, elevators, and litty equipment. Our team of
                        experienced professionals provides comprehensive renewal services to ensure a
                        smooth and efficient process. We&#39;ll work closely with you to navigate the renewal
                        requirements and keep your equipment compliant.'
					/>

					<TextComp header='Our Streamlined Renewal Services:'>
						<div>
							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Renewal Deadline Tracking:",
										text: `We will track your upcoming certificate renewal
                                        deadlines for all your equipment, ensuring you don&#39;t miss any critical dates.`,
									},
									{
										header: "Regulatory Expertise:",
										text: `Our team has a deep understanding of national and
                                        international renewal regulations for passenger lifts, elevators, and litty
                                        equipment, including local building codes. We&#39;ll stay current on any changes
                                        and ensure your renewal process adheres to all relevant requirements.`,
									},

									{
										header: "Documentation Completion &amp; Submission:",
										text: `We will assist you in completing
                                        all necessary paperwork for the renewal process. Our team can also handle
                                        the submission of your application to the appropriate regulatory authorities.
                                      `,
									},

									{
										header: "Inspection Coordination:",
										text: `If required, we can facilitate on-site inspections of
                                        your lifts and elevators by qualified inspectors. This ensures your equipment
                                        meets all safety standards for continued operation.
                                      `,
									},
									{
										header: "Post-Renewal Support:",
										text: `We will continue to be a resource for you after your
                                        certificate renewal, answering questions and providing ongoing support for
                                        maintaining compliance.
                                      `,
									},
								].map((data, i) => (
									<li key={i}>
										<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
											<span className='font-[700] text-[#000000CC] '>
												{data.header}
											</span>{" "}
											{data.text}
										</h2>
									</li>
								))}
							</ul>
						</div>
					</TextComp>

					<TextComp header='The Benefits of Timely Renewal:'>
						<div>
							<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
								Renewing your passenger lift and elevator certificates on time
								offers significant benefits:
							</h2>

							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Enhanced Passenger Safety:",
										text: `Regular inspections and compliance with
                                        regulations minimize the risk of accidents and injuries, creating a safe
                                        environment for building occupants.`,
									},
									{
										header: "Uninterrupted Operation:",
										text: `Valid certificates allow your lifts and elevators to
                                        operate without interruption, minimizing disruption to building tenants and
                                        ensuring smooth operations.`,
									},

									{
										header: "Avoided Legal Issues:",
										text: `Timely renewal helps you avoid potential fines and
                                        penalties from regulatory authorities.
                                      `,
									},

									{
										header: "Peace of Mind:",
										text: `Knowing your certificates are up-to-date gives you peace of
                                        mind and allows you to focus on running your business with confidence.
                                      `,
									},
								].map((data, i) => (
									<li key={i}>
										<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
											<span className='font-[700] text-[#000000CC] '>
												{data.header}
											</span>{" "}
											{data.text}
										</h2>
									</li>
								))}
							</ul>
						</div>
					</TextComp>

					<TextComp
						header='Simplify Your Renewal Process'
						text='Don&#39;t let equipment certificate renewal become a burden. Contact [Your Company
                            Name] today to discuss your renewal needs for passenger lifts, elevators, and litty
                            equipment. Our team will ensure a smooth and compliant process, keeping your
                            building a safe and efficient environment for everyone.'
					/>

					<TextComp
						header='Clarification Needed:'
						text='If "litty equipment" is a misspelling, please provide the correct term for the equipment
                        you want to include (e.g., loading dock equipment, material handling equipment).
                        This will ensure the content accurately reflects the services you offer.'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
