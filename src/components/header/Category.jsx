import { useContext } from "react";
import { QueryContext } from "../../contexts";

export default function Category() {
    const { setQuery } = useContext(QueryContext);

    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.innerText);
        setQuery({
            typeOfNews: "top-headlines",
            queryType: "category",
            queryAbout: e.target.innerText.toLowerCase(),
        });
    }
    return (
        <>
            <div className="container mx-auto mt-6">
                <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                    <li><a href="#" onClick={handleClick}>General</a></li>
                    <li><a href="#" onClick={handleClick}>Business</a></li>
                    <li><a href="#" onClick={handleClick}>Entertainment</a></li>
                    <li><a href="#" onClick={handleClick}>Health</a></li>
                    <li><a href="#" onClick={handleClick}>Science</a></li>
                    <li><a href="#" onClick={handleClick}>Sports</a></li>
                    <li><a href="#" onClick={handleClick}>Technology</a></li>
                </ul>
            </div>
        </>
    )
}