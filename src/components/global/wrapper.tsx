"use client";

import { cn } from '@/lib/utils'
import React from 'react'

interface props{
  children : React.ReactNode;
  className?: string;
}

const Wrapper = ({children,className}:props) => {
  return (
    <div className={cn(className,"h-full w-full mx-auto max-w-screen-xl px-4 md:px-0")}>
      {children}
    </div>
  )
}

export default Wrapper