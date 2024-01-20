interface Props {
    currentPage: string;
}

const Topbar = ({currentPage}: Props) => {
    return ( 
        <header className="bg-white h-[70px] w-full">
            <nav className="px-5 h-[90px] w-full flex justify-between items-center">
                <h1 className="text-xl font-bold">{currentPage}</h1>
                <img src="/profile-pic.jpg" alt="Profile Picture" className="h-10 rounded-full" />
            </nav>
        </header>
    );
}
 
export default Topbar;