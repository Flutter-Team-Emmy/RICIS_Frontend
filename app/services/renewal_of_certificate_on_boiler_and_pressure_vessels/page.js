import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import React from "react";
import TextComp from "../TextComp";

const page = () => {
	return (
		<MainLayout>
			<BgImgText text='Renewal of certificate on Boiler &amp; Pressure Vessels' />
			<div className='w-[90%] mx-auto mb-[120px]'>
				<h1 className='sf700 font-[700] md:text-[24px] md:leading-[30px] text-[#000000CC]  text-center mt-[1.5rem] mb-[1.5rem]  mt-[4rem] '>
					Keeping Your Boilers &amp; Pressure Vessels Safe and Compliant:
					Certificate Renewal
				</h1>

				<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mb-[1rem] '>
					Avoid Downtime, Ensure Safety: Boiler &amp; Pressure Vessel
					Certificate Renewal
				</h2>

				<div className='flex flex-col space-y-[1.5rem]'>
					<TextComp
						header='Don’t Let Compliance Slip Through the Cracks'
						text='Boilers and pressure vessels are vital equipment in many industries, but their
                        continued safe operation hinges on proper maintenance and up-to-date
                        certifications. Failing to renew your boiler and pressure vessel certificates can
                        lead to safety hazards, operational disruptions, and even legal repercussions.'
					/>

					<TextComp
						header='Your Partner in Seamless Renewal'
						text='At [Your Company Name], we understand the importance of maintaining valid
                        certificates for your boilers and pressure vessels. Our team of experienced
                        professionals provides comprehensive renewal services to ensure a smooth and
                        efficient process. We’ll work closely with you to navigate the renewal requirements
                        and keep your equipment compliant.'
					/>

					<TextComp header='Our Streamlined Renewal Services:'>
						<ul className='flex flex-col space-y-[1rem] list-disc'>
							{[
								{
									header: "Renewal Deadline Tracking:",
									text: ` We’ll keep track of your upcoming boiler and
                                    pressure vessel certificate renewal deadlines, ensuring you don’t miss any
                                    critical dates.`,
								},
								{
									header: "Regulatory Expertise:",
									text: `Our team has a deep understanding of national and
                                    international boiler and pressure vessel renewal regulations. We’ll stay up-to-
                                    date on any changes and ensure your renewal process adheres to all relevant
                                    requirements.`,
								},

								{
									header: "Documentation Completion &amp; Submission:",
									text: `We will assist you in completing
                                    all necessary paperwork for the renewal process. Our team can also handle
                                    the submission of your application to the appropriate regulatory authority.`,
								},
								{
									header: "Inspection Coordination:",
									text: `If required, we can facilitate on-site inspections of
                                    your boilers and pressure vessels by qualified inspectors. This ensures your
                                    equipment meets all safety standards for continued operation.`,
								},
								{
									header: "Post-Renewal Support: ",
									text: `We will continue to be a resource for you after your
                                    certificate renewal. We can answer any questions you may have and provide
                                    ongoing support for maintaining compliance.`,
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

					<TextComp header='The Benefits of Timely Renewal:'>
						<div>
							<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
								Renewing your boiler and pressure vessel certificates on time
								offers significant benefits:
							</h2>

							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Ensured Safety:",
										text: `Regular inspections and compliance with regulations
                                        minimize the risk of accidents and injuries, creating a safe work environment
                                        for your employees.`,
									},
									{
										header: "Continued Operation:",
										text: `A valid certificate allows you to operate your boilers
                                        and pressure vessels without interruption, maintaining your operational
                                        efficiency.`,
									},

									{
										header: "Avoided Fines &amp; Penalties:",
										text: `Non-compliance with renewal requirements can
                                        result in fines and penalties from regulatory authorities.
                                      `,
									},

									{
										header: "Peace of Mind:",
										text: `Knowing your certificates are up-to-date gives you peace of
                                        mind and allows you to focus on running your business with confidence.s.
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
						header='Don&#39;t Wait Until It&#39;s Too Late'
						text='Don’t risk the safety and operational efficiency of your business by neglecting
                        certificate renewal for your boilers and pressure vessels. Contact [Your Company
                        Name] today to discuss your renewal needs. Our team of experts will ensure a
                        smooth and compliant process, keeping your equipment safe and your business
                        running smoothly.'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
