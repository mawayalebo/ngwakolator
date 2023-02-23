import Head from 'next/head'
import { useEffect, useState } from 'react';
import Header from "../comps/Header";
import Job from '../comps/Job';
import Jobs from '../comps/Jobs';
import Landing from '../comps/Landing';
import SideNav from '../comps/sideNav';
export default function Home() {
  
  
  return (
    
    <div className="relative flex flex-col bg-[whitesmoke] h-screen font-arial">
      <Head>
        <title>NTE Calculator</title>
      </Head>
      <div>
        <Header/>
          <Job/>
          <Jobs/>
      </div>  
    </div>
  )
}
