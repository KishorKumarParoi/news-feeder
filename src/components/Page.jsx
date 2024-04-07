import { useContext } from "react";
import { NewsContext } from "../contexts";
import Footer from "./Footer/Footer";
import Main from "./content/Main";
import Header from "./header/Header";

export default function Page() {
    const { loading } = useContext(NewsContext);

    return (
        (
            loading.state ?
                <>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
                        <div className="text-white text-2xl">{loading.message}</div>
                    </div>
                </>
                :
                <div>
                    <Header />
                    <Main />
                    <Footer />
                </div >
        )
    );
}
