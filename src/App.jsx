import {useState} from "react";
import { FaEllipsisH, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";
import "./index.css";
import { useEffect, useRef } from "react";

export default function App() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // 0.5 = half speed
        }
    }, []);
    const[open, setOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showHub, setShowHub] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showTLDRAbout, setShowTLDRAbout] = useState(false);



    const projects = [
        {
            id: 1,
            name: "Video Streaming Full Stack Development",
            title: "City Clipped",
            href: "https://cityclipped.com",
            description:
                "Encrypted passwords, real-time chat, uploads, comments. I made all the back-end, I can store data " +
                "locally or in web servers, depending on availability and needs.",
            tags: ["Full-Stack", "Security", "Realtime", "Frontend", "UI", "JavaScript"],
            icon: ""
        },
        {
            id: 2,
            name: "Deep Learning Neural Network - Still drawing, Completion: 03/02/2026",
            title: "Training Neural Network model from scratch",
            href: "/",
            description:
                "A graduate CSC course focused in deep learning, creating a fully connected neural network from scratch using Notebook," +
                " Pandas, TensorFlow, NumPy, Keras.",
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
            href: "https://www.github.com/loyrZ",
            description:
                "Showcasing my react and tailwind skill",
            tags: [
                "React", "Tailwind CSS", "NodeJS", "HTML", "yml", "AWS S3", "Bucket"
            ],
            icon: ""
        },
        {
            id: 4,
            name: "Javascript Game - On Github",
            title: "Davis Discovery",
            href: "https://www.github.com/loyrZ",
            description:
                "CS Project for Mister Davis Green",
            tags: [
                "Javascript", "Art", "HTML", "Game", "CSS"
            ],
            icon: ""
        },
        {
            id: 5,
            name: "Coming Soon",
            title: "BLS",
            href: "/",
            description:
                "It's pretty cool",
            tags: [
                "Life", "Programmed", "Creation", "Masterpiece", "Art"
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
                            <button
                                onClick={() => {
                                    setShowAbout(false);
                                    setShowMore(false);
                                    setShowHub(false);
                                    setShowTLDRAbout(false);
                                }}
                                className="text-white uppercase hover:text-orange-400"
                            >
                                Home
                            </button>                                                <a
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


                        <button
                            onClick={() => {
                                setShowAbout(false);
                                setShowMore(false);
                                setShowHub(false);
                                setShowTLDRAbout(false);
                            }}
                            className="text-white uppercase hover:text-orange-400"
                        >
                            Home
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setShowAbout(true);
                                setShowHub(false);
                                setShowMore(false);
                                setShowTLDRAbout(false);
                            }}
                            className={`text-white uppercase hover:text-orange-400 active:scale-95 transition 
                             duration-150 ${showAbout ? "hidden" : ""} `}

                        >
                            About
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setShowAbout(false);
                                setShowHub(false);
                                setShowMore(false);
                                setShowTLDRAbout(true);
                            }}
                            className={`text-white uppercase hover:text-orange-400 active:scale-95 transition 
                             duration-150 ${showTLDRAbout ? "hidden" : ""} `}

                        >
                            Skills
                        </button>
                        <a
                            href="mailto:gatessubroto@gmail.com"
                            className="text-white uppercase hover:text-orange-400"
                        >
                            EMAIL
                        </a>
                        {/* Search Btn*/}

                    </div>


                </div>


