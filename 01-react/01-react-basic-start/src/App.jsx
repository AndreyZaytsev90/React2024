import Header from "./components/Header.jsx";
import {memo, useState} from "react";
import {TeachingSection} from "./components/TeachingSection.jsx";
import {Differences} from "./components/Differences.jsx";

export const technologies = [
    {name: 'Javascript', other: 'Язык программирования для веб-разработки'},
    {name: 'React', other: 'Библиотека для веб-разработки'},
]


export const App = memo(() => {


    return (
        <>
            <Header/>
            <main>
                <TeachingSection/>
                <Differences/>
            </main>
        </>
    )
})

