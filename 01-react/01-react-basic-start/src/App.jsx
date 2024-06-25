import Header from "./components/Header.jsx";
import {WantToLearn} from "./components/wantToLearn.jsx";

export const technologies = [
    {name: 'Javascript', other: 'Язык программирования для веб-разработки'},
    {name: 'React', other: 'Библиотека для веб-разработки'},
]


export default function App() {

    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Необходимо выучить</h3>
                    <ul>
                        <WantToLearn/>
                    </ul>

                </section>
            </main>
        </div>
    )
}

