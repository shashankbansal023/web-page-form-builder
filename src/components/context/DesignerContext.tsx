"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react"
import { FormElementInstance } from "../FormElements"

type DesignerContextType = {
    elements: FormElementInstance[];
    addElements: (index: number , element: FormElementInstance) => void;
    removeElement: (id: string) => void;
    selectedElement: FormElementInstance | null;
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>
    setElements: Dispatch<SetStateAction<FormElementInstance[]>>
    updateElement: (id: string, element: FormElementInstance) => void;
}

export const DesignerContext = createContext<DesignerContextType| null>(null)

export default function DesignerContextProvider({children} :
    {children: React.ReactNode}) {  

        const [elements, setElements] = useState<FormElementInstance[]>([])

        const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null)
        
    const addElements = (index: number, element: FormElementInstance) => {
        setElements((prev) => {
            const newElements = [...prev];
            newElements.splice(index, 0, element);
            return newElements;
        });
    }    
    
    const removeElement = (id: string) => {
        setElements((prev)=> prev?.filter((el) => el.id !== id));
    }

    function updateElement(id: string, element: FormElementInstance){
        setElements((prev) => {
            const index = prev.findIndex((el) => el.id === id);
            const newElements = [...prev];
            newElements[index] = element;
            return newElements;
        });
    }

    return (
        <DesignerContext.Provider value={{elements, addElements,setElements, removeElement , selectedElement, setSelectedElement, updateElement}}>
            {children}
        </DesignerContext.Provider>
    )
}