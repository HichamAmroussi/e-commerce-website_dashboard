//import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
// Interfaces
/*interface Order {
    id: number;
    first_name: string;
    last_name: string;
    address: string;
    wilaya: string;
    phone_number: string;
    shipping_type: string;
    products: string;
}*/

const Orders = () => {
    //const [orders, setOrders] = useState<Order[] | null>(null);
    //const [isPending, setIsPending] = useState(false);

    const ordersData = [{
        id: 1,
        first_name: "Hicham",
        last_name: "Amroussi",
        address: "06, Rue des frères Salah",
        wilaya: "Tipaza",
        phone_number: "0656459832",
        shipping_type: "à domicile",
        products: [{
            name: "Nike Airforce 1"
        },
        {
            name: "Nike Airforce 1"
        }
        ]
    },
    {
        id: 2,
        first_name: "Hicham",
        last_name: "Amroussi",
        address: "06, Rue des frères Salah",
        wilaya: "Tipaza",
        phone_number: "0656459832",
        shipping_type: "à domicile",
        products: [{
            name: "Nike Airforce 1"
        },
        {
            name: "Nike Airforce 1"
        }
        ]
    },
    {
        id: 3,
        first_name: "Hicham",
        last_name: "Amroussi",
        address: "06, Rue des frères Salah",
        wilaya: "Tipaza",
        phone_number: "0656459832",
        shipping_type: "à domicile",
        products: [{
            name: "Nike Airforce 1"
        },
        {
            name: "Nike Airforce 1"
        }
        ]
    }
    ]

    return ( 
        <main className="shadow-sm rounded-xl overflow-hidden my-12 mx-3 flex flex-col md:my-10">
            <div className="bg-[#FCFCFC] border-b border-r border-[#E8E8E8] grid grid-cols-8 items-center gap-8 py-6 px-10 w-full">
                <div className="text-gray-500 text-md font-medium">First Name</div>
                <div className="text-gray-500 text-md font-medium">Last Name</div>
                <div className="text-gray-500 text-md font-medium">Address</div>
                <div className="text-gray-500 text-md font-medium">Wilaya</div>
                <div className="text-gray-500 text-md font-medium">Phone Number</div>
                <div className="text-gray-500 text-md font-medium">Shipping Type</div>
                <div className="text-gray-500 text-md font-medium">Products</div>
            </div>

            {/*isPending && (
                <div className="min-h-full w-full flex justify-center col-span-4">
                    <div className="loading-animation"></div>
                </div>
            )*/}

            { ordersData && ordersData.length !== 0 &&
                ordersData.map((order) => (
                    <div className="bg-[#f8f8f8] border-b border-r border-[#E8E8E8] grid grid-cols-8 items-center gap-8 py-3 px-10 w-full">
                        <div className="text-xl font-medium">{order.first_name}</div>
                        <div className="text-xl font-medium">{order.last_name}</div>
                        <div className="text-md py-1">{order.address}</div>
                        <div className="text-md py-1">{order.wilaya}</div>
                        <div className="text-md py-1">{order.phone_number}</div>
                        <div className="text-md py-1">{order.shipping_type}</div>
                        <div className="text-md py-1">
                            <select className="py-4 px-6 rounded-md border border-gray-200 outline-none cursor-pointer">
                                { order.products.map((product) => (
                                    <option>{product.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button className="text-[#76b4e7] bg-[#EBF7FF] p-4 rounded-full">
                                <FaPencil />
                            </button>
                            <button className="text-[#F86469] bg-[#FEE7E6] p-4 rounded-full">
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                ))
            }

            {ordersData && ordersData.length === 0 && (
                <div className="bg-[#f8f8f8] border-b border-r border-[#E8E8E8] grid grid-cols-2 items-center gap-8 py-3 px-10 w-full">
                    No Orders.
                </div>
            )}

        </main>
    );
}
 
export default Orders;