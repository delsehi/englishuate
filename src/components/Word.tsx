import React, { useEffect, useState } from 'react';

const dictAPI = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const randAPI = 'https://random-words-api.vercel.app/word'

type WordAndPron = {
    word: string,
    phonetic: string,
    audio: string
}

const getRandomWord = async (): Promise<string> => {
    const response = await (await fetch(randAPI)).json()
    return response[0].word
}

const playAudio = (word: WordAndPron | undefined) => {
    if (word === undefined) return
    const audio = new Audio(word.audio)
    audio.play()
}

const getPronunciation = async (): Promise<WordAndPron | undefined> => {
    let word
    do {
        const rand = await getRandomWord()
        const response: any = await (await fetch(dictAPI + rand)).json()
        word = response[0]

    } while (!word)
    console.log(word)
    return { word: word.word, audio: word.phonetics[0].audio, phonetic: word.phonetic }
}


function Word() {

    const getNewWord = async () => {
        const newWord = await getPronunciation()
        setWord(newWord)
        console.log(newWord)
    }
    const [word, setWord] = useState<WordAndPron>()

    useEffect(() => {
        getNewWord()
    }, [])


    return (
        <div className="section" >

                <div className="card" >
                    <div className="card-content has-text-centered">
                        <div className="media-content">
                            <div className="title is-6">
                                {word ? word.word : 'Loading'}
                            </div>
                            <div className="subtitle">

                                {word ? word.phonetic : 'Loading'}
                            </div>
                        </div>
                </div>
            </div>
            <br />
            <div className="has-text-centered">

                <button className="button is-success" onClick={() => { getNewWord() }}>New word</button>
                <br /> <br />
                <button className="button is-success" onClick={() => { playAudio(word) }} >Correct pronunciation</button>
                <p></p>
            </div>
        </div>

    )
}


export default Word