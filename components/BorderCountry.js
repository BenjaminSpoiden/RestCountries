import React from "react"
import Link from "next/link"

export const BorderCountry = ({ country }) => {
    
    return (
        <>
            <Link href={`/${encodeURIComponent(country.toLowerCase())}`} >
                <a>
                    <div className="flex flex-row px-1 py-2 dark:bg-darkGray cursor-pointer bg-white shadow justify-center w-32 ">
                        <div>
                            <p className="font-nunito dark:text-gray-400 text-xs">{country}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}