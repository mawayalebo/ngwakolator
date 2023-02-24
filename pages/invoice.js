import InvoiceBody from '../comps/InvoiceBody';
import InvoiceFooter from '../comps/InvoiceFooter';
import InvoiceHead from '../comps/InvoiceHead';
import InvoiceStamp from '../comps/InvoiceStamp';

const Invoice = ()=>{
    return ( 
        <div className="max-w-xl mx-auto">
            <InvoiceHead/>
            <InvoiceBody/>
            <InvoiceStamp/>
            <InvoiceFooter/>
        </div>
     );
}
 
export default Invoice;