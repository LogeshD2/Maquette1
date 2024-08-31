import React from "react";
import ClientLogos from "../../assets/image/ClientsLogo.png";
import Icon1 from "../../assets/image/Icon1.png"
import Icon2 from "../../assets/image/Icon2.png"
import Icon3 from "../../assets/image/Icon3.png"
import Frame35 from "../../assets/image/Frame35.png"
import Button from "../../components/UI/Button/Button";


export default function Ourclients() {
    return (
        <>
            <div className="mt-10 text-center">
                <h1 className="text-headline-2 text-neutral-d_grey font-medium">Our Clients</h1>
                <p className="font-regular text-body-2 mt-4 text-neutral-grey">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="mt-8 flex justify-center">
                <img src={ClientLogos} alt="Client Logos" />
            </div>

            <div className="text-center mt-[50px]">
                <h1 className="text-headline-2 text-neutral-d_grey font-medium">Manage your entire community in a single system</h1>
                <p className="font-regular text-body-2 text-neutral-grey mt-1">Who is Nextcent suitable for?</p>
            </div>

            <div className="flex justify-around space-x-6 mt-10">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-1/6">
                    <img src={Icon1} alt="Icon1" className="mx-auto"></img>
                    <h2 className="text-headline-3 text-neutral-d_grey font-medium mb-1">Membership Organisations</h2>
                    <p className="font-regular text-body-3 text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-1/6">
                    <img src={Icon2} alt="Icon2" className="mx-auto"></img>
                    <h2 className="text-headline-3 text-neutral-d_grey font-medium mb-1">National Associations</h2>
                    <p className="font-regular text-body-3 text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>                  
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center w-1/6">
                    <img src={Icon3} alt="Icon3" className="mx-auto mb-4"></img>
                    <h2 className="text-2xl text-neutral-d_grey font-medium mb-1 leading-tight max-w-lg">Clubs And Groups</h2>
                    <p className="font-regular text-body-3 text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>

            <div className="flex items-center justify-center p-8 bg-white gap-16">
                <div className="w-1/4 flex justify-center">
                    <img src={Frame35} alt="Icon3"></img>
                </div>

                <div className="flex-1 max-w-lg">
                    <h1 className="text-neutral-d_grey text-headline-2 mb-4 font-medium">
                        The unseen of spending three years at Pixelgrade
                    </h1>
                    <p className="text-neutral-grey font-regular text-body-3 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                        Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                        Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                        Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <Button label="Learn more" size="large"/>
                </div>
            </div>
            
        </>
    );
}
