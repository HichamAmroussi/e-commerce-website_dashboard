import { useState } from "react";

interface FormData {
    name: string;
    description: string;
    size: string;
    price: string;
    category: string;
    product_images: FileList | null;
    stock: string;
}

const defaultFormData: FormData = {
    name: "",
    description: "",
    size: "",
    price: "",
    category: "",
    product_images: null,
    stock: ""
};

const ManageProducts = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const {name, description, size, price, category, product_images, stock} = formData;
    const [isPending, setIsPending] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        }

        if(e.target.id != "product_images") {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            })) 
        } else {  
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: target.files,
            })) 
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newFormData = new FormData();

        newFormData.append('name', name);
        newFormData.append('description', description);
        newFormData.append('size', size);
        newFormData.append('price', price);
        newFormData.append('category', category);
        newFormData.append('stock', stock);

        if(product_images !== null) {
            for (let i = 0 ; i < product_images.length ; i++) {
                newFormData.append("product_images", product_images[i]);
            }
        }

        setIsPending(true);
        
        await fetch("http://localhost:3000/dashboard/manage-products", { 
            method: "POST",
            body: newFormData
        });

        setIsPending(false);
    }

    return (
        <form onSubmit={handleSubmit} className="m-auto container max-w-[1350px] grid grid-cols-2 gap-8">
            <h1 className="col-span-2 text-xl font-medium">Add Product</h1>

            <div className="border border-gray-200 px-8 py-4 rounded-xl">
                <h3 className="my-2">Add Images</h3>
                <input 
                    type="file" 
                    id="product_images"
                    className="border-none my-5"
                    required
                    multiple
                    onChange={handleInputChange} 
                />
            </div>

            <div className="rounded-xl border border-gray-200 px-8 py-4">
                <div className="text-gray-600 flex flex-col">
                    <label className="my-2 text-[15px]" htmlFor="name">Product Name</label>
                    <input 
                        type="text" 
                        id="name"
                        className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleInputChange}
                    />

                    <label className="my-2 text-[15px]" htmlFor="description">Product Description</label>
                    <input 
                        type="text" 
                        id="description"
                        className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none break-all h-[120px]"
                        placeholder="Description"
                        required
                        value={description}
                        onChange={handleInputChange}
                    />

                    <label className="my-2 text-[15px]" htmlFor="size">Product size</label>
                    <input 
                        type="text" 
                        id="size"
                        className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                        placeholder="Size"
                        required
                        value={size}
                        onChange={handleInputChange}
                    />

                    <label className="my-2 text-[15px]" htmlFor="price">Price</label>
                    <input 
                        type="text" 
                        id="price"
                        className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                        placeholder="Price"
                        required
                        value={price}
                        onChange={handleInputChange}
                    />

                    <label className="my-2 text-[15px]" htmlFor="category">Category</label>
                    <select 
                        id="category"
                        className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                        required
                        value={category}
                        onChange={handleInputChange}
                    >  
                        <option>Product Category</option>
                        <option value="weights-and-bars">Weights and Bars</option>
                        <option value="dumbbells">Dumbbells</option>
                    </select>

                    <label className="my-2 text-[15px]" htmlFor="stock">Stock</label>
                    <input 
                        type="number" 
                        min="0" 
                        step="1"
                        id="stock"
                        className="px-5 py-3 mb-1.5 border border-[rgb(204, 204, 204)] rounded-md outline-none"
                        placeholder="Stock"
                        required
                        value={stock}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            { !isPending && <button className="bg-[#C7896A] px-7 py-3 rounded-md justify-self-end text-white hover:bg-[#d8a38d] duration-500 col-start-2">Publish Product</button> }
            { isPending && <button className="bg-[#C7896A] px-7 py-3 rounded-md justify-self-end text-white col-start-2" disabled>Posting Product...</button> }
        </form>
    );
}
 
export default ManageProducts;