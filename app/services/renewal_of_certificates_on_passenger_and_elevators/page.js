import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import React from "react";
import TextComp from "../TextComp";

const page = () => {
	return (
		<MainLayout>
			<BgImgText text='Renewal of certificates on Passenger &amp; Elevators' />
			<div className='w-[90%] mx-auto mb-[120px]'>
				<h1 className='sf700 font-[700] md:text-[24px] md:leading-[30px] text-[#000000CC]  text-center mt-[1.5rem] mb-[1.5rem]  mt-[4rem] '>
					Keep Your Passengers Moving Safely: Renewing Passenger Lift &amp;
					Elevator Certificates
				</h1>

				<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mb-[1rem] '>
					Ensure uninterrupted service and passenger safety with our efficient
					renewal services.
				</h2>

				<div className='flex flex-col space-y-[1.5rem]'>
					<TextComp header='Maintain Smooth Operation and Passenger Safety with Efficient Renewal Services:'>
						<ul className='flex flex-col space-y-[1rem] list-disc'>
							{[
								{
									header: "Safety Risks:",
									text: `Out-of-date equipment might malfunction, potentially leading to
                                    passenger injuries and even building evacuations.`,
								},
								{
									header: "Operational Disruptions:",
									text: `Non-compliants elevators can be shut down by
                                    authorities, causing disruptions to building operations and tenant
                                    inconvenience.`,
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
					</TextComp>

					<TextComp
						header='Your Partner in Seamless Renewal'
						text='At [Your Company Name], we understand the importance of maintaining valid
certificates for your passenger lifts and elevators. Our team of experienced
professionals provides comprehensive renewal services to ensure a smooth and
efficient process. We&#39;ll work closely with you to navigate the renewal requirements
and keep your lifts and elevators compliant.'
					/>

					<TextComp header='Our Streamlined Renewal Services:'>
						<div>
							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Renewal Deadline Tracking:",
										text: `We will track your upcoming passenger lift and
                                        elevator certificate renewal deadlines, ensuring you don&#39;t miss any critical
                                        dates.`,
									},
									{
										header: "Regulatory Expertise:",
										text: `Our team has a deep understanding of national and
                                        international lift and elevator renewal regulations, including local building
                                        codes. We&#39;ll stay current on any changes and ensure your renewal process
                                        complies with all relevant requirements.`,
									},

									{
										header: "Documentation Completion &amp; Submission:",
										text: `We will assist you in completing
                                        all necessary paperwork for the renewal process. Our team can also handle
                                        the submission of your application to the appropriate regulatory authority.
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
						header='Don&#39;t Let Compliance Slip'
						text='Ensure the safety of your passengers and the smooth operation of your building.
                        Contact [Your Company Name] today to discuss your passenger lift and elevator
                        certificate renewal needs. Our team will ensure a smooth and compliant process,
                        keeping your lifts and elevators running safely and efficiently.'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
