import React from 'react';


function Header() {
    return (
        <nav className="flex items-center justify-between p-6 bg-blue-500 fixed w-full">
            <div className='container mx-auto flex'>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    {/*<span className="font-semibold text-xl tracking-tight">Logo</span>*/}
                    <h1 class="logo">Victoria <br /><span>Web development</span></h1>
                </div>
                <div className="block">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white lg:hidden">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full justify-items-end ml-auto block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm ml-auto">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;