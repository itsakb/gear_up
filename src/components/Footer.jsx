/*eslint-disable*/
import React from 'react';

export default function Footer() {
    var d = new Date();
    var n = d.getFullYear();

    return (
        <div className="Footer">
            <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img className="logo" src="https://i.redd.it/c18noamoqwj71.gif" alt="logo"/>
                <span className="ml-3 text-xl">GitHelper</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {n} Abhilash Kumar Behera
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/abhilash-kumar-behera-331b58200/" target="_blank">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
                </span>
            </div>
            </footer>       
        </div>
    )
}
