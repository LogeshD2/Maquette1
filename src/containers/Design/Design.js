import React from "react";
import Pana from "../../assets/image/Pana.png";
import Button from "../../components/UI/Button/Button";

export default function Design() {
    return (
        <div className="flex justify-center mt-[50px]">
                <div className="flex flex-1 items-center justify-center max-w-6xl w-full px-4">
                    <div className="flex-shrink-0 ml-8">
                        <img src={Pana} alt="Icon3"></img>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-neutral-d_grey text-headline-2 mb-4 font-medium">
                            How to design your site footer like we did
                        </h1>
                        <p className="text-neutral-grey font-regular text-body-3 mb-6">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc 
                            varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse 
                            platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi 
                            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
                            Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id 
                            gravida.
                        </p>
                        <Button label="Learn more"/>
                    </div>
                </div>
            </div>
    )
}