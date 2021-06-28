import React from "react"
import { ThemeToggle } from "./ThemeToggle"


export const Navbar = ({ isLarge }) => {

    return (
        <>
            <nav className="flex fixed w-screen z-100 bg-white shadow dark:shadow dark:bg-darkGray">
                <div className={`flex ${isLarge ? 'max-w-8xl' : 'max-w-7xl'} w-full justify-between py-6 mx-auto text-gray-600 dark:text-gray-300`}>
                    <div className={`flex mx-4  items-center justify-between ${isLarge ? 'max-w-8xl' : 'max-w-7xl'} w-full`}>
                        <a href="/"className="dark:text-gray-200 mx-0 font-bold antialiased md:antialiased font-nunito">
                            Where in the world ? 
                        </a>
                        
                        <div className="flex items-center justify-end mt-2 " >
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

