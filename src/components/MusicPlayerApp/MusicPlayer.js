import React from 'react'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function MusicPlayer() {
    const tracks = [
        {
            url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
            title: "Chords of Life",
            tags: ["house"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
            title: "Late Night Drive",
            tags: ["dnb"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
            title: "Persistence",
            tags: ["dubstep"],
        },
    ];

    return (
        <div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Audio Player </h5>
                <Player trackList={tracks} />
            </div>
        </div>
    )
}

export default MusicPlayer