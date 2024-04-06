import searchLogo from '../../assets/icons/search.svg'

export default function SearchLogo() {
    return (
        <>
            <div className="flex items-center space-x-3 lg:space-x-8">
                <img src={searchLogo} />
            </div>
        </>
    )
}