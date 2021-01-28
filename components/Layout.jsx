import React from 'react';
import Head from "next/head";
import Sidebar from "./Sidebar";
import {useRouter} from "next/router";

function Layout({children,title}) {
    //routing de next
    const router = useRouter()
    return (
        <>
            <Head >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                      integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                      crossOrigin="anonymous"/>
                <title>{title}</title>
            </Head>
            {
                router.pathname === '/login' || router.pathname === '/register' ? (
                    <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                        <div>
                            {children}
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-200 min-h-screen">
                        <div className="sm:flex min-h-screen">
                            <Sidebar/>
                            <main className="w-full sm:w-2/3 md:w-3/4 lg:w-4/5 md:min-h-screen p-5">
                                {children}
                            </main>
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default Layout;