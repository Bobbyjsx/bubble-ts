import React from "react";
import { Link } from "react-router-dom";

export const Header=()=>{
    return(
        <div className=" bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between border-b-2 w-full border-slate-800 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to="/" className="font-bold text-slate-600 cursor-pointer hover:text-slate-400 text-3xl">Bubble</Link>
                <img className="h-8 w-auto sm:h-10" src="" alt=""/>
            </div>
            <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                <Link  to="/edit-Profile" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-slate-400">
                    Edit Account</Link>
                <Link to="/sign-Up" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Sign up</Link>
            </div>
            </div>
        </div>

        
        </div>

    );
}