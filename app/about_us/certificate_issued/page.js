import BgImgText from "@/components/BgImgText";
import React from "react";
import Text from "./Text";

const Cert = () => {
	return (
		<div>
			<BgImgText header='About Us' text='Certificate Issued' />
			<div className='w-[90%] mx-auto pt-[4rem] pb-[6rem]'>
				<h2 className='sf400 text-[1.25rem] leading-[30px]  text-[#00000084] '>
					Doctors and researchers might ask Sienna’s team whether a particular
					drug was ever linked to an adverse event, like “Has amoxycillin ever
					caused encephalitis?” Or they might answer questions about new drug
					delivery platforms, like “How do you get our large molecule drug
					inside the cell so that it can actually get to the target, where it
					will do the work of curing the disease?” For questions like these,
					Sienna and her team seek information to compile resource lists or
					reports.
				</h2>

				<div className='flex space-y-[2rem] flex-col mt-[64px]'>
					<Text
						header='Dean Certificate'
						text='Doctors and researchers might ask Sienna’s team whether a particular
					drug was ever linked to an adverse event, like “Has amoxycillin ever
					caused encephalitis?” Or they might answer questions about new drug
					delivery platforms, like “How do you get our large molecule drug
					inside the cell so that it can actually get to the target, where it
					will do the work of curing the disease?” For questions like these,
					Sienna and her team seek information to compile resource lists or
					reports.'
					/>

					<Text
						header='Squirell Certificate'
						text='Doctors and researchers might ask Sienna’s team whether a particular
					drug was ever linked to an adverse event, like “Has amoxycillin ever
					caused encephalitis?” Or they might answer questions about new drug
					delivery platforms, like “How do you get our large molecule drug
					inside the cell so that it can actually get to the target, where it
					will do the work of curing the disease?” For questions like these,
					Sienna and her team seek information to compile resource lists or
					reports.'
					/>
					<Text
						header='Personnel Certificate'
						text='Doctors and researchers might ask Sienna’s team whether a particular
					drug was ever linked to an adverse event, like “Has amoxycillin ever
					caused encephalitis?” Or they might answer questions about new drug
					delivery platforms, like “How do you get our large molecule drug
					inside the cell so that it can actually get to the target, where it
					will do the work of curing the disease?” For questions like these,
					Sienna and her team seek information to compile resource lists or
					reports.'
					/>

					<Text
						header='Crames Certificate'
						text='Doctors and researchers might ask Sienna’s team whether a particular
					drug was ever linked to an adverse event, like “Has amoxycillin ever
					caused encephalitis?” Or they might answer questions about new drug
					delivery platforms, like “How do you get our large molecule drug
					inside the cell so that it can actually get to the target, where it
					will do the work of curing the disease?” For questions like these,
					Sienna and her team seek information to compile resource lists or
					reports.'
					/>
				</div>
			</div>
		</div>
	);
};

export default Cert;
