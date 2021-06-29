import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Countries } from '../components/Countries'
import { DropdownMenu } from '../components/DropdownMenu'
import { Navbar } from "../components/Navbar"
import { SearchInput } from '../components/SearchInput'
import { countryAxios } from '../utils/axiosConfig'
import { Footer } from "../components/Footer"


function Home({ data }) {

  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    setCountries(data)
  }, [])

  const filterByRegion = async (region) => {
    if(region === '') return
    if(region === 'all') {
      setCountries(data)
      return
    }
    const response = await countryAxios.get(`/region/${region}`)
    const _data = response.data
    setCountries(_data)
  }

  const searchCountry = (search) => {
    // if(search.length < 3) return
    if(search.length === 0) {
      setCountries(data)
      return
    }

    countryAxios.get(`/name/${search}`)
      .then(response => {
        const _data = response.data
        setCountries(_data)
      })
      .catch(e => console.log(e))
    
  }

  return (
    <>
      <Head>
        <title>Countries</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <body className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-100 bg-gray-100 dark:bg-gray-800 min-h-full max-w-full" >
        
        <Navbar isLarge /> 
        
        <main className="flex flex-col min-h-full mt-24 max-w-8xl justify-center md:mx-auto ">
          <div className="flex mx-4 justify-center">
            <div className="flex flex-col md:flex-row max-w-8xl w-screen items-center justify-between py-8 ">
              <div>
                <SearchInput 
                  searchCountry={searchCountry} 
                  />
              </div>
              <div>
                <DropdownMenu filterByRegion={filterByRegion} />
              </div>
            </div>
          </div>
          <div className="flex max-w-full justify-center">
            <div className="flex mx-4 justify-center max-w-8xl">
              <Countries countries={countries} />
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  )
}

export async function getStaticProps() {
  const response = await countryAxios.get('/all')
  const data = response.data

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data
    }
  }
}

export default Home