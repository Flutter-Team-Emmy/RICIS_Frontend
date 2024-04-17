"use client";

import { useGetCurrentUserQuery } from "@/store/api/userApi";
import { setRole, setUser } from "@/store/features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UserProvider = ({ children }) => {
  const { isLoading, isSuccess, isError, error, data, refetch } =
    useGetCurrentUserQuery();
  const role = data?.data.role;
  const currentUser = data?.data.user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(currentUser));
    dispatch(setRole(role));
  }, [currentUser, role]);

  return <>{children}</>;
};

export default UserProvider;
