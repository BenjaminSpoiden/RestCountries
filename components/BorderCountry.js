import React from "react"
import Link from "next/link"

export const BorderCountry = ({ country }) => {
    
    return (
        <>  
            <div className="flex flex-row px-1 py-2 dark:bg-darkGray bg-white shadow justify-center w-32 ">
                <div>
                    <p className="font-nunito dark:text-gray-400 text-xs">{country}</p>
                </div>
            </div>
        </>
    )
}