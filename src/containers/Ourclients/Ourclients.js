import React from "react";
import ClientLogos from "../../assets/image/ClientsLogo.png";

export default function Ourclients() {
    return (
        <>
            <div className="mt-10 text-center">
                <h1 className="text-headline-2 text-neutral-d_grey">Our Clients</h1>
                <p className="font-regular text-body-2 mt-4 text-neutral-grey">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="mt-8 flex justify-center">
                <img src={ClientLogos} alt="Client Logos" />
            </div>
            <div className="text-center ">
                <h1 className="text-headline-2 text-neutral-d_grey">Manage your entire community in a single system</h1>
            </div>

            <div>
                <div>
                    <h2>Membership Organisations</h2>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div>
                    <h2>National Associations</h2>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div>
                    <h2>Clubs And Groups</h2>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </>
    );
}
