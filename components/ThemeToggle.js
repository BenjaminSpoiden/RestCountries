import React from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import { FiSun, FiMoon } from "react-icons/fi"

export const ThemeToggle = () => {

    const [colorTheme, setTheme] = useDarkMode()

    return (
        <div>
            {colorTheme === "light" ? (
                <svg
                    onClick={() => setTheme("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <FiMoon />
                </svg>
            ) : (
                <svg
                    onClick={() => setTheme("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <FiSun />
                </svg>
            )}
        </div>
    )
}