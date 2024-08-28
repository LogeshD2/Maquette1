import React from "react";
import Icon4 from "../../assets/image/Icon4.png"
import Icon5 from "../../assets/image/Icon5.png"
import Icon6 from "../../assets/image/Icon6.png"
import Icon7 from "../../assets/image/Icon7.png"



export default function Helping() {
    return (
        <div className="flex justify-center bg-neutral-silver mt-[100px]">
            <div className="flex px-4">
                    {/* Section de texte */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-neutral-d_grey text-headline-2 mb-4 font-medium">
                            Helping a local <p className="text-primary">business reinvent itself</p>
                        </h1>
                        <p className="text-[#18191F] font-regular text-body-2 mb-6">
                            We reached here with our hard work and dedication
                        </p>
                    </div>
                    {/* Section d'image */}
                    <div className="flex-shrink-0 ml-8">
                        <div className="flex flex-wrap p-8">                            
                            <div className="w-1/2 mb-4 flex items-center">
                                <img src={Icon4} alt="Icon4" className="mr-4"/>
                                <div>
                                    <div className="text-2xl font-semibold text-gray-800">2,245,341</div>
                                    <div className="text-gray-500">Members</div>
                                </div>
                            </div>

                            {/* Clubs */}
                            <div className="w-1/2 mb-4 flex items-center">
                                <img src={Icon5} alt="Icon5" className="mr-4"/>
                                <div>
                                    <div className="text-2xl font-semibold text-gray-800">46,328</div>
                                    <div className="text-gray-500">Clubs</div>
                                </div> 
                            </div>

                            {/* Event Bookings */}
                            <div className="w-1/2 mb-4 flex items-center">
                                <img src={Icon6} alt="Icon6" className="mr-4"/>
                                <div>
                                    <div className="text-2xl font-semibold text-gray-800">828,867</div>
                                    <div className="text-gray-500">Event Bookings</div>
                                </div>
                                
                            </div>

                            {/* Payments */}
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
    )
}