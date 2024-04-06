import LeftNewsPart from "./LeftNewsPart";
import RightNewsPart from "./RightNewsPart";

export default function Main() {
    return (
        <div>
            <main className="my-10 lg:my-14">
                <div className="container mx-auto grid grid-cols-12 gap-8">
                    <LeftNewsPart />
                    <RightNewsPart />
                </div>
            </main>
        </div>
    )
}
