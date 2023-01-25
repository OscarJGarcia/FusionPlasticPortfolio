import { useState } from "react"

export const useModal = (initialMode: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialMode);
    const toggle = () => setIsOpen(!isOpen);
    return { isOpen, toggle };
}