"use client"

import BgImgText from "@/components/BgImgText";
import MainLayout from "@/components/mainLayout";
import { useParams, useRouter } from "next/navigation";

const Service = () => {

    const param  = useParams();
    console.log(param.serviceId)

    window.onload = function () {
        var data = localStorage.getItem('key');
        if (data) {
            // Use the retrieved data as needed
            console.log('Stored data:', data);
        }
    };

    return (
        <MainLayout>
            <BgImgText />
        </MainLayout>
    )
};

export default Service;