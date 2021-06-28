import React from "react"
import { Country } from "./Country"
import Link from "next/link"

export const Countries = ({ countries }) => {

    
    return (
        <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4" >
            {countries.map(country => 
                <Link href={`/${encodeURIComponent(country.name)}`} >
                    <a>
                        <Country 
                            key={country.name}
                            name={country.name} 
                            flag={country.flag} 
                            population={country.population} 
                            capital={country.capital} 
                            region={country.region}
                            /> 
                    </a>
                </Link>
            )}
        </div>
    )
}