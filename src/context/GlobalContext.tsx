import React, { useState } from "react";

export const music = ["Asturias", "Cambalache", "Azteca", "Electro", "Recuerdos"];
const modes = ["Normal", "Infinite", "Automatic"]

interface MusicActions {
    handleNext: () => void
    handlePrev: () => void
    currentSong: string | null
    handleSelectSong: (selectMusic: string) => void
}


export const MusicContext = React.createContext<MusicActions>({
    handleNext: () => { },
    handlePrev: () => { },
    handleSelectSong: () => {},
    currentSong: "",
});

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const [song, setSong] = useState(0)
    const [currentSong, setCurrentSong] = useState<null | string>(music[0]);

    const handleNext = () => {
        const nextSong = (song + 1) % music.length;
        setSong(nextSong);
        setCurrentSong(music[nextSong]);
      };

    const handlePrev = () => {
        let prevSong = song - 1;
        if (prevSong < 0) {
            prevSong = music.length - 1;
        }
        setSong(prevSong);
        setCurrentSong(music[prevSong]);
    };

    const handleSelectSong = (selectMusic:string) => {
        setSong(music.indexOf(selectMusic));
        setCurrentSong(selectMusic);
    }


    return (
        <MusicContext.Provider value={{ handleNext, handlePrev, handleSelectSong, currentSong }}>
            {children}
        </MusicContext.Provider>
    )
}