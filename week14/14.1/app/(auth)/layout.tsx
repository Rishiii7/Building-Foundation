import React from "react";

export default function ({children} : {children: React.ReactNode}) {
    return (
        <>
            {/* <div className="relative isolate flex items-center justify-between max-md:flex-col gap-2 bg-gradient-to-tr from-blue-700 to-purple-400 text-white px-6 py-2 border-b ">

                <div className="">
                    <p className="text-base flex flex-col max-md:text-center">
                        Don't miss out on our amazing summer sale! Get up to 50% off on a wide range of products. Make the most of your summer shopping.
                    </p>
                </div>
                

                <div className=" flex justify-between gap-4">
                    <button type="button" className="bg-white text-blue-500 py-1 px-3 rounded text-sm">
                    Get Offer
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 cursor-pointer fill-white inline-block ml-4" viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000" 
                        />
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000" 
                        />
                    </svg> 
                </div>

            </div> */}
            
            <div className="bg-indigo-600 rounded-md my-2 mx-6 ">
                <div className="max-w-screen-xl mx-auto px-4 py-3 items-center gap-x-4 justify-center text-white sm:flex md:px-8">
                    <p className="py-2 font-medium">
                        We just launched our new product! you can check out all features now.
                    </p>
                    <a href="#" className="flex-none inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm">
                        Learn more
                    </a>
                </div>
            </div>
            
            <div className=" flex flex-grow justify-center items-center mt-20">
                {children}
            </div>
        </>
    )
}