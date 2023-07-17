"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
    return (
        <div 
            className="
                flex
                flex-col
                items-center 
                justify-center 
                h-[70vh]
                ">

            <PuffLoader color="red" size={100} />
        </div>
    );
};

export default Loader;