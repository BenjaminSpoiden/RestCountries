import React from "react"


export const Country = ({name, flag, population, region, capital}) => {
    return (
        <>
            <div className="container rounded-md overflow-hidden max-h-100 h-full max-w-sm bg-white dark:bg-gray-700 shadow-md">
                <div className="flex aspect-w-10 aspect-h-6">
                    <img className=" object-cover w-100 max-h-52" src={flag} alt="flag"/>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl dark:text-gray-300 font-bold font-nunito "> {name} </h3>
                    <div className="mt-2 text-gray-800 dark:text-gray-300 font-nunito">
                        <h4 className="font-bold pb-1">Population: <span className="font-normal" >{population.toLocaleString()}</span> </h4>
                        <h4 className="font-bold pb-1">Region: <span className="font-normal" >{region}</span> </h4>
                        <h4 className="font-bold pb-1" >Capital: <span className="font-normal" >{capital}</span> </h4>
                    </div>
                </div>
            </div>
        </>
    )
}