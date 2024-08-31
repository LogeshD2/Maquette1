import React from "react";
import TeslaImg from "../../assets/image/Tesla.png";
import Logos from "../../assets/image/Logos.png"

export default function Tesla() {
    return (
        <div className="flex justify-center mt-[50px]">
            <div className="flex flex-1 items-center justify-center max-w-6xl w-full px-4">
                <div className="flex-shrink-0 ml-8 w-auto h-auto">
                    <img src={TeslaImg} alt="Icon3"></img>
                </div>

                <div className="flex-1 ml-8">
                    <p className="text-neutral-grey font-regular text-body-2 mb-6">
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc 
                        varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse 
                        platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi 
                        ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
                        Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id 
                        gravida. 
                    </p>
                    <p className="text-primary text-headline-4 mb-4 font-medium">
                        Tim Smith
                    </p>
                    <p className="font-regular text-neutral-l_grey text-body-2 mb-4">
                        British Dragon Boat Racing Association
                    </p>
                    
                    <div className="flex items-center">
                        <img src={Logos} alt="Logos" className="mr-4" />
                        <p class="text-primary text-headline-4 font-regular cursor-pointer whitespace-nowrap">
                            Meet all customers &rarr;
                        </p>

                    </div>


                </div>
            </div>
        </div>
    )
}