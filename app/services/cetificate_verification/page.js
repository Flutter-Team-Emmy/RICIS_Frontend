import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import React from "react";
import TextComp from "../TextComp";

const page = () => {
	return (
		<MainLayout>
			<BgImgText text='Certificate Verification' />
			<div className='w-[90%] mx-auto mb-[120px]'>
				<h1 className='sf700 font-[700] md:text-[24px] md:leading-[30px] text-[#000000CC]  text-center mt-[1.5rem] mb-[1.5rem]   '>
					Ensure Competence and Boost Confidence: Personnel Certification
					Services
				</h1>

				<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] mb-[1rem] '>
					Ensure the authenticity of diplomas, licenses, and more with our fast,
					secure verification services.
				</h2>

				<TextComp
					header='Empower Your Workforce and Elevate Your Business with Proven
                    Qualifications'
					text='In today&#39;s competitive business environment, a skilled and qualified workforce is
                    essential for success. Personnel certification provides a standardized and reliable
                    way to assess the knowledge, skills, and experience of individuals in various
                    professions.'
				/>
				<TextComp header='Why Choose Personnel Certification?'>
					<ul className='flex flex-col space-y-[1rem] list-disc'>
						{[
							{
								header: "Enhanced Employee Competence:",
								text: `Certification verifies that individuals
                                possess the necessary skills and knowledge to perform their jobs effectively
                                and safely.`,
							},
							{
								header: "Increased Confidence:",
								text: `Certifications personnel experience a boost in confidence
                                and a sense of accomplishment, leading to improved job performance.`,
							},

							{
								header: "Competitive Advantage:",
								text: `A team of certified professionals distinguishes your
                                company from competitors and can give you an edge in attracting top talent
                                and clients.`,
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
					header='Your Partner in Personnel Certification'
					text='At [Your Company Name], we understand the value of personnel certification. We
                        offer comprehensive services to help individuals and organizations navigate the
                        certification process efficiently.'
				/>

				<div className='flex flex-col space-y-[1.5rem]'>
					<TextComp header='Our Streamlined Certification Services:'>
						<div>
							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Certification Program Identification:",
										text: `We will guide you in identifying the most
                                        relevant and reputable certification programs for your industry and personnel
                                        needs.`,
									},
									{
										header: "Eligibility Assessment:",
										text: `We will help you determine whether individuals meet
                                        the program's eligibility requirements, such as education and experience.`,
									},

									{
										header: "Preparation Support:",
										text: `We offer a variety of resources, including study
                                        materials and practice exams, to help individuals prepare for certification
                                        exams.`,
									},

									{
										header: "Application &amp; Registration Support",
										text: `We will assist with the application
                                        process, ensuring all necessary documentation is submitted correctly and on
                                        time.`,
									},
									{
										header: "Ongoing Support:",
										text: `We offer offer ongoing support to help individuals maintain their
                                        certifications through recertification requirements.`,
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

					<TextComp header='Benefits of Partnering with Us:'>
						<div>
							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Streamlined Process:",
										text: `We make the certification process efficient and stress-
                                        free for both individuals and organizations.`,
									},
									{
										header: "Expert Guidance:",
										text: `Our team has extensive knowledge of various certification
                                        programs and can provide valuable insights and support.`,
									},

									{
										header: "Increased Success Rates:",
										text: `Our preparation resources and guidance
                                        increase the chances of successful certificatio.
                                      `,
									},

									{
										header: "Peace of Mind: ",
										text: `We handle the complexities of the process, allowing you to
                                        focus on your core business activities.
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

					<TextComp header='Who Can Benefit from Personnel Certification?'>
						<div>
							<h2>
								Personnel certification benefits a wide range of individuals and
								organizations:
							</h2>

							<h2 className='font-[700] text-[#000000CC] sf400 text-[1.25rem] leading-[30px]'>
								Individuals:
							</h2>

							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Career Advancement",
										text: `Certification can demonstrate your expertise and
                                        qualifications, aiding promotions and career development..`,
									},
									{
										header: "Increased Earning Potential:",
										text: ` Certifications can increase your marketability
                                        and potentially lead to higher salaries`,
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

							<h2 className='font-[700] text-[#000000CC] sf400 text-[1.25rem] leading-[30px] mt-[1rem]'>
								Organizations:
							</h2>

							<ul className='flex flex-col space-y-[1rem] list-disc'>
								{[
									{
										header: "Improved Overall Performance:",
										text: ` A certified workforce leads to improved
                                        efficiency, quality, and productivity.`,
									},
									{
										header: "Risk Reduction:",
										text: ` Certifications can minimize errors and accidents, leading to a
                                        safer work environment.`,
									},
									{
										header: " Enhanced Client Confidence:",
										text: ` Demonstrates your commitment to quality and
                                        safety, fostering trust with clients.`,
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
						header='Invest in Your Future'
						text='Personnel certification is a valuable investment for both individuals and
                        organizations. Contact [Your Company Name] today to discuss your personnel
                        
                        certification needs. Let us help you unlock the potential of your workforce and
                        achieve your business goals.'
					/>
				</div>
			</div>
		</MainLayout>
	);
};

export default page;
