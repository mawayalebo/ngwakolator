import Head from 'next/head'
import Header from "../comps/Header";
import Job from '../comps/Job';
import Jobs from '../comps/Jobs';
export default function Home() {
  return (
    <div className="flex flex-col bg-[whitesmoke] h-screen p-5">
      <Head>
        <title>NTE Calculator</title>
      </Head>
      <Header/>
      <Job/>
      <Jobs/>
    </div>
  )
}
