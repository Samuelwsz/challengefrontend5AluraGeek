import { createContext, useContext, useState } from "react"

interface SearchContextData {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<SearchContextData | undefined>(undefined)

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error("error")
  }
  return context
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
}
