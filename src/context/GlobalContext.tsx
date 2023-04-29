import React, { useState } from "react";

export const music = ["Asturias", "Cambalache", "Azteca", "Electro", "Recuerdos"];
const modes = ["Normal", "Infinite", "Automatic"]

interface Music {
    handleNext: () => void
    handlePrev: () => void
    currentSong: string | null
}

export const MusicContext = React.createContext<Music>({
    handleNext: () => { },
    handlePrev: () => { },
    currentSong: ""
});

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const [song, setSong] = useState(0)
    const [currentSong, setCurrentSong] = useState<null | string>(music[0]);



    const handleNext = () => {
        const nextSong = (song + 1) % music.length;
        setCurrentSong(music[nextSong]);
        setSong(nextSong);
        console.log(nextSong)
      };

    const handlePrev = () => {
        let prevSong = song - 1;
        if (prevSong < 0) {
            prevSong = music.length - 1;
        }
        setSong(prevSong);
        setCurrentSong(music[prevSong]);
        console.log(prevSong)
    };



    return (
        <MusicContext.Provider value={{ handleNext, currentSong, handlePrev }}>
            {children}
        </MusicContext.Provider>
    )
}