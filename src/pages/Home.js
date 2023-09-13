import React from "react";
// import {  a } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="cat">
        {/* <a href="#" className="women">
          <div></div>
        </a> */}
        <a className="women grid " to="/">
          <div className="col-span-full row-span-full"></div>
          <div className=" info bg-blue-950 col-span-full row-span-full flex-col flex justify-center items-center space-y-4 opacity-0 hover:opacity-80">
            <h2 className="text-white text-center ">Women Clothes</h2>
          </div>
        </a>
        ;
        <a className="men grid " to="/men">
          <div className="col-span-full row-span-full"></div>
          <div className=" info bg-blue-950 col-span-full row-span-full flex-col flex justify-center items-center space-y-4 opacity-0 hover:opacity-80">
            <h2 className="text-white text-center ">Men Clothes</h2>
          </div>
        </a>
        <a className="elec grid " to="/elec">
          <div className="col-span-full row-span-full"></div>
          <div className=" info bg-blue-950 col-span-full row-span-full flex-col flex justify-center items-center space-y-4 opacity-0 hover:opacity-80">
            <h2 className="text-white text-center ">Elictronics</h2>
          </div>
        </a>
        <a className="acc grid " to="/acc">
          <div className="col-span-full row-span-full"></div>
          <div className=" info bg-blue-950 col-span-full row-span-full flex-col flex justify-center items-center space-y-4 opacity-0 hover:opacity-80">
            <h2 className="text-white text-center ">Accessories</h2>
          </div>
        </a>
      </div>
    </div>
  );
}
