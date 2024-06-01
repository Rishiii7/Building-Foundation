import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30day plan | Code with me",
    thumbImage: "../Image-2.jpeg",
    image: "../Image-2.jpeg",
    channel: "Rishikesh Solapure",
    views: "10M views",
    timestamp: "1 day ago",
}, {
    title: "How to learn coding in 30 days | 30day plan | Code with me",
    thumbImage: "../Image-2.jpeg",
    image: "../Image-2.jpeg",
    channel: "Rishikesh Solapure",
    views: "10M views",
    timestamp: "1 day ago",
}, {
    title: "How to learn coding in 30 days | 30day plan | Code with me",
    thumbImage: "../Image-2.jpeg",
    image: "../Image-2.jpeg",
    channel: "Rishikesh Solapure",
    views: "10M views",
    timestamp: "1 day ago",
}, {
    title: "How to learn coding in 30 days | 30day plan | Code with me",
    thumbImage: "../Image-2.jpeg",
    image: "../Image-2.jpeg",
    channel: "Rishikesh Solapure",
    views: "10M views",
    timestamp: "1 day ago",
},]


export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                VIDEOS.map ( (video) => {
                    return (
                        <div>
                        <VideoCard 
                                title={video.title} 
                                thumbImage={video.thumbImage}
                                image={video.image}
                                channel={video.channel}
                                views={video.views}
                                timestamp={video.timestamp}
                        />
                        </div>
                    )
                })
            }
        </div>
    )
}