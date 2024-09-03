import React from "react";
import Image1 from "../../assets/image/Image1.png"
import Image2 from "../../assets/image/Image2.png"
import Image3 from "../../assets/image/Image3.png"


export default function Caring() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 lg:mt-[50px]">
            <h1 className="text-headline-2 text-neutral-d_grey font-medium">Caring is the new marketing</h1>
            <p className="font-regular text-body-2 mt-2 text-neutral-d_grey max-w-xl mx-auto">
                The Nexcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community is increasing their membership income and lots more.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">

                <div className="bg-neutral-silver rounded-lg shadow-lg overflow-hidden">
                    <img src={Image1} alt="Creating Streamlined Safeguarding Processes with OneRen" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-medium mb-2">Creating Streamlined Safeguarding Processes with OneRen</h2>
                        <a href="#" className="text-primary font-medium">Readmore →</a>
                    </div>
                </div>
                
                <div className="bg-neutral-silver rounded-lg shadow-lg overflow-hidden">
                    <img src={Image2} alt="What are your safeguarding responsibilities and how can you manage them?" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-medium mb-2">What are your safeguarding responsibilities and how can you manage them?</h2>
                        <a href="#" className="text-primary font-medium">Readmore →</a>
                    </div>
                </div>
                
                <div className="bg-neutral-silver rounded-lg shadow-lg overflow-hidden">
                    <img src={Image3} alt="Revamping the Membership Model with Triathlon Australia" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-medium mb-2">Revamping the Membership Model with Triathlon Australia</h2>
                        <a href="#" className="text-primary font-medium">Readmore →</a>
                    </div>
                </div>
            </div>
        </div>
    )
}