</header>


            <main>
                <section
                    id="hero"
                    className={`relative w-full h-screen flex items-center justify-center overflow-hidden 
                    transition-all duration-1000
                        ${showHub || showAbout || showTLDRAbout? "pb-32" : "pb-0"}`} //transition for get started
                    >
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/image/wallpaper.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/40"></div>
                    {/* Hero Content */}
                    <div
                        className={`relative container mx-auto max-w-[1200px]
                            text-white md:p-8 xl:p-0
                            flex flex-col justify-center     /* <-- center vertically */
                            transition-all duration-300 ease-out
                            ${showHub || showAbout || showTLDRAbout ? "-translate-y-0" : "translate-y-0"}
                            text-center md:text-left
                           `}
                    >
                        <div>
                            <h1 className=" relative text-3xl md:text-[50px] font-black uppercase leading-tight tracking-wider">
                                {showTLDRAbout
                                    ? "SKILLS"
                                    : showAbout
                                        ? "ABOUT"
                                        : showHub
                                            ? "PROJECT HUB"
                                            : showMore
                                                ? "INTRODUCTION"
                                                : "HOME PAGE"}
                            </h1>

                            {showHub && (
                                <p className=" text-sm md:text-base font-medium tracking-wide text-gray-500">
                                    A selection of my work
                                </p>
                            )}
                        </div>


                        <div className="relative mb-8 max-w-2xl">
                            {!showMore && !showHub && !showAbout && !showTLDRAbout ? (
                                <button
                                    type="button"
                                    onClick={() => setShowMore(true)}
                                    className="flex items-center gap-2 text-sm uppercase text-gray-300 hover:text-white
                 transition-all duration-300
                 mx-auto md:mx-0"
                                >
                                    <FaEllipsisH size={20} />
                                    read more
                                </button>
                            ) : (
                                <> </> // or null
                            )}

                            {/* TEXT */}
                            <div
                                className={`overflow-y-scroll overflow-x-hidden text-lg text-white leading-relaxed 
                                transition-all duration-300 ${showMore && !showHub
                                    ? "opacity-100 max-h-80 max-w-2xl translate-y-0"
                                    : "opacity-0 max-h-np0 -translate-y-2 pointer-events-none"}
                                     : "opacity-0 max-h-0 -translate-y-2"}`}
                            >
                                This site, and all my projects were programmed by myself. I am still drawing.
                                <br /><br />
                                I started my journey with video games. I took things apart just to understand how they
                                worked, and was never able to build them back together.
                                <br /><br />
                                I was more drawn to
                                art and graphic design, but eventually, I encouraged myself to code when I was 17,
                                but this time I would combine it with my creativity and computer science.
                                <br /><br />
                                To keep pace with a rapidly evolving world, I began studying deep learning (
                                I have eyes and I can't even see whats going on).
                                To nurture my creative side, I work with JavaScript and React, designing
                                interactive systems that are functional and expressive. This led into needing to learn
                                back-end, nodeJS, mySQL, and learning how to host it on the web, as well as in my own
                                local servers at home.
                                <br /><br />
                                I am still catching up in many ways. The field moves exponentially fast, and sometimes
                                I feel the pressure of not measuring up. But progress matters more than doubt,
                                so I keep learning, and I keep building. Slow is smooth, and smooth is fast.
                                <br /><br />
                                Javascript? My unlimited tomato.
                                </div>
                            {/* READ LESS BUTTON */}
                            <button
                                type="button"
                                onClick={() => setShowMore(false)}
                                className={`mt-3 text-sm uppercase text-gray-300 hover:text-white transition-all 
                                duration-300
                                    ${!showMore || showHub
                                    ? "opacity-0 pointer-events-none max-h-0 -translate-y-2 transition-all duration-300"
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
                            className={`w-fit mx-auto md:mx-0 inline-block py-3 px-6 bg-orange-400 rounded-full
                             text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-95 transition 
                             duration-150 ${showHub || showAbout || showTLDRAbout? "hidden" : ""}`}
                        >
                            projects
                        </button>

                        {showHub && (
                            <section
                                className="-mt-10 w-full max-w-6xl mx-auto px-8 py-5 rounded-2xl
                                             bg-white/5 backdrop-blur-md border border-white/10
                                             text-sm text-white leading-relaxed
                                             transition duration-300 ease-out transform-gpu z-40">
                                <div className="max-h-[48vh] overflow-y-auto overflow-x-hidden pr-9 space-y-6">
                                    {projects.map((project) => (
                                        <div key={project.id} className="p-6 bg-black/40 text-white rounded-2xl shadow-lg flex flex-col gap-4">
                                            <h2 className="text-xl font-bold">Project {project.id}: {project.name}</h2>
                                            <div className="text-4xl">{project.icon}</div>
                                            <h3 className="text-lg font-semibold text-white/80">{project.title}</h3>
                                            <p className="text-sm text-white/70">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="text-xs bg-orange-400/20
                                                    text-orange-200 px-3 py-1 rounded-full">{tag}</span>))}
                                            </div>
                                            <a href={project.href} className="mt-2 text-sm font-bold text-orange-300 hover:underline">View Project →</a>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => setShowHub(false)}
                                        className="inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold
                                         uppercase tracking-widest hover:scale-90 active:scale-95 transition duration-150"
                                    >
                                        back
                                    </button>
                                </div>
                            </section>
                        )}

                        {/* ABOUT PANEL (mounted only when showAbout === true) */}
                        {showAbout && (
                            <section
                                className={`-mt-10 w-full max-w-6xl mx-auto px-8 py-5 rounded-2xl
                                    bg-white/5 backdrop-blur-md border border-white/10 text-white leading-relaxed
                                    transform-gpu transition-[opacity,transform] duration-500 ease-out z-40
                                    ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
                                  `}
                            >
                                <div className="relative transition-all duration-300 max-h-[258vh]">
                                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5" />






                                        <div className="space-y-4">

                                            <div
                                                className="space-y-3 text-white/70 leading-relaxed
                                                      relative p-6 rounded-2xl border border-white/20 bg-black/10
                                                      text-white md:flex-row gap-6 items-start
                                                      max-h-[40vh] overflow-y-auto overflow-x-hidden"
                                                                                                >

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    <strong>Software Development:</strong> Full-Stack JavaScript (Node.js, Express, MySQL), Frontend Development, UI Implementation.
                                                    <br />
                                                    <strong>Artificial Intelligence:</strong> Deep Learning, Machine Learning (Graduate Coursework – CSS296S).
                                                    <br />
                                                    <strong>IT & Systems:</strong> PC Diagnostics, Hardware Repair, System Setup & Troubleshooting.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    I have experience with Node.js, MySQL, database management, and
                                                    deployment workflows by building a full-stack website in cityclipped.com - I’m
                                                    motivated by learning the bigger picture, how components,
                                                    services, and data flows connect.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    I am advancing my knowledge in artificial
                                                    intelligence and deep learning through graduate-level coursework
                                                    in Python. I’ve built neural networks from scratch and developed
                                                    my own models using Tensorflow, Karas, Numpy, and Pandas.
                                                    I seek ways to strengthen my understanding of how learning systems
                                                    function internally. Working with machine learning has sharpened my
                                                    systems thinking, breaking problems down into inputs, experimenting,
                                                    transforming, optimizing, and measuring outcomes.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    Right now, I’m expanding my portfolio with projects that reflect
                                                    both engineering discipline and design awareness. I enjoy taking
                                                    an idea from concept to refinement:

                                                </p>

                                                <p>
                                                    Sketches → UI → interactive design →
                                                    backend → optimization  → motion polish
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    Professionally, I am open to IT support or technical services
                                                    roles to deepen my real-world understanding of operational
                                                    systems and infrastructure, while also pursuing frontend
                                                    engineering roles focused on design systems and product UI.
                                                    My goal is to bridge system-level understanding with
                                                    interface-level precision, building digital experiences
                                                    that are both architecturally sound and visually refined.
                                                </p>
                                                <p className="text white/80 leading-relaxed">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowAbout(false)}
                                                        className="inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold
                                         uppercase tracking-widest hover:scale-90 active:scale-95 transition duration-150"
                                                    >
                                                        back
                                                    </button>
                                                </p>
                                            </div>


                                    </div>
                                </div>
                            </section>
                        )}

                        {showTLDRAbout && (
                            <section
                                className={`-mt-10 w-full max-w-6xl mx-auto px-8 py-5 rounded-2xl
                                    bg-white/5 backdrop-blur-md border border-white/10 text-white leading-relaxed
                                    transform-gpu transition-[opacity,transform] duration-500 ease-out z-40
                                    
                                  `}
                            >
                                <div className="relative transition-all duration-300 max-h-[258vh]">
                                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5" />

                                    <div className="relative p-6 rounded-2xl border border-white/20 bg-black/30
                                                      text-white shadow-lg flex flex-col md:flex-row gap-6
                                                      items-center justify-center md:items-center">




                                        <div className="space-y-4">



                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    <strong>Software Development:</strong> Full-Stack JavaScript (Node.js, Express, MySQL), Frontend Development,
                                                    Backend development, UI Implementation.
                                                    <br />
                                                    <strong>Artificial Intelligence:</strong> Deep Learning, Machine Learning (Graduate Coursework – CSS296S).
                                                    <br />
                                                    <strong>IT & Systems:</strong> PC Diagnostics, Hardware Repair, System Setup & Troubleshooting.
                                                    <br/>
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowTLDRAbout(false)}
                                                        className="inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold
                                         uppercase tracking-widest hover:scale-90 active:scale-95 transition duration-150"
                                                    >
                                                        back
                                                    </button>
                                                </p>


                                        </div>

                                    </div>
                                </div>

                            </section>
                        )}
                    </div>


                    {/* Social Links */}
                    <div className={"absolute bottom-4 right-1/2 translate-x-1/2 md:right-4 md:bottom-1/2 md:translate-x-0 md:translate-y-1/2"}>
                        <div className="text-white p-4 flex md:flex-col gap-8 items-center text-2xl">

                        <a href="https://github.com/loyrZ" target="_blank" rel="noreferrer">
                                <FaGithub size={44} className="hover:text-white hover:scale-150 transition" />
                            </a>

                            <a href="https://www.instagram.com/gateshro" target="_blank"
                               rel="noreferrer">
                                <FaInstagram size={44} className="hover:text-white hover:scale-150 transition" />
                            </a>

                            <a href="https://www.linkedin.com/in/gates-subroto-4367772aa" target="_blank" rel="noreferrer">
                                <FaLinkedin size={44} className="hover:text-white hover:scale-150 transition" />
                            </a>

                        </div>
                    </div>



                </section>
            </main>

        </div>


    )

}
