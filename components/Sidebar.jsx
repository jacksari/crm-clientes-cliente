import React from 'react';
import Link from 'next/link'
import { FaUser,FaLaptopCode,FaStoreAlt } from 'react-icons/fa';
import {useRouter} from "next/router";

function Sidebar() {

    const router = useRouter()
    return (
        <aside className="bg-gray-800 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 md:min-h-screen">
            <div className="border-b-2">
                <p className="text-white text-2xl font-black p-5">CRM Clientes</p>
            </div>

            <nav className="list-none">
                <li className={router.pathname === '/' ? 'bg-gray-200 text-black': 'text-white'}>
                    <Link href="/">
                        <a className="flex items-center pl-5 font-normal mb-3 p-2 block hover:bg-gray-200 hover:text-black transition duration-500 ease-in-out">
                            <FaUser className="mr-5"/>Clientes
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === '/productos' ? 'bg-gray-200 text-black': 'text-white'}>
                    <Link href="/productos">
                        <a className="flex items-center pl-5 font-normal mb-3 p-2 block hover:bg-gray-200 hover:text-black transition duration-500 ease-in-out">
                            <FaLaptopCode className="mr-5"/>Productos
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === '/pedidos' ? 'bg-gray-200 text-black': 'text-white'}>
                    <Link href="/pedidos">
                        <a className="flex items-center pl-5 font-normal mb-3 p-2 block hover:bg-gray-200 hover:text-black transition duration-500 ease-in-out">
                            <FaStoreAlt className="mr-5"/>Pedidos
                        </a>
                    </Link>
                </li>
            </nav>
        </aside>
    );
}

export default Sidebar;