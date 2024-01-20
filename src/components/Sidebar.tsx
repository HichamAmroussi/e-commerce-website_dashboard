import { useState } from "react";
import MenuCategoryBtn from "./MenuCategoryBtn";
// Interfaces
interface Props {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}
interface CategoryProps {
    id: number;
    label: string;
}

const Sidebar = ({ currentPage, setCurrentPage }: Props) => {
    let currentCategoryID = 0;

    const categories: CategoryProps[] = [
        { id: 1, label: 'Dashboard' },
        { id: 2, label: 'Manage Products' },
        { id: 3, label: 'Orders' },
    ];

    categories.forEach((object) => {
        if(currentPage === object.label) currentCategoryID = object.id;
    })

    const [activeButton, setActiveButton] = useState<number>(currentCategoryID);

    return ( 
        <aside className="min-h-screen w-[285px] z-50">
            <nav className="bg-white p-2 h-full w-[285px] flex flex-col shadow-sm border-r-2 border-gray-100">
                <h1 className="text-2xl font-bold mx-4 my-6">Admin Dashboard</h1>

                <ul className="text-gray-900 flex flex-col gap-4 mx-8 my-3 font-bold text-lg">
                    {categories.map((category) => (
                        <MenuCategoryBtn 
                            key={category.id}
                            categoryID={category.id}
                            label={category.label}
                            activeButton={activeButton}
                            setActiveButton={setActiveButton}
                            setCurrentPage={setCurrentPage}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
 
export default Sidebar;