import Header from "./components/Header.jsx";
import {WantToLearn} from "./components/wantToLearn.jsx";
import {ways, differences} from "./data.js";
import Button from "./components/Button.jsx";
import {memo, useState} from "react";

export const technologies = [
    {name: 'Javascript', other: 'Язык программирования для веб-разработки'},
    {name: 'React', other: 'Библиотека для веб-разработки'},
]


export const App = memo(() => {

    const [content, setContent] = useState('');

    /* function AppClickHandler() {
         switch (differences) {
             case 'way':
                 return setContent(differences.way)
             case 'easy':
                 return setContent(differences.easy)
             case 'program':
                 return setContent(differences.program)
             default:
                 return setContent("Пусто")
         }
     }*/

    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Необходимо выучить</h3>
                    <WantToLearn ways={ways}/>
                </section>
                <section className="mt-4">
                    <h3>Чем мы отличаемся от других</h3>
                    <Button style={'mr-8 mt-4 bg-slate-200 hover:bg-slate-300 rounded-md w-50 '}
                            btnName={"Подход"}
                            callBack={() => setContent(differences.way)}/>
                    <Button style={'mr-8 bg-sky-200 hover:bg-sky-500 rounded-md w-50'}
                            btnName={"Доступность"}
                            callBack={() => setContent(differences.easy)}/>
                    <Button style={'mr-8 bg-sky-200 hover:bg-sky-500  rounded-md w-50'}
                            btnName={"Концентрация"}
                            callBack={() => setContent(differences.program)}/>
                </section>
                {content ? (
                    <p className="mt-4">{content}</p>
                ): (
                    <p className="mt-4">Нажми кнопку</p>
                )}
            </main>
        </div>
    )
})

