// Libraries
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
// Components
import ProductCard from "../components/ProductCard";
import CategoryBtn from "../components/ProductCategoryBtn";
// Interfaces
interface Product {
    id: number;
    size: string;
    name: string;
    price: number;
    category: string;
    image_thumbnail: string;
}
interface ButtonProps {
    id: number;
    label: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [activeButton, setActiveButton] = useState<number>(1);
    
    const buttons: ButtonProps[] = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Weights and Bars' },
        { id: 3, label: 'Dumbbells' },
    ];

    const filterProducts = async (category: String) => {
        setProducts(null);
        setIsPending(true);

        if(category === "All") {
            const api = await fetch(`http://localhost:3000/dashboard/manage-products/products`);
            const data = await api.json();

            // Remove Loading Animation
            setIsPending(false);
            // Change Products State
            setProducts(data);
        } else {
            const api = await fetch(`http://localhost:3000/dashboard/manage-products/products/${category.replace(/ /g, "-")}`);
            const data = await api.json();

            // Remove Loading Animation
            setIsPending(false);
            // Change Products State
            setProducts(data);
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/dashboard/manage-products/products")
            .then((data) => data.json())
            .then((response) => {
            // Remove Loading Animation
            setIsPending(false);
            // Change Products State
            setProducts(response);
            });
    }, []);

    return ( 
        <div className="max-w-9xl container mx-auto p-10 relative">
            <ul className="flex gap-1">
                {buttons.map((button) => (
                    <CategoryBtn 
                        key={button.id}
                        buttonID={button.id}
                        label={button.label}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                        filterProducts={filterProducts}
                    />
                ))}
            </ul>

            <main className="shadow-sm rounded-xl overflow-hidden my-12 mx-3 flex flex-col md:my-10">
                <div className="bg-[#FCFCFC] border-b border-r border-[#E8E8E8] grid grid-cols-[120px,1fr,1fr] items-center gap-8 py-6 px-10 w-full">
                    <span className="text-gray-500 text-xl font-medium">Product info</span>
                </div>

                {isPending && (
                    <div className="min-h-full w-full flex justify-center col-span-4">
                        <div className="loading-animation"></div>
                    </div>
                )}

                { products && products.length !== 0 &&
                    products.map((product) => (
                        <ProductCard
                            product={product}
                            products={products}
                            setProducts={setProducts}
                            key={product.id}
                        />
                    ))
                }

                {products && products.length === 0 && (
                    <div className="bg-[#f8f8f8] border-b border-r border-[#E8E8E8] grid grid-cols-2 items-center gap-8 py-3 px-10 w-full">
                        No Products are available.
                    </div>
                )}

            </main>

            <Link 
                to="/manage-products/add-product"
                className="bg-[#c7896a] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 absolute top-[-1.2rem] right-[0.5rem]"
            >
                <IoMdAdd className="text-xl" />
                <p>Add Product</p>
            </Link>
        </div>
    );
}
 
export default ProductList;