import React, { useState } from "react";

export const music = ["Asturias", "Cambalache", "Azteca", "Electro", "Recuerdos"];
const modes = ["Normal", "Infinite", "Automatic"]

interface MusicActions {
    handleNext: () => void
    handlePrev: () => void
    currentSong: string | null
    handleSelectSong: (selectMusic: string) => void
    selected: boolean
}


export const MusicContext = React.createContext<MusicActions>({
    handleNext: () => { },
    handlePrev: () => { },
    handleSelectSong: () => {},
    currentSong: "",
    selected: false
});

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const [song, setSong] = useState(0)
    const [currentSong, setCurrentSong] = useState<null | string>(music[0]);
    const [selected, setSelected] = useState(false)



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

    const handleSelectSong = (selectMusic:string) => {
        setCurrentSong(selectMusic);
        setSelected(true);
    }


    return (
        <MusicContext.Provider value={{ handleNext, handlePrev, handleSelectSong, currentSong, selected }}>
            {children}
        </MusicContext.Provider>
    )
}