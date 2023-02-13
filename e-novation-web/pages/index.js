import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(()=>{
  //     setLoadedMeetups(dummy_meetups)
  //   },[])

  return (
    <Fragment>
      <Head>
        <title>E-novation</title>
        <meta name="description" content="me and saba" />
      </Head>
      <div>hello</div>
    </Fragment>
  );
}

export default HomePage;
