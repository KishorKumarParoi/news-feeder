import { useContext } from 'react';
import { NewsContext } from '../../contexts';
import convertDate from '../../utils/convertDate';

export default function NewsPart() {
    const { newsData } = useContext(NewsContext);
    const { result } = { ...newsData };

    return (
        <>
            {
                result && result.map((article, index) => (
                    <div className="col-span-12 md:col-span-6 lg:col-span-4" key={index}>
                        {/* <!-- info --> */}
                        <div className="col-span-12 md:col-span-4">
                            <a href="#">
                                <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                    {article?.title}
                                </h3>
                            </a>
                            <p className="text-base text-[#292219]">
                                {article?.description}
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                {convertDate(article?.publishedAt)}
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}