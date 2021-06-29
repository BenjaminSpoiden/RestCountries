import React from "react"

export const Footer = () => {
    return (
        <footer className="mt-6 border-t-2 border-gray-300 dark:border-gray-700 border-solid ">
          <div className="flex px-4 mx-auto max-w-8xl h-24">
            <p className="mx-auto my-auto font-mono text-xs text-gray-700 dark:text-gray-300 items-center">
              Made by {' '}<a href="https://benjaminspoiden.netlify.app/" isExternal className="text-blue-700 dark:text-blue-300" >Benjamin Spoiden</a>
            </p>
          </div>
        </footer>
    )
}