/*eslint-disable*/
import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="Header">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="logo" src="https://i.redd.it/c18noamoqwj71.gif" alt="logo"/>
                    <span className="ml-3 text-xl">GitHelper</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900" href="https://docs.github.com/en/rest" target="_blank">Learn more</a>
                </nav>
            </div>
            </header>                       
        </div>
    )
}
