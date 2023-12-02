import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios";
import searchImages from '../../api/photoapi';

function MainPhotoPage() {

    const YOUR_ACCESS_KEY = "8LvlhcBeY-DYh3kgecwRxfGvw-UzE1bdT2hsfhzS99A";

    const [Images, setImages] = useState([]);

    const [searchTerm, setSearchTerm] = useState("sunrise");

    const getData = async (searchTerm) => {
        const result = await searchImages(searchTerm);
        const { data } = result;
        const records = data.map(element => element.urls)
        setImages(records)
        console.log("result", records);
    }

    useEffect(() => {
        getData(searchTerm);
        console.log("First Render")
    }, [])

    return (
        <div>
            Enter the Search Term: <input type='text' onClick={(e) => setSearchTerm(e.target.value)} />
            <button className='bg-blue-700 m-2 p-2 text-white' onClick={() => getData()}>Search </button>
            <hr />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Images && Images.map(element => {
                    return (<div>
                        <img className="h-auto max-w-full rounded-lg" src={element.regular} alt="" />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default MainPhotoPage