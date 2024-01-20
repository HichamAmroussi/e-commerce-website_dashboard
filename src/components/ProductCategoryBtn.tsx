interface Props {
    buttonID: number;
    label: string;
    activeButton: number;
    setActiveButton: ( key: number ) => void;
    filterProducts: (category: string) => void
}

const CategoryBtn = ({ buttonID, label, activeButton, setActiveButton, filterProducts }: Props) => {
    const handleButtonClick = () => {
        setActiveButton(buttonID);
        filterProducts(label);
    };

    return ( 
        <li className="bg-gray-800 text-white py-3 px-5 rounded-full">
            <button 
                className={buttonID === activeButton? `text-green-600 font-medium text-lg hover:text-green-600 duration-300` : ` font-medium text-lg hover:text-green-600 duration-300`}
                onClick={() => handleButtonClick()}
            >
                {label}
            </button>
        </li>
    );
}
 
export default CategoryBtn;