import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ProductProps {
    product: {
        id: number;
        size: string;
        name: string;
        description: string;
        price: number;
        category: string;
        image_thumbnail: string;
        stock: number;
    };
    products: {
        id: number;
        size: string;
        name: string;
        description: string;
        price: number;
        category: string;
        image_thumbnail: string;
        stock: number;
    }[];
    setProducts: (
        item: {
            id: number;
            size: string;
            name: string;
            description: string;
            price: number;
            category: string;
            image_thumbnail: string;
            stock: number;
        }[]
      ) => void;
}

const ProductCard = ({ product, products, setProducts }: ProductProps) => {
    const deleteProduct = async () => {
        await fetch(`http://localhost:3000/dashboard/manage-products/products/${product.id}`, { method: "DELETE"});

        const newProductArr = products.filter(
            (item) => item.id !== product.id
        );

        // Set the new State
        setProducts(newProductArr);
    }

    return ( 
        <div className="bg-[#f8f8f8] border-b border-r border-[#E8E8E8] grid grid-cols-[96px,1fr,1fr] items-center gap-8 py-3 px-10 w-full">
            <figure>
                <img src={"http://localhost:3000/images/product_images/" + product.image_thumbnail} alt={product.name} className="w-24 h-auto object-cover rounded-md" />
            </figure>
            <div className="py-6 px-1">
                <p className="text-xl font-medium">{product.name}</p>
                <p className="text-md py-1">{product.price} DA</p>
                <p className="text-md py-1">Stock : {product.stock}</p>
            </div>

            <div className="flex gap-3 justify-end">
                <button className="text-[#76b4e7] bg-[#EBF7FF] p-4 rounded-full">
                    <FaPencil />
                </button>
                <button className="text-[#F86469] bg-[#FEE7E6] p-4 rounded-full" onClick={deleteProduct}>
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
     );
}
 
export default ProductCard;