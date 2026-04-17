import React, { useState } from "react";

function Header() {
    const [tan, setTan] = useState(false);

    const handle = () => {
        setTan(!tan);
    };

    return (
        <div className="bg-red-300 h-10 px-5 flex items-center justify-between">
            <div className="text-white font-bold">LOGO</div>
            <div className="border-t-neutral-50"><input placeholder="haynhap"></input></div>
            <div className="hidden sm:flex gap-4">
                <div className="text-white p-2"><a href="">Home</a></div>
                <div className="text-white p-2"> <a href="">About</a> </div>
                <div className="text-white p-2"><a href="">Product</a></div>
                <div className="text-white p-2"><a href="">Element</a></div>
            </div>

            <button onClick={handle} className="sm:hidden text-white text-xl">
                ☰
            </button>
            <div className={`${tan ? "flex" : "hidden"} flex-col absolute top-10 left-0 w-full bg-red-400 sm:hidden`}>
                <div className="text-white p-2"><a href="">Home</a></div>
                <div className="text-white p-2"> <a href="">About</a> </div>
                <div className="text-white p-2"><a href="">Product</a></div>
                <div className="text-white p-2"><a href="">Element</a></div>
            </div>
        </div>
    );
}

export default Header;