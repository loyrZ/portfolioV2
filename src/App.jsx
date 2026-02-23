import {Search} from 'lucide-react'
import {useState} from "react";
import { FaEllipsisH, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import "./index.css";


export default function App() {
    const[showSearch, setShowSearch] = useState(false);
    const[open, setOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    }

    return (
        <div className="min-w-[300px] h-screen">
            {/* Navbar */}
            <header className="absolute w-full p-6 z-10">
                <div
                    className="max-w-[3000px] mx-auto flex items-center
                    justify-between text-white">

                    {/* Logo */}
                    <a className="text-2xl" href="#">
                        GATES <strong>SUBROTO</strong>
                    </a>





                    {/* Menu Btn */}
                    <div
                        id="menu-btn"
                        className={`fixed top-6 right-6 z-50 menu-btn md:hidden ${open ? "open" : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="menu-btn-top" />
                        <span className="menu-btn-middle" />
                        <span className="menu-btn-bottom" />
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <div
                            id="mobile-menu"
                            className={`absolute left-6 right-6 flex flex-col items-center gap-6 mt-10 p-6
                                          font-bold bg-white/30 backdrop-blur rounded-lg
                                          transition-all duration-300
                                          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                                        `}
                        >
                            <a href="#" className="text-white uppercase hover:text-orange-400">Home</a>
                            <a
                                href="mailto:gatessubroto@gmail.com"
                                className="text-white uppercase hover:text-orange-400"
                            >
                                Contact
                            </a>
                            <div className="w-full p-3 bg-white rounded-full">
                                <input
                                    type="text"
                                    placeholder="Nothing to see here"
                                    className="focus:outline-none text-black w-full"
                                />
                            </div>
                        </div>
                    </div>








                    {/* Links */}
                    <div className="relative hidden md:flex gap-6 items-center">{/* Testimonials */}
                        <div className="absolute bottom-4 w-full h-36 flex">
                            {/* Arrows (placeholder) */}
                            <div className="w-40 text-white flex items-center justify-center">
                                {/* arrows go here */}
                            </div>

                        </div>

                        <a href="#" className=" text-white uppercase
                        hover:text-orange-400"
                        >Home</a>

                        <a
                            href="mailto:gatessubroto@gmail.com"
                            className="text-white uppercase hover:text-orange-400"
                        >
                            Contact
                        </a>
                        {/* Search Btn*/}
                        <div
                            id="search-btn"
                            className="flex justify-center items-center cursor-pointer"
                            onClick={toggleSearch} // click toggle search box
                        >
                            <Search className = "w-6 h-6 text-white hover:text-orange-400" />
                        </div>

                        {/*Search Box*/}
                        <div id="search-box"
                             className={`absolute top-10 right-0 transition-all duration-200 ease-in-out transform ${
                                 showSearch ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                             }`}
                        >
                            <div id="input-box" className = "p-3 bg-white rounded-full shadow-lg">
                                <input
                                    type="text"
                                    placeholder="Nothing to see here"
                                    className ="focus:outline-none text-black"
                                />
                            </div>
                        </div>
                    </div>


                </div>


</header>


            <main>
                <section
                    id="hero"
                    className="relative w-full h-screen
                     bg-[url('/image/hero.jpg')]
                     bg-black/50 bg-blend-multiply
                     bg-center bg-cover bg-no-repeat flex items-center"
                >
                    {/* Hero Content */}
                    <div className="container mx-auto max-w-[1200px] text-white md:p-8 xl:p-0 items-center text-center md:text-left">
                        <h1 className="text-3xl md:text-[50px] font-light leading-tight tracking-wider mb-6">
                            Home Page <br />
                        </h1>

                        <div className="relative mb-8 max-w-md">
                            {/* BUTTON */}
                            <button
                                type="button"
                                onClick={() => setShowMore(true)}
                                className={`flex items-center gap-2 text-sm uppercase text-gray-300 hover:text-white transition-all duration-300
  ${showMore
                                    ? "opacity-0 pointer-events-none max-h-0"
                                    : "opacity-100 max-h-10 mx-auto md:mx-0"}
  `}
                            >
                                <FaEllipsisH size={20} />
                                read more
                            </button>

                            {/* TEXT */}
                            <div
                                className={`overflow-y-auto overflow-x-hidden text-sm text-white leading-relaxed 
                                transition-all duration-300 ${showMore ? "opacity-100 max-h-80 " +
                                    "translate-y-0" : "opacity-0 max-h-0 -translate-y-2"}`}
                            >
                                It started with video games. That curiosity evolved into hardware tinkering,
                                taking things apart just to understand how they worked. I also got
                                to build a PC my dad funded me and my brothers for.
                                He gave each of us $1000 to build, the condition was that we had to build it ourselves.
                                <br /><br />
                                I tried programming at thirteen and didn’t like it at first. I was more drawn to
                                art and graphic design. I then was encouraged to give coding another chance, and a few
                                years later something finally clicked: I didn’t have to choose between creativity and
                                computer science. I could combine them.
                                <br /><br />
                                To keep pace with a rapidly evolving world, I began studying deep learning,
                                even building a neural network from scratch to understand the fundamentals.
                                To nurture my creative side, I work with JavaScript and React, designing
                                interactive systems that are both functional and expressive.
                                <br /><br />
                                I am still catching up in many ways. The field moves exponentially fast, and sometimes
                                I feel the pressure of not measuring up. But progress matters more than doubt,
                                so I keep building.
                                <br /><br />
                                In JavaScript, I enjoy crafting elegant abstractions and scalable systems, sometimes
                                using modern tools like React, JSX, Tailwind, CSS, Aurora MySQL, for backend I use
                                node.js, and Java when academia requires it. My most challenging task so far has been
                                deep learning with Python, where
                                mathematics, engineering, and creativity converge, not in the way I once expected,
                                but in a way that starts to feel natural. The multitude of numbers on the screen no
                                longer phases me; I have grown comfortable with abstract equations.
                            </div>
                            {/* READ LESS BUTTON */}
                            <button
                                type="button"
                                onClick={() => setShowMore(false)}
                                className={`mt-3 text-sm uppercase text-gray-300 hover:text-white transition-all duration-300
            ${showMore ? "opacity-100 max-h-10" : "opacity-0 pointer-events-none max-h-0"}
        `}
                            >
                                read less
                            </button>
                        </div>


                        <a
                            href="../public/projecthub.html"
                            className="inline-block mt-6 py-3 px-6 bg-orange-400 rounded-full text-sm
                                       font-bold uppercase tracking-widest hover:scale-110 active:scale-95 transition duration-150"
                        >
                            get started
                        </a>
                    </div>


                    {/* Social Links */}
                    <div className={"absolute bottom-4 right-1/2 translate-x-1/2 md:right-4 md:bottom-1/2 md:translate-x-0 md:translate-y-1/2"}>
                        <div className="text-white p-4 flex md:flex-col gap-8 items-center text-2xl">

                        <a href="https://github.com/loyrZ" target="_blank" rel="noreferrer">
                                <FaGithub size={30} className="hover:text-white hover:scale-150 transition" />
                            </a>

                            <a href="https://www.instagram.com/gateshro" target="_blank"
                               rel="noreferrer">
                                <FaInstagram size={30} className="hover:text-white hover:scale-150 transition" />
                            </a>

                            <a href="https://www.linkedin.com/in/gates-subroto-4367772aa" target="_blank" rel="noreferrer">
                                <FaLinkedin size={30} className="hover:text-white hover:scale-150 transition" />
                            </a>

                        </div>
                    </div>



                </section>
            </main>

        </div>

    )

}