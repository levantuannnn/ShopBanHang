import React, { useState } from "react";
function Com() {
    const [get, setGet] = useState("chao ban")
    const handle = () => {
        const gio = new Date().getHours();
        if (gio > 5 && gio < 12) {
            setGet("chao buoi sang")
        }
        if (gio > 13 && gio < 18) {
            setGet("Chao buoi trua")
        }
        if (gio > 19 && gio < 24) {
            setGet("chao buoi toi")
        }
    }
    return (
        <>
            <h1>{get ? (<h1>dung roi day</h1>) : (<h2>khong dung voi thuc tai roi </h2>)}</h1>
            <button onClick={handle}>Nhan</button>
        </>
    );
}
export default Com