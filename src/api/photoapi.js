import axios from "axios"

const YOUR_ACCESS_KEY = "8LvlhcBeY-DYh3kgecwRxfGvw-UzE1bdT2hsfhzS99A";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/photos/", {
        headers: {
            Authorization: `Client-ID ${YOUR_ACCESS_KEY}`
        },
        params: {
            query: term
        }
    })
    console.log("Response--", response)
    return response;
}

export default searchImages;