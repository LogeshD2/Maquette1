import React from "react";
import Icon1 from "../../assets/image/Icon1.png"
import Icon2 from "../../assets/image/Icon2.png"
import Icon3 from "../../assets/image/Icon3.png"
import Frame35 from "../../assets/image/Frame35.png"
import Button from "../../components/UI/Button/Button";
import Logo1 from "../../assets/image/Logo1.png";
import Logo2 from "../../assets/image/Logo2.png";
import Logo3 from "../../assets/image/Logo3.png";
import Logo4 from "../../assets/image/Logo4.png";
import Logo5 from "../../assets/image/Logo5.png";
import Logo6 from "../../assets/image/Logo6.png";
import Logo7 from "../../assets/image/Logo7.png";


export default function Ourclients() {
    return (
        <>
            <div className="mt-10 text-center">
                <h1 className="text-headline-2 text-neutral-d_grey font-medium">Our Clients</h1>
                <p className="font-regular text-body-2 mt-4 text-neutral-grey">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="mt-8 flex justify-around">
                <img src={Logo1} alt="Logo 1" />
                <img src={Logo2} alt="Logo 2" />
                <img src={Logo3} alt="Logo 3" />
                <img src={Logo4} alt="Logo 4" />
                <img src={Logo5} alt="Logo 5" />
                <img src={Logo6} alt="Logo 6" />
                <img src={Logo7} alt="Logo 7" />
            </div>

            <div className="text-center mt-[50px]">
                <h1 className="text-headline-2 text-neutral-d_grey font-medium">Manage your entire community in a single system</h1>
                <p className="font-regular text-body-2 text-neutral-grey mt-1">Who is Nextcent suitable for?</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 space-y-4 lg:flex-row lg:justify-around">
                <div className="p-6 text-center lg:w-1/6">
                    <img src={Icon1} alt="Icon1" className="mx-auto"></img>
                    <h2 className="text-headline-3 text-neutral-d_grey font-medium mb-1">Membership Organisations</h2>
                    <p className="font-regular text-body-3 text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="p-6 text-center lg:w-1/6">
                    <img src={Icon2} alt="Icon2" className="mx-auto"></img>
                    <h2 className="text-headline-3 text-neutral-d_grey font-medium mb-1">National Associations</h2>
                    <p className="font-regular text-body-3 text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>                  
                </div>

                <div className="p-6 text-center lg:w-1/6">
                    <img src={Icon3} alt="Icon3" className="mx-auto mb-4"></img>
                    <h2 className="text-2xl text-neutral-d_grey font-medium mb-1 leading-tight max-w-lg">Clubs And Groups</h2>
                    <p className="font-regular text-body-3 text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center justify-center p-8 bg-white lg:flex-row lg:space-x-16">
                <div className="flex justify-center lg:w-1/4">
                    <img src={Frame35} alt="Icon3"></img>
                </div>

                <div className="flex-1 max-w-lg">
                    <h1 className="text-neutral-d_grey text-headline-2 text-center mb-4 font-medium lg:text-left">
                        The unseen of spending three years at Pixelgrade
                    </h1>
                    <p className="text-neutral-grey font-regular text-body-3 text-center mb-6 lg:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                        Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
                        Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                        Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button label="Learn more" size="large"/>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}
