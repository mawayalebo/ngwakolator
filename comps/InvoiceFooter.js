const InvoiceFooter = () => {
    return ( 
        <div className="fixed bottom-0 bg-gray-400 p-10 grid grid-cols-1 md:grid-cols-2 items-center max-w-xl">
            <div>
                <span className="font-bold">Prepared by</span>:
                <input type="text" name="" id="" />
            </div>
            <div className="flex flex-col">
                <div>
                    <span className="font-bold">Mobile numbers: </span>
                    <span>081 475 7428</span>
                </div>
                <div>
                    <span className="font-bold">Email: </span>
                    <span>ngwakotech@gmail.com</span>
                </div>
            </div>
        </div>
     );
}
 
export default InvoiceFooter;