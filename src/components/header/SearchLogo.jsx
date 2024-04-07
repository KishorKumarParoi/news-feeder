import { useContext, useState } from 'react';
import searchLogo from '../../assets/icons/search.svg';
import { QueryContext } from '../../contexts';
import useDebounce from '../../utils/useDebounce';

export default function SearchLogo() {
    const [showInputBar, setShowInputBar] = useState(false);
    const { setQuery } = useContext(QueryContext);

    const handleSearch = (e) => {
        console.log(e.target.value);
        setQuery({
            typeOfNews: "search",
            queryType: "q",
            queryAbout: e.target.value.toLowerCase(),
        });
    }

    const doSearch = useDebounce(handleSearch, 1000);

    return (
        <>
            <div className="flex items-center">
                {showInputBar && <input type="text" placeholder="Search" className="border border-black rounded-lg px-2 py-1" onChange={doSearch} />}
                <img src={searchLogo} onClick={() => { setShowInputBar(!showInputBar); }} />
            </div>
        </>
    )
}