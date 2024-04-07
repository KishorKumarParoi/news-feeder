import { useContext } from "react";
import thumb from "../../assets/thumb.png";
import thumbLg from "../../assets/thumb_lg.png";
import { NewsContext, QueryContext } from "../../contexts";
import convertDate from "../../utils/convertDate";
import NewsPart from './NewsPart';

export default function LeftNewsPart() {
    const { newsData } = useContext(NewsContext);
    const { articles, result } = { ...newsData };
    const { query } = useContext(QueryContext);

    // console.log(articles);
    // console.log(result);
    // console.log(query);

    if (query.typeOfNews === 'search')
        return <NewsPart />;

    return (
        <>

            <>
                <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">

                    <div className="col-span-12 grid grid-cols-12 gap-4">
                        {/* <!-- info --> */}
                        <div className="col-span-12 lg:col-span-4">
                            <a href="#">
                                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                                    {articles && articles[0]?.title}
                                </h3>
                            </a>
                            <p className="text-base text-[#5C5955]">
                                {articles && articles[0]?.description}
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                {articles && convertDate(articles[0]?.publishedAt)}
                            </p>
                        </div>
                        {/* <!-- thumb --> */}
                        <div className="col-span-12 lg:col-span-8">
                            <img className="w-full" src={thumbLg} alt="thumb" />
                            <p className="mt-5 text-base text-[#5C5955]">
                                {articles && articles[0]?.content}
                            </p>
                        </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                        {/* <!-- info --> */}
                        <div className="col-span-12 md:col-span-6">
                            <a href="">
                                <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                    {articles && articles[2]?.title}
                                </h3>
                            </a>
                            <p className="text-base text-[#292219]">
                                {articles && articles[2]?.description}
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                {articles && convertDate(articles[2]?.publishedAt)}
                            </p>
                        </div>
                        {/* <!-- thumb --> */}
                        <div className="col-span-12 md:col-span-6">
                            <img className="w-full" src={thumb} alt="thumb" />
                        </div>
                    </div>

                    {
                        articles && articles.map((article, index) => (
                            (index > 2) && <div className="col-span-12 md:col-span-6 lg:col-span-4" key={index}>
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
                </div>
            </>
        </>
    )
}