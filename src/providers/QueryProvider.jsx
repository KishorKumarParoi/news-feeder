import { useState } from "react";
import { QueryContext } from "../contexts";

export default function QueryProvider({ children }) {
    const [query, setQuery] = useState({
        // const response = await fetch(`http://localhost:8000/v2/${typeOfNews}?${queryType}=${queryAbout}`);
        typeOfNews: "top-headlines",
        queryType: "category",
        queryAbout: "general",
    });

    return (
        <QueryContext.Provider value={{ query, setQuery }}>
            {children}
        </QueryContext.Provider>
    )
}