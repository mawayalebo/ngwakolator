import { useRouter } from 'next/router';
import { useState } from 'react';
import { nanoid as nano } from 'nanoid';

function InvoiceHead() {
    const [invoiceNo, setInvoiceNo] = useState(nano());
    const [invTime, setInvTime] = useState(new Date());
    const router = useRouter();
    return ( 
        <div>
            <div className="flex bg-slate-100 p-5">
                <div className="flex-[1] ">
                    <img src="/ngwako technical enterprises logo.png" width={250} height={90} className="cursor-pointer" onClick={()=>router.push("/")}/>
                </div>
                <div className="flex items-center "> 
                    <h2 className="text-4xl text-black font-black uppercase">Invoice</h2>
                </div>
            </div>
            {/* invoice neck*/}
            <div className="bg-gray-200 p-2 flex">
                <div className="grid grid-cols-6 gap-8">
                    <div className='col-span-3'>
                        <h3 className="text-xs font-bold">Invoice to</h3>
                        <input className='w-full' type="text" name="customername" id="customername" />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <span className='text-xs font-bold whitespace-nowrap'>Invoice Number</span>
                            <span className='text-xs whitespace-nowrap'>{invoiceNo}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs font-bold whitespace-nowrap' >Date</span>
                            <span className='text-xs whitespace-nowrap' >{ invTime.getUTCDate() } - { invTime.getUTCMonth()+1} - {invTime.getFullYear()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default InvoiceHead;