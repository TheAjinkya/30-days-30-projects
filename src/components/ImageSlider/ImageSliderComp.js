import React from 'react'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

function ImageSliderComp() {
    const images = [
        { url: "https://picsum.photos/seed/a/1600/900" },
        { url: "https://picsum.photos/seed/b/1920/1080" },
        { url: "https://picsum.photos/seed/c/1366/768" },
    ];

    return (<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Carousel </h5>
        <Slider imageList={images} width={1000} height={500} /></div>)
}

export default ImageSliderComp