import React, { useState } from "react";

export const music = ["Asturias", "Cambalache", "Azteca", "Electro", "Recuerdos"];
const modes = ["Normal", "Infinite", "Automatic"]

interface MusicActions {
    handleNext: () => void
    handlePrev: () => void
    currentSong: string | null
    handleSelectSong: (selectMusic: string) => void
    handleMode: () => void
    mode: string
}


export const MusicContext = React.createContext<MusicActions>({
    handleNext: () => { },
    handlePrev: () => { },
    handleSelectSong: () => {},
    currentSong: "",
    handleMode: () => {},
    mode: ""
});

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const [countSong, setCountSong] = useState(0)
    const [currentSong, setCurrentSong] = useState<null | string>(music[0]);
    const [mode, setMode] = useState<any>([modes[0]])
    const [indexMode, setIndexMode] = useState(0)

    const handleNext = () => {
        const nextSong = (countSong + 1) % music.length;
        setCountSong(nextSong);
        setCurrentSong(music[nextSong]);
      };

    const handlePrev = () => {
        let prevSong = countSong - 1;
        if (prevSong < 0) {
            prevSong = music.length - 1;
        }
        setCountSong(prevSong);
        setCurrentSong(music[prevSong]);
    };

    const handleMode = () => {
        const nextMode = (indexMode + 1) % modes.length;
        setIndexMode(nextMode)
        setMode(modes[nextMode])
        console.log(mode)
    }

    const handleSelectSong = (selectMusic:string) => {
        setCountSong(music.indexOf(selectMusic));
        setCurrentSong(selectMusic);
    }


    return (
        <MusicContext.Provider value={{ handleNext, handlePrev, handleSelectSong, currentSong, handleMode, mode }}>
            {children}
        </MusicContext.Provider>
    )
}