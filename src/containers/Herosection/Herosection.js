import React from "react";

// Containers
import Button from "../../components/UI/Button/Button";

// Image
import illustration from "../../assets/image/Illustration.png";


export default function Herosection() {
    return (
        <div className="flex flex-col justify-between items-center min-h-screen bg-neutral-silver">
            {/* Conteneur principal avec flex-row pour aligner les éléments horizontalement */}
            <div className="flex flex-1 items-center justify-center max-w-6xl w-full px-4">
                {/* Section de texte */}
                <div className="flex-1">
                    <h1 className="text-neutral-d_grey text-headline-1 mb-4">
                        Lessons and insights <span className="text-primary">from 8 years</span>
                    </h1>
                    <p className="text-neutral-d_grey font-regular text-body-2 mb-6">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <Button label="Register" size="large"/>
                </div>
                {/* Section d'image */}
                <div className="flex-shrink-0 ml-8">
                    <img src={illustration} alt="Description" width="391" height="407"/>
                </div>
            </div>

            {/* Indicateurs de carrousel */}
            <div className="flex justify-center mb-8">
                <div className="h-2 w-2 rounded-full bg-green-500 mx-1"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
            </div>
        </div>
    );
}
