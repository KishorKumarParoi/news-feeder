import Copywright from "./Copywright";
import List from "./List";
import Subscribe from "./Subscribe";

export default function Footer() {
    return (
        <>
            <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
                <div className="container mx-auto">
                    <div className="xl:grid xl:grid-cols-12 xl:gap-8">
                        <List />
                        <Subscribe />
                    </div>
                </div>
                <Copywright />
            </footer>
        </>
    )
}
