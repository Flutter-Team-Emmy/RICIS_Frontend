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
             
        </MainLayout>
    )
};

export default Service;