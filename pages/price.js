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
        {jobtype: "Typing Per Page", price: 15},
        {jobtype: "Editing Per Page", price: 15},
        {jobtype: "Lamination A4", price: 15},
        {jobtype: "Lamination A3", price: 15},
        {jobtype: "Pocket File", price: 4},
        {jobtype: "Pen", price: 6},
        {jobtype: "Envelope A4", price: 10},
        {jobtype: "Envelope Small", price: 6},

    ];
    return ( 
        <div className="h-screen bg-blue-700">
            <Header/>
            <div className="fixed overflow-x-scroll">
                {
                    services.map((service, index) => {
                        return (
                            <div className="flex justify-between items-center p-4" key={index}>
                                <div className="flex flex-col">
                                    <div className="text-2xl">{service.jobtype}</div>
                                    <div className="text-xl">{service.price}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl">{service.jobtype}</div>
                                    <div className="text-xl">{service.price}</div>
                                </div>
                            </div>
                        )
                        })
                
                }
            </div>
        </div> 
    );
}
 
export default Price;