import { Progress } from "@/components/ui/progress"
import spring from '../assets/icon-spring.svg';
import html from '../assets/icon-html.svg';
import css from '../assets/icon-css.svg';
import js from '../assets/icon-js.png';
import ts from '../assets/icon-ts.png';
import java from '../assets/icon-java.svg';
import php from '../assets/icon-php.svg';
import angular from '../assets/icon-angular.png';
import react from '../assets/icon-react.svg';
import next from '../assets/icon-nextjs.svg';
import ci from '../assets/icon-ci.svg';
import mysql from '../assets/icon-mysql.png';
import pg from '../assets/icon-postgre.png';

export function Tecnologias(){
    return (
        <div className="bg-black">
            <div id="tecnologias" className="container mx-auto px-2 md:px-10 py-28">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4'>
                    <div id='bg-tecnologias'></div>
                    <div className="flex flex-col gap-6 text-slate-300 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Tecnologias</h1>
                        <div id="conhecimentos" className="flex flex-col gap-2 mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Linguagens <small className="text-zinc-400">(7)</small></h2>
                            <div className="flex items-center gap-2">
                                <img src={html} alt="html" />
                                <span className="w-[130px]">HTML</span>
                                <Progress value={100} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={css} alt="css" />
                                <span className="w-[130px]">CSS</span>
                                <Progress value={100} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={js} alt="js" />
                                <span className="w-[130px]">JavaScript</span>
                                <Progress value={90} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={ts} alt="ts" />
                                <span className="w-[130px]">TypeScript</span>
                                <Progress value={80} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={java} alt="java" />
                                <span className="w-[130px]">Java</span>
                                <Progress value={70} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={php} alt="php" />
                                <span className="w-[130px]">PHP</span>
                                <Progress value={60} />
                            </div>
                        </div>

                        <div id="conhecimentos" className="flex flex-col gap-2 mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Ferramentas e Bibliotecas <small className="text-zinc-400">(5)</small></h2>
                            <div className="flex items-center gap-2">
                                <img src={angular} alt="angular" />
                                <span className="w-[130px]">Angular</span>
                                <Progress className="" value={90} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={spring} alt="spring" />
                                <span className="w-[130px]">Spring</span>
                                <Progress value={80} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={react} alt="react" />
                                <span className="w-[130px]">React</span>
                                <Progress value={60} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={next} className="invert" alt="next" />
                                <span className="w-[130px]">NextJS</span>
                                <Progress value={50} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={ci} alt="ci" />
                                <span className="w-[130px]">CodeIgniter</span>
                                <Progress value={50} />
                            </div>
                        </div>

                        <div id="conhecimentos" className="flex flex-col gap-2 mb-8">
                            <h2 className="text-2xl font-semibold mb-2">Banco de dados <small className="text-zinc-400">(2)</small></h2>
                            <div className="flex items-center gap-2">
                                <img src={mysql} alt="mysql" />
                                <span className="w-[130px]">MySQL</span>
                                <Progress className="" value={90} />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={pg} alt="pg" />
                                <span className="w-[130px]">PostgreSQL</span>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div id="conhecimentos" className="flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold mb-2">Outros <small className="text-zinc-400">(9)</small></h2>
                            <p>JQuery, PrimeNG, Bootstrap, TailwindCSS, Vite, MaterializeCSS, Figma, Hibernate, Postman</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}