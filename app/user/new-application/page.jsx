"use client"
import { Suspense } from "react";
import NewApp from "./new-app";

const pagination = "<1/12 Pages >";

const initialFormData = {
    application_details: ""
}

const NewApplication = () => {
    return(
        <Suspense>
            <NewApp />
        </Suspense>
    )
};

export default NewApplication;
