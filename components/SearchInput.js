import React from "react"
import { FaSearch } from "react-icons/fa"

export const SearchInput = ({ searchCountry }) => {

    return (
        <div>
            <div className="container flex justify-center items-center">
                <div className="relative">
                    <div className="absolute top-4 left-3"> 
                        <FaSearch className="flex mt-1 text-gray-400 dark:text-gray-300 z-20 hover:text-gray-500" />
                    </div> 
                    <input onChange={(e) => searchCountry(e.target.value)} type="text" className="h-14 w-full dark:text-gray-300 pl-10 pr-4 mb-8 md:mb-0 dark:placeholder-gray-300 dark:bg-gray-700 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search a country"/>
                   
                </div>
            </div>
        </div>
    )
}