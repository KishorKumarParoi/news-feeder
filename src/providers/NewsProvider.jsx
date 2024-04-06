import { NewsContext } from "../contexts";
import { useNewsQuery } from "../hooks";

export default function NewsProvider({ children }) {
    const { newsData, loading, error } = useNewsQuery();

    return (
        <NewsContext.Provider value={{ newsData, loading, error }}>
            {children}
        </NewsContext.Provider>
    )
}
