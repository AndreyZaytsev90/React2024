import Header from "./components/Header.jsx";
import {memo, useState} from "react";
import {TeachingSection} from "./components/TeachingSection.jsx";
import {DifferencesSection} from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";

export const technologies = [
    {name: 'Javascript', other: 'Язык программирования для веб-разработки'},
    {name: 'React', other: 'Библиотека для веб-разработки'},
]


export const App = memo(() => {


    return (
        <>
            <Header/>
            <IntroSection/>
            <main>
                <TeachingSection/>
                <DifferencesSection/>
            </main>
        </>
    )
})

