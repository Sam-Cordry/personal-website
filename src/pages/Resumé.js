import React from "react";
import Cordry_Resume from "../Cordry_Resume.pdf"

export default function Resumé() {
    return (
        <div className="resumé">
            <h1>Resumé</h1>
            <iframe src={Cordry_Resume} title="Cordry_Resumé" width="75%" height="800px"></iframe>
        </div>
    )
}