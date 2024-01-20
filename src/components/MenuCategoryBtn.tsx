import { Link } from "react-router-dom";
// React Icons
import { RxDashboard } from "react-icons/rx";
import { FaTshirt } from "react-icons/fa";
import { PiPackage } from "react-icons/pi";
import { BsCardList } from "react-icons/bs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
// Interface
interface Props {
    categoryID: number;
    label: string;
    activeButton: number;
    setActiveButton: ( key: number ) => void;
    setCurrentPage: (page: string) => void;
}

const MenuCategoryBtn = ({ categoryID, label, activeButton, setActiveButton, setCurrentPage }: Props) => {
    const handleButtonClick = () => {
        setActiveButton(categoryID);
        setCurrentPage(label);
    };
    

    return ( 
        <li>
            <Link 
                to={label === "Manage Products" ? "/" + label.replace(/ /g, "-") + "/products" : "/" + label.replace(/ /g, "-")}
                className={categoryID === activeButton? "p-2 flex gap-2 items-center bg-[#c7896a] text-white rounded-md" : "p-2 flex gap-2 items-center rounded-md hover:bg-[#c7896a] hover:text-white duration-300"}
                onClick={() => handleButtonClick()}
            >
                {   label === "Dashboard" ? <RxDashboard /> : 
                    label === "Manage Products" ? <FaTshirt /> : 
                    label === "Orders" ? <PiPackage /> : 
                    ""
                }
                <p className="text-[16px]">{label}</p>
            </Link>

            {
                label === "Manage Products" ? 
                    <ul className="mx-3">
                    <li>
                        <Link to="/manage-products/products" className="p-2 flex gap-2 items-center" onClick={() => handleButtonClick()}>
                            <BsCardList className="text-[#A4B2C2]" />
                            <p className="text-[14px] font-medium">Product List</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage-products/add-product" className="p-2 flex gap-2 items-center" onClick={() => handleButtonClick()}>
                            <MdOutlinePlaylistAdd className="text-[#A4B2C2]" />
                            <p className="text-[14px] font-medium">Add Product</p>
                        </Link>
                    </li>
                </ul> 
                : ""
            }
        </li>
    );
}
 
export default MenuCategoryBtn;