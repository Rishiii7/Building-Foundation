
export const Assignment1 = () => {
    return (
        <>

        <div className="relative w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-grow ">
                <div className="item-center m-10 flex flex-col h-full">
                        <img className="rounded-t-lg" src="https://unsplash.com/photos/aerial-photo-of-brown-moutains-JgOeRuGD_Y4" />
                        <div>
                            Image name
                        </div>
                </div>
            </div>
            <div>
                <div>
                    <span>Rita Corriea</span>
                    <span className="pl-2 text-slate-500">32</span>
                </div>
                <div>
                    <span>London</span>
                </div>
            </div>
            
            <div className="absolute bottom-20 left-0 right-0">
                <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <div className="absolute bottom-0 p-4 left-0 right-0 flex justify-evenly object-bottom">
                {/* first child */}
                <div className="text-center">
                    <div>
                        80K
                    </div>
                    <div>
                        Followers
                    </div>
                </div>
                {/* second  child */}
                <div className="text-center">
                    <div>
                        803K
                    </div>
                    <div>
                        Likes
                    </div>
                </div>
                {/* third child */}
                <div className="text-center">
                    <div>
                        1.4k
                    </div>
                    <div>
                        photos
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}