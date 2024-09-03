import React from "react";
import Icon4 from "../../assets/image/Icon4.png";
import Icon5 from "../../assets/image/Icon5.png";
import Icon6 from "../../assets/image/Icon6.png";
import Icon7 from "../../assets/image/Icon7.png";

export default function Helping() {
    return (
        <div className="flex justify-center bg-neutral-silver">
            <div className="flex flex-col px-4 max-w-6xl w-full lg:flex-row">
                
                <div className="flex flex-col justify-center lg:w-1/2">
                    <h1 className="text-neutral-d_grey text-headline-2 mb-4 font-medium text-center lg:text-left">
                        Helping a local <p className="text-primary">business reinvent itself</p>
                    </h1>
                    <p className="text-[#18191F] font-regular text-body-2 mb-6 text-center lg:text-left">
                        We reached here with our hard work and dedication
                    </p>
                </div>
                
                <div className="flex flex-shrink-0 lg:w-1/2">
                    <div className="flex flex-wrap lg:p-8">                            
                        <div className="w-1/2 mb-4 flex items-center">
                            <img src={Icon4} alt="Icon4" className="mr-4"/>
                            <div>
                                <div className="text-2xl font-semibold text-gray-800">2,245,341</div>
                                <div className="text-gray-500">Members</div>
                            </div>
                        </div>

                        <div className="w-1/2 mb-4 flex items-center">
                            <img src={Icon5} alt="Icon5" className="mr-4"/>
                            <div>
                                <div className="text-2xl font-semibold text-gray-800">46,328</div>
                                <div className="text-gray-500">Clubs</div>
                            </div> 
                        </div>

                        <div className="w-1/2 mb-4 flex items-center">
                            <img src={Icon6} alt="Icon6" className="mr-4"/>
                            <div>
                                <div className="text-2xl font-semibold text-gray-800">828,867</div>
                                <div className="text-gray-500">Event Bookings</div>
                            </div>
                        </div>

                        <div className="w-1/2 mb-4 flex items-center">
                            <img src={Icon7} alt="Icon7" className="mr-4"/>
                            <div>
                                <div className="text-2xl font-semibold text-gray-800">1,926,436</div>
                                <div className="text-gray-500">Payments</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
