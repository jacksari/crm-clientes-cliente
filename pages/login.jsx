import React from 'react';
import Layout from "../components/Layout";
import Link from 'next/link'

function Login() {
    return (
        <>
            <Layout>
                <h1 className="text-white text-center text-2xl font-light">Login</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm ">
                        <form className="bg-white rounded-xl shadow-md px-8 pt-6 pb-6 mb-4">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Ingrese email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Ingrese password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase border-2 hover:text-gray-700 border-gray-800 hover:bg-white rounded transition duration-500 ease-in-out cursor-pointer"
                                value="iniciar sesión"
                            />
                            <Link href="/register">
                                <a>
                                    <p className="text-sm text-right pt-2">¿No tienes cuenta?</p>
                                </a>
                            </Link>
                        </form>


                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Login;