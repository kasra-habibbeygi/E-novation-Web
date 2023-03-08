import { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthContext from "../store/AuthContext";
import { Global } from "@/constants/Global";

function FirstPage(props) {
  const router = useRouter();
  const { setAuthRef } = useContext(AuthContext);
  console.log("first page", Global);
  if (Global?.user !== undefined) {
    console.log("global evaluted in indexjs");
  }
  function RedirectPage() {
    if (typeof window !== "undefined") {
      // const cash = localStorage.getItem("user");
      const cash = null;
      if (cash !== null) {
        setAuthRef(cash);
        Global.user = JSON.parse(cash);
        router.push("./home");
      } else {
        router.push("/login");
      }
    }
  }
  useEffect(() => {
    RedirectPage();
  }, []);
  return (
    <Fragment>
      <Head>
        <title>E-novation</title>
        <meta name="description" content="me and saba" />
      </Head>
      <div>redirecting ...</div>
    </Fragment>
  );
}

export default FirstPage;
