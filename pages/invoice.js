import InvoiceBody from '../comps/InvoiceBody';
import InvoiceFooter from '../comps/InvoiceFooter';
import InvoiceHead from '../comps/InvoiceHead';
import InvoiceStamp from '../comps/InvoiceStamp';
import Landing from '../comps/Landing';
import { selectJobs } from '../app/slices/job.slice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Invoice = ()=>{
    const router = useRouter();
    const jobs = useSelector(selectJobs);

    
    return (
        <>
        {
            jobs.length < 1 && router.push("/") && <Landing/>
        }
        {
        jobs.length > 0 &&
        <div className="max-w-xl mx-auto">
            <InvoiceHead/>
            <InvoiceBody/>
            <InvoiceStamp/>
            <InvoiceFooter/>
        </div>
        }
        </>
     );
}
 
export default Invoice;