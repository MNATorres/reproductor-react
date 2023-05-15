import React, { useEffect, useState } from "react";

export const music = ["Asturias", "Cambalache", "Azteca", "Electro", "Recuerdos"];
const modes = ["Normal", "Infinite", "Automatic"]

interface MusicActions {
    handleNext: () => void
    handlePrev: () => void
    currentSong: string | null
    handleSelectSong: (selectMusic: string) => void
    handleMode: () => void
    mode: string
    disabled: boolean
}


export const MusicContext = React.createContext<MusicActions>({
    handleNext: () => { },
    handlePrev: () => { },
    handleSelectSong: () => { },
    currentSong: music[0],
    handleMode: () => { },
    mode: modes[0],
    disabled: false
});

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const [countSong, setCountSong] = useState(0)
    const [currentSong, setCurrentSong] = useState<null | string>(music[0]);
    const [mode, setMode] = useState<string>(modes[0])
    const [indexMode, setIndexMode] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const handleNext = () => {
        let nextSong = countSong + 1
        if (mode === 'Normal' && nextSong > music.length - 1) {
            return
        } else if (mode === 'Infinite') {
            nextSong = (countSong + 1) % music.length
        }
        setCountSong(nextSong);
        setCurrentSong(music[nextSong]);
        console.log(nextSong)
    };

    const handlePrev = () => {
        let prevSong = countSong - 1;
        if(prevSong < 0){
            if(mode === 'Normal'){
                return
            }else if(mode === 'Infinite'){
                prevSong = music.length - 1;
            }
        }
        setCountSong(prevSong);
        setCurrentSong(music[prevSong]);
        console.log(prevSong)
    };


    const handleMode = () => {
        const nextMode = (indexMode + 1) % modes.length;
        setIndexMode(nextMode)
        setMode(modes[nextMode])

        console.log(mode)
    }

    const handleSelectSong = (selectMusic: string) => {
        setCountSong(music.indexOf(selectMusic));
        if (mode === 'Automatic') {
            setCurrentSong(currentSong);
        } else if (mode === 'Normal' || mode === 'Infinite') {
            setCurrentSong(selectMusic);
        }
    }

    useEffect(() => {
        if (mode === 'Automatic') {
            setDisabled(true)
        } else if (mode === 'Normal' || mode === 'Infinite') {
            setDisabled(false)
        }
    }, [mode])

    return (
        <MusicContext.Provider value={{ handleNext, handlePrev, handleSelectSong, currentSong, handleMode, mode, disabled }}>
            {children}
        </MusicContext.Provider>
    )
}