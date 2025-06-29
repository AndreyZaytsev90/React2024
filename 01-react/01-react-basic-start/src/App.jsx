import Header from "./components/Header.jsx";
import {memo, useState} from "react";
import {TeachingSection} from "./components/TeachingSection.jsx";
import {DifferencesSection} from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedBackSection from "./components/FeedBackSection.jsx";

export const technologies = [
    {name: 'Javascript', other: 'Язык программирования для веб-разработки'},
    {name: 'React', other: 'Библиотека для веб-разработки'},
]


export const App = memo(() => {

    const [isMainSection, setIsMainSection] = useState(false)

    return (
        <>
            <Header/>
            <IntroSection/>
            <main>
                <TabsSection setIsMainSection={setIsMainSection}/>
                {isMainSection
                    ? <>
                        <TeachingSection/>
                        <DifferencesSection/>
                    </>
                    : <FeedBackSection/>}
            </main>

        </>
    )
})

