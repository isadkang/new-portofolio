import React, { useState, useEffect } from "react";
import { MdSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

const DmButton = () => {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })

    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <button
            type='button'
            onClick={handleTheme}
            className={` ${theme === 'dark' ? 'bg-gray-600' : 'bg-yellow-300'
                } p-1 rounded-full flex items-center`}
        >
            <span
                className={`w-6 h-6 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-yellow-500'
                    } flex items-center justify-center`}
            >
                {theme === 'dark' ? (
                    <FaMoon />
                ) : (
                    <MdSunny />
                )}
            </span>
        </button>
    )
}

export default DmButton;