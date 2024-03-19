"use client"

import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes'
import React, {useEffect, useState} from 'react'

const ThemeSwitcher = () => {
    const {theme , setTheme} = useTheme();
    const [mounted , setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    } , [])

    if(!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
        <TabsList className='border'>
            <TabsTrigger
                value='light'
                onClick={() => setTheme('light')}
            >
                <SunIcon className="h-[1.2rem] w-[1.2rem]"></SunIcon>
            </TabsTrigger>
            <TabsTrigger
                value='dark'
                onClick={() => setTheme('dark')}
            >
                <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0"></MoonIcon>
            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher