"use client";

import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserrDetailContext";

export type UserDetail = {
  name: string;
  email: string;
  credit: number;
};

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  const context = useContext(UserDetailContext);
  const { userDetail, setUserDetail } = context || {};

  const createNewUser = async () => {
    try {
      const result = await axios.post("/api/users");
      console.log("User synced:", result.data);
      setUserDetail?.(result.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    if (user?.primaryEmailAddress) {
      createNewUser();
    }
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;
/*
"use client";

import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserrDetailContext";

export type UserDetail={
    name:string,
    email:string,
    credits:number
}

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userDetail,setUserDetail]=useContext<any>();

  const createNewUser = async () => {
    try {
      const result = await axios.post("/api/users");
      console.log("User synced:", result.data);
      setUserDetail(result.data)
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  return <>
  <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
          {children}
  </UserDetailContext.Provider>
  </>;
}

export default Provider;




*/