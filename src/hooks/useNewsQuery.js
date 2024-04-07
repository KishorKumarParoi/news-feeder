import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../contexts";

const useNewsQuery = () => {
    const [newsData, setNewsData] = useState(null);

    // loading state
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });

    // error
    const [error, setError] = useState(null);

    // fetch news data
    const featchNewsData = async (typeOfNews, queryType, queryAbout) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Loading news data...",
            });

            // todo : fetch news data from API
            // http://localhost:8000/v2/top-headlines?category=health
            // http://localhost:8000/v2/search?q=health

            const response = await fetch(`http://localhost:8000/v2/${typeOfNews}?${queryType}=${queryAbout}`);

            if (!response.ok) {
                const errorMessage = `Fetching Weather Data Failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updateNewsData = {
                ...newsData,
                ...data,
            };

            setNewsData(updateNewsData);

        } catch (error) {
            setError(error);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    const { query } = useContext(QueryContext);
    const { typeOfNews, queryType, queryAbout } = query;

    // console.log("query", query);
    // console.log("typeOfNews", typeOfNews);
    // console.log("queryType", queryType);
    // console.log("queryAbout", queryAbout);

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Getting your News Data...",
        });
        featchNewsData(typeOfNews, queryType, queryAbout);
    }, [typeOfNews, queryType, queryAbout]);

    return {
        newsData,
        loading,
        error,
    }

}

export default useNewsQuery;