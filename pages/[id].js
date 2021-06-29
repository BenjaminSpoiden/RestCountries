import Head from "next/head"
import React, { useEffect, useState } from "react"
import { BorderCountry } from "../components/BorderCountry"
import { Navbar } from "../components/Navbar"
import { countryAxios } from "../utils/axiosConfig"
import { useRouter } from "next/router"
import { Footer } from "../components/Footer"

function CountryDetail({ data }) {

    const router = useRouter()
    if(router.isFallback) {
        return (
            <div></div>
        )
    }

    const country = data[0]

    
    return (
        <>
            <Head>
                <title>{country.name}</title>
            </Head>
            <body className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100 bg-gray-100 dark:bg-gray-800 max-w-full min-h-full "  >
                <Navbar isLarge />
               
                <main className="flex flex-col md:min-h-screen min-h-screen-xl h-full max-w-8xl md:mx-auto">
                    <div className="flex mx-4 min-h-screen flex-col">
                        <button 
                            className="flex justify-center shadow-lg mt-28 w-32 px-4 py-2 rounded bg-white dark:bg-darkGray" 
                            onClick={() => router.back()}
                            >
                                <h5 className="dark:text-gray-300 font-nunito font-bold ">&#8592; Go Back</h5>
                        </button>
                        <div className="flex flex-col md:grid md:grid-cols-2 md:mt-20 justify-start items-start max-w-8xl mx-auto w-full">
                            
                            <div className="flex md:justify-center my-auto max-w-xl mt-10">
                                <div>
                                    <img src={country.flag} className=" object-cover shadow-xl" />
                                </div>
                            </div>
                            <div className="flex justify-center max-w-full w-full">
                                <div className="flex w-full mt-10 ">
                                    <div className="flex flex-col w-full max-h-72 md:ml-4" >
                                        <h4 className=" flex text-4xl dark:text-gray-300 text-gray-800 font-nunito font-bold" >{country.name}</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 justify-center " >
                                            <div className="flex flex-col  dark:text-gray-300 mt-8">
                                                <h4 className="font-bold pb-2">
                                                    Native Name: <span className="font-normal" >{country.nativeName}</span> 
                                                </h4>
                                                <h4 className="font-bold pb-2">
                                                    Population: <span className="font-normal" >{country.population.toLocaleString()}</span> 
                                                </h4>
                                                <h4 className="font-bold pb-2">
                                                    Region: <span className="font-normal" >{country.region}</span> 
                                                </h4>
                                                <h4 className="font-bold pb-2">
                                                    Sub Region: <span className="font-normal" >{country.subregion}</span> 
                                                </h4>
                                                <h4 className="font-bold pb-2" >
                                                    Capital: <span className="font-normal" >{country.capital}</span> 
                                                </h4>
                                            </div>
                                            <div className="flex flex-col dark:text-gray-300 h-full mt-8">
                                                <h4 className="font-bold pb-2">
                                                    Top Level Domain: <span className="font-normal" >{country.topLevelDomain[0]}</span> 
                                                </h4>
                                                <h4 className="font-bold pb-2">
                                                    Currencies: {country.currencies.map((curr, index) => {
                                                        return <span key={curr.name} className="font-normal">
                                                            {curr.name}{country.currencies.length - 1 > index ? ',' : ''}{' '}
                                                        </span>
                                                    })}
                                                </h4>
                                                <h4 className="font-bold pb-2">
                                                    Languages: {country.languages.map((lang, index) => {
                                                        return <span key={lang.name} className="font-normal">
                                                            {lang.name}{country.languages.length - 1 > index ? ',' : ''}{' '}
                                                        </span>}
                                                    )}  
                                                </h4>
                                            </div>
                                        </div>
                                        <div className=" flex mt-8">
                                            <div className="flex flex-wrap dark:text-gray-300 flex-col md:flex-col md:items-center ">
                                                <h4 className="font-bold" >Borders Countries:</h4>
                                                <div className="flex flex-row flex-wrap" >{country.borders.map((border, index) => {
                                                        return <div className={`mr-2 mt-2 `} >
                                                            <BorderCountry key={border} country={border}/> 
                                                        </div>
                                                    }
                                                )}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </body>
        </>
    )
}

export async function getStaticPaths() {

    const response = await countryAxios.get(`/all`)
    const data = response.data

    const paths = data.map((country) => {
        const id = country.name.normalize('NFC')
        return ({
            params: {
                id
            }
        })
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
   
    const { id } = params
    const response = await countryAxios.get(`/name/${encodeURIComponent(id)}`)
    const data = response.data

    
    if(!data) {
        return {
            notFound: true
        }
    }
    

    return {
        props: {
            data
        },
        revalidate: 1
    }
}

export default CountryDetail