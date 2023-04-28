import React, { useState } from "react";

export const music = ["Asturias", "Cambalache", "Azteca", "Electro", "Recuerdos"];

interface Music {
    handleNext: () => void
    currentSong: string
}

export const MusicContext = React.createContext<Music>({
    handleNext: () => {},
    currentSong: ""
});

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
const [nextSong, setNextSong] = useState(0)
const [currentSong, setCurrentSong] = useState(music[0]);


const handleNext = () => {
setNextSong((nextSong + 1) % music.length);
setCurrentSong(music[nextSong])
}

    return (
        <MusicContext.Provider value={{handleNext, currentSong}}>
            {children}
        </MusicContext.Provider>
    )
}