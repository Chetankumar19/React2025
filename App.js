import React from "react";
import ReactDOM from 'react-dom/client';

const Title = () => (
    <div id="container">
        <h1 className="heading">Badmasi nhi mitra</h1>
    </div>
     
) ;

const num =100;
const num1 =10;
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Hello mitra</h1>
        <h2>{num + num1}</h2>
        <h3>{Title()}</h3>
    </div>
     
) ;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/> );