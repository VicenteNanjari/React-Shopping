import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    // const updateFilters = (e) => {
    //     const type = e.target.type
    //     const name = e.target.name
    //     const value = e.target.value
    //     if (type === 'checkbox') {
    //         setFilters({ ...filters, [name]: e.target.checked })
    //     } else {
    //         setFilters({ ...filters, [name]: value })
    //     }
    // }

    return (
        <FiltersContext.Provider value={{ filters, setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}