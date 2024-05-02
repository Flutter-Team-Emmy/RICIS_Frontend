"use client"

import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import { useGetServiceQuery } from "@/store/api/generalApi";
import { useParams } from "next/navigation";

const Service = () => {

    const params = useParams();
    const serviceId = params.serviceId;

    const { data, isLoading, isSuccess } = useGetServiceQuery(serviceId);

    const results = data?.data.paragraphs;
    const headerImgurl = data?.data.image;
    const headerName = data?.data.name;

    return (
        <MainLayout>
            <BgImgText text={headerName} url={headerImgurl} />
            <div className="pb-20 pt-12">
                {results?.map((data) =>
                    <div key={data.id} className="px-8 py-4">
                        {(data.image && data.image_location === "TOP") &&
                            <div className="w-full lg:w-[60%] mt-4 mb-16 h-[16rem] lg:h-[25rem] mx-auto">
                                <img src={data.image} alt="" />
                            </div>
                        }
                        {data.title && <h1 className="font-bold text-xl pb-4">{data.title}</h1>}
                        {data.paragraph && <p className="">{data.paragraph}</p>}
                        {(data.image && data.image_location === "BOTTOM") &&
                            <div className="w-full lg:w-[60%] h-[16rem] lg:h-[25rem] mt-12 mx-auto">
                                <img className="w-full h-full" src={data.image} alt="" />
                            </div>
                        }
                    </div>
                )}
            </div>
        </MainLayout>
    )
};

export default Service;