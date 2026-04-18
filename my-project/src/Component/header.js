import React, { useState } from "react";

function Header() {
    const [tan, setTan] = useState(false);

    return (
        <div className="  bg-red-300">
            <div className="max-w-7xl mx-auto h-12 px-4 flex items-center justify-between">

                <div className="text-white font-bold">LOGO</div>

                <div className="flex-1 mx-4">
                    <input
                        className="w-full px-3 py-1 rounded"
                        placeholder="haynhap"
                    />
                </div>

                <div className="hidden sm:flex gap-4">
                    <a className="text-white" href="">Home</a>
                    <a className="text-white" href="">About</a>
                    <a className="text-white" href="">Product</a>
                    <a className="text-white" href="">Element</a>
                </div>

                <button
                    onClick={() => setTan(!tan)}
                    className="sm:hidden text-white text-xl"
                >
                    ☰
                </button>
            </div>

            {tan && (
                <div className="sm:hidden w-full bg-red-400 px-4 py-2">
                    <div className="text-white p-2">Home</div>
                    <div className="text-white p-2">About</div>
                    <div className="text-white p-2">Product</div>
                    <div className="text-white p-2">Element</div>
                </div>
            )}
        </div>
    );
}

export default Header;