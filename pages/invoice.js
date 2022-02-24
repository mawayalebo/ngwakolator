import { useState } from 'react';
import { nanoid as nano } from 'nanoid';
import InvoiceBody from '../comps/InvoiceBody';
import InvoiceFooter from '../comps/InvoiceFooter';
import { useRouter } from 'next/router';

const Invoice = () => {
    const [invoiceNo, setInvoiceNo] = useState(nano());
    const date = new Date
    const [invTime, setInvTime] = useState(new Date());
    const router = useRouter();
    return ( 
        <div className="max-w-lg mx-auto">
            {/* invoice header */}
            <div className="flex bg-black p-5">
                <div className="flex-[1] ">
                    <img src="/logo.png" className="w-16 h-16 cursor-pointer" onClick={()=>router.push("/")}/>
                </div>
                <div className="flex items-center "> 
                    <h2 className="text-4xl text-white font-black uppercase">Invoice</h2>
                </div>
            </div>
            {/* invoice neck*/}
            <div className="bg-gray-200 p-2 flex">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xs font-bold">Invoice to</h3>
                        <input type="text" name="customername" id="customername" />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <span className='text-xs font-bold'>Invoice Number</span>
                            <span className='text-xs'>{invoiceNo}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs font-bold' >Date</span>
                            <span className='text-xs' >{ invTime.getUTCDate() } - { invTime.getUTCMonth()+1} - {invTime.getFullYear()}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* invoice body */}
            <InvoiceBody/>
            <InvoiceFooter/>
        </div>
     );
}
 
export default Invoice;