import Category from "./Category";
import Date from './Date';
import Logo from "./Logo";
import SearchLogo from "./SearchLogo";

export default function Header() {
    return (
        <div>
            <nav className="border-b border-black py-6 md:py-8">
                <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                    <Date />
                    <Logo />
                    <SearchLogo />
                </div>
                <Category />
            </nav>
        </div>
    )
}
