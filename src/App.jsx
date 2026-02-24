import {Search} from 'lucide-react'
import {useState} from "react";
import { FaEllipsisH, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import "./index.css";


export default function App() {
    const[showSearch, setShowSearch] = useState(false);
    const[open, setOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showHub, setShowHub] = useState(false);
    const toggleSearch = () => {

        setShowSearch(!showSearch);
    }

    const projects = [
        {
            id: 1,
            name: "City Clips",
            title: "Video Streaming Full Stack Development",
            href: "/project1.html",
            description:
                "Encrypted passwords, real-time chat, uploads, comments. - Will be uploaded by 02/26/2026",
            tags: ["Full-Stack", "Security", "Realtime", "Frontend", "UI", "JavaScript"],
            icon: ""
        },
        {
            id: 2,
            name: "Deep Learning",
            title: "Training Neural Network model from scratch",
            href: "/project2.html",
            description:
                "A graduate CSC course focused in deep learning, creating a neural network from scratch using Notebook, Pandas, TensorFlow, NumPy, Keras. Will be uploaded by 02/26/2026",
            tags: [
                "Deep Learning",
                "Neural Networks",
                "Machine Learning",
                "Artificial Intelligence",
                "Supervised Learning"
            ],
            icon: ""
        },
        {
            id: 3,
            name: "Portfolio",
            title: "React and Tailwind App Portfolio",
            href: "/",
            description:
                "Showcasing my react and tailwind skill",
            tags: [
                "React", "Tailwind CSS", "NodeJS", "HTML", "yml", "AWS S3", "Bucket"
            ],
            icon: ""
        }
    ];

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
                    className={`relative w-full h-screen
                                    bg-[url('/image/hero.jpg')]
                                    bg-center bg-cover bg-no-repeat
                                    flex items-end justify-center
                                    transition-all duration-500
                                    ${showHub ? "pb-32" : "pb-0"}`}>
                    <div className="absolute inset-0 bg-black/50" />
                    {/* Hero Content */}
                    <div
                        className={`relative z-10 container mx-auto max-w-[1200px]
                                        text-white md:p-8 xl:p-0
                                        flex flex-col
                                        transition-all duration-300 ease-out
                                        ${showHub ? "-translate-y-0" : "translate-y-0"}
                                        text-center md:text-left
                                      `}>
                        <h1 className="text-3xl md:text-[50px] font-black uppercase leading-tight tracking-wider mb-6">
                            {showHub
                                ? "PROJECT HUB"
                                : showMore
                                    ? "INTRODUCTION"
                                    : "HOME PAGE"}
                            <br />
                        </h1>

                        <div className="relative mb-8 max-w-md">
                            {/* BUTTON */}
                            <button
                                type="button"
                                onClick={() => setShowMore(true)}
                                className={`flex items-center gap-2 text-sm uppercase text-gray-300 hover:text-white transition-all duration-300
    ${showMore || showHub
                                    ? "opacity-0 pointer-events-none max-h-0 -translate-y-2"
                                    : "opacity-100 max-h-10 translate-y-0"
                                }`}
                            >
                                <FaEllipsisH size={20} />
                                read more
                            </button>

                            {/* TEXT */}
                            <div
                                className={`overflow-y-auto overflow-x-hidden text-sm text-white leading-relaxed 
                                transition-all duration-300 ${showMore && !showHub
                                    ? "opacity-100 max-h-80 translate-y-0"
                                    : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"}
                                     : "opacity-0 max-h-0 -translate-y-2"}`}
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
                ${!showMore || showHub
                                    ? "opacity-0 pointer-events-none max-h-0 -translate-y-2"
                                    : "opacity-100 max-h-10 translate-y-0"
                                }
        `}
                            >
                                read less
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowHub(true)}
                            className={`w-fit mx-auto md:mx-0 inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-95 transition duration-150 ${showHub ? "hidden" : ""}`}
                        >
                            get started
                        </button>

                        <section
                            className={`mt-10 w-full max-w-6xl mx-auto
              px-8 py-5 rounded-2xl
              bg-black/20 backdrop-blur-md
              border border-white/10
              text-sm text-white leading-relaxed
              transition duration-300 ease-out transform-gpu
              ${showHub
                                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
                            }`}
                        >
                            {/* Scroll container + spacing between projects */}
                            <div className="max-h-96 overflow-y-auto overflow-x-hidden pr-2 space-y-6">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="p-6 bg-black/30 text-white rounded-2xl shadow-lg flex flex-col gap-4"
                                    >
                                        <h2 className="text-xl font-bold">
                                            Project {project.id}: {project.name}
                                        </h2>

                                        <div className="text-4xl">{project.icon}</div>

                                        <h3 className="text-lg font-semibold text-white/80">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-white/70">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-orange-400/20 text-orange-200 px-3 py-1 rounded-full"
                                                >
              {tag}
            </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.href}
                                            className="mt-2 text-sm font-bold text-orange-300 hover:underline"
                                        >
                                            View Project →
                                        </a>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setShowHub(false)}
                                    className="inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-90 active:scale-95 transition duration-150"
                                >
                                    back
                                </button>
                            </div>
                        </section>
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
