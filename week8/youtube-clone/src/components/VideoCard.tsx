

export function VideoCard(props: any) {
    return (
        <div className=" p-3 cursor-pointer">
            <img src={props.image} className="rounded-lg object-cover "/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 pt-3">
                    <img src={props.thumbImage} className="rounded-full w-9 h-9 "/>
                </div>
                <div className="col-span-11 pl-3">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        {props.channel}
                    </div>
                    <div className="col-span-11 text-gray-500 text-base">
                        {props.views} | {props.timestamp}
                    </div>
                    
                </div>

            </div>
        </div>
    )
}