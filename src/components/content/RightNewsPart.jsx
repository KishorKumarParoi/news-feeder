import { useContext } from 'react';
import thumb from '../../assets/thumb.png';
import { NewsContext } from '../../contexts';
import convertDate from '../../utils/convertDate';

export default function RightNewsPart() {
    const { newsData } = useContext(NewsContext);
    const { articles } = { ...newsData };

    return (
        <>
            <div className="col-span-12 self-start xl:col-span-4">
                <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                    {/* <!-- news item --> */}
                    <div className="col-span-12 mb-6 md:col-span-8">
                        <img className="w-full" src={thumb} alt="thumb" />
                        {/* <!-- info --> */}
                        <div className="col-span-12 mt-6 md:col-span-4">
                            <a href="#">
                                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                    {articles && articles[1]?.title}
                                </h3>
                            </a>
                            <p className="text-base text-[#292219]">
                                {articles && articles[1]?.description}
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                {articles && convertDate(articles[1]?.publishedAt)}
                            </p>
                        </div>
                    </div>
                    {/* <!-- news item ends --> */}
                    {/* <!-- news item --> */}
                    {
                        articles && articles.slice(2, 23).map((article, index) => (
                            <div className="col-span-12 md:col-span-8" key={index}>
                                {/* <!-- info --> */}
                                <div className="col-span-12 md:col-span-4">
                                    <a href="#">
                                        <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                            {article.title}
                                        </h3>
                                    </a>
                                    <p className="text-base text-[#292219]">
                                        {article.description}
                                    </p>
                                    <p className="mt-5 text-base text-[#94908C]">
                                        {convertDate(article.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}