"use client";

import { useGetAllApplicationsQuery } from "@/store/api/applicationApi";
import {
  setApplications,
  setFetchingStates,
} from "@/store/features/applicatonsSlice";
import { getToken } from "@/utils/authHelpers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ApplicationsProvider = ({ children }) => {
  const { isLoading, isSuccess, error, data, refetch } =
    useGetAllApplicationsQuery();
  const applications = data?.data.applications;
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    const fetchingStates = {
      isLoading,
      isSuccess,
      error,
      //   refetch,
    };
    dispatch(setApplications(applications));
    dispatch(setFetchingStates(fetchingStates));
  }, [applications, isLoading, isSuccess, error]);

  useEffect(() => {
    refetch();
  }, [token]);

  return <>{children}</>;
};

export default ApplicationsProvider;
