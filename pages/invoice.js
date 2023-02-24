import InvoiceBody from '../comps/InvoiceBody';
import InvoiceFooter from '../comps/InvoiceFooter';
import InvoiceHead from '../comps/InvoiceHead';

const Invoice = ()=>{
    return ( 
        <div className="max-w-xl mx-auto">
            <InvoiceHead/>
            <InvoiceBody/>
            <InvoiceFooter/>
        </div>
     );
}
 
export default Invoice;