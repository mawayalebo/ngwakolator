import Header from '../comps/Header';
const Price = () => {
    const services = [
        {jobtype: "Photocopy - Black & White", price: 2},
        {jobtype: "Photocopy - Color", price: 5},
        {jobtype: "Print-Out - Black & White", price: 3},
        {jobtype: "Print-Out - Colour", price: 7},
        {jobtype: "Scanning", price: 4},
        {jobtype: "Sending Email", price: 8},
        {jobtype: "Receiving Email", price: 8},
        {jobtype: "Typing Per Page", price: 30},
        {jobtype: "Editing Per Page", price: 20},
        {jobtype: "Lamination A4", price: 20},
        {jobtype: "Lamination A3", price: 20},
        {jobtype: "Pocket File", price: 5},
        {jobtype: "Pen", price: 6},
        {jobtype: "Envelope A4", price: 10},
        {jobtype: "Envelope Small", price: 6},
        {jobtype: "Internet Session", price: 20},

    ];
    return ( 
        <div>
            <Header/>
            <div className=" mt-[33vh]">
                {
                    services.map((service, index) => {
                        return (
                            <div className="flex justify-center items-center p-4 flex-col bg-gray-300 m-5 rounded-full" key={index}>
                                <h1 className="text-black text-lg :sm:text-xl md:text-2xl lg:text-3xl">{service.jobtype} | R{service.price}</h1>
                            </div>
                        )
                        })
                
                }
            </div>
        </div> 
    );
}
 
export default Price;