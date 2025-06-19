import Header from "./components/Header.jsx";
import {WantToLearn} from "./components/wantToLearn.jsx";
import {ways} from "./data.js";
import Button from "./components/Button.jsx";

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
                        <WantToLearn ways={ways}/>
                    </ul>

                </section>
                <section>
                    <h3>Чем мы отличаемся от других</h3>
                    <Button style={'bg-slate-200 hover:bg-slate-300 w-24 rounded-md'} btnName={"Good"}/>
                    <Button style={'bg-sky-200 hover:bg-sky-500 w-24 rounded-xl'} btnName={"Bad"}/>
                </section>
            </main>
        </div>
    )
}

