import {useState} from "react";
import { FaEllipsisH, FaLinkedin, FaGithub} from "react-icons/fa";
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
            name: "Video Streaming Full Stack Development and back-end training ground",
            title: "Youtube DEMO",
            href: "https://youtu.be/9DAlimFigeI",
            description:
                "Encrypted passwords, uploads, comments, delete, " +
                "locally or in web servers, depending on availability and needs. Used Node.js for backend",
            tags: ["Full-Stack", "Security", "Realtime", "Frontend", "UI", "JavaScript"],
            icon: ""
        },
        {
            id: 2,
            name: "Social Impact Data Analytics Project",
            title: "Fair-Lending Disparity Analysis Tool",
            href: "/",
            description:
                "An interactive web tool that surfaces approval-rate disparities across demographic groups in loan application data. " +
                "Users filter by race, credit score band, zip code, and loan amount to detect potential disparate impact under the four-fifths rule (HMDA framework). " +
                "Built with Node.js, Express, MySQL, and Chart.js — synthetic loan data flows from Excel through an ETL pipeline into a queryable database, mirroring real fair-lending analyst workflows. " +
                "In active development, deploying April 29 2026, or 11:59PM April 28 2026 - Hiring manager please give me some time.",
            tags: [
                "Data Analytics",
                "Fair Lending",
                "HMDA",
                "SQL",
                "Node.js",
                "Express",
                "ETL",
                "Chart.js"
            ],
            icon: ""
        },
        {
            id: 3,
            name: "Deep Learning Neural Network - Still attending",
            title: "Training Neural Network model from scratch",
            href: "/",
            description:
                "A graduate CS course focused in deep learning, creating a fully connected neural network from scratch using Notebook," +
                " Pandas, TensorFlow, NumPy, Keras." +
                "Creating a vitality booster AI for final project, estimated completion date May 12th",
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
            id: 4,
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
            id: 5,
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
                        GATES
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
                                I'm a CS student at CSUS based in Sacramento and open to relocating in the next few months.
                                I started teaching myself to code at 17 with codeacademy, drawn to it as a way to channel my creativity — building things that feel as much like art as they do software.
                                JavaScript is my strongest language. This site is built with React and Vite, designed as a single-screen experience where everything is accessed through the buttons above (no scrolling).
                                I also work with Node.js, MySQL, Python, Java, and C++.
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
                                                    <strong>Artificial Intelligence:</strong> Deep Learning, Machine Learning (Graduate Coursework, CSS296S).
                                                    <br />
                                                    <strong>IT & Systems:</strong> PC Diagnostics, Hardware Repair, System Setup & Troubleshooting.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    I picked up Node.js, MySQL, database management, and deployment by building a full-stack site,
                                                    I like learning the bigger picture, how components, services, and data flows connect.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    I'm taking graduate coursework in AI and deep learning, all in Python. I've built neural networks from scratch and made my own models with TensorFlow, Keras, NumPy, and Pandas. I want to know how learning systems actually work inside, not just how to use them. Machine learning has helped me think in systems: breaking problems into inputs, testing, transforming, optimizing, then checking results.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    Right now I'm building out my portfolio with projects that show both engineering and design. I like taking an idea from rough to refined:
                                                </p>

                                                <p className="font-mono text-white/70 tracking-wide">
                                                    Sketches → UI → interactive design → backend → optimization → motion polish
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    I'm open to a lot: software engineering in JavaScript, C++, or Python, backend work, IT or technical services to learn how real infrastructure runs, or frontend roles focused on design systems and product UI.
                                                </p>

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    My goal is to bridge system-level thinking with interface-level precision, building UI that flows like particles.
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
                                <div className="relative transition-all duration-300 max-h-[60vh]">
                                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5" />

                                    <div className="relative p-6 rounded-2xl border border-white/20 bg-black/30
                    text-white shadow-lg flex flex-col gap-6
                    max-h-[50vh] overflow-y-auto
                    scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">

                                        <div className="space-y-3 text-white/80 leading-relaxed">
                                            <p>
                                                <strong className="text-white">Languages:</strong> JavaScript, TypeScript, Python, Java, C, C++, SQL, HTML5, CSS3
                                            </p>
                                            <p>
                                                <strong className="text-white">Frameworks:</strong> React, Node.js, Express, TensorFlow, Keras, NumPy, Pandas, jQuery, Bootstrap, OpenGL
                                            </p>
                                            <p>
                                                <strong className="text-white">Databases:</strong> MySQL, AWS Aurora, relational design, SQL querying
                                            </p>
                                            <p>
                                                <strong className="text-white">Cloud & DevOps:</strong> AWS EC2, Git, GitHub, branching, pull requests, code review
                                            </p>
                                            <p>
                                                <strong className="text-white">AI / ML:</strong> Neural networks, model training and evaluation, graduate Deep Learning coursework (CSS296S)
                                            </p>
                                            <p>
                                                <strong className="text-white">Practices:</strong> Agile (sprints, standups, retros), full SDLC, unit and integration testing, technical documentation, peer review
                                            </p>
                                            <p>
                                                <strong className="text-white">IT & Networking:</strong> Desktop support, ticketing, imaging and deployment, hardware troubleshooting, TCP/IP, 802.11, LAN/router config, asset management
                                            </p>
                                            <p>
                                                <strong className="text-white">Operating Systems:</strong> Windows (7, 8, 10, Server), macOS, Linux
                                            </p>
                                            <p>
                                                <strong className="text-white">Tools:</strong> VS Code, WebStorm, Jupyter, WordPress, Squarespace, Adobe Creative Cloud
                                            </p>
                                        </div>

                                        <div className="space-y-3 text-white/80 leading-relaxed pt-2 border-t border-white/10">
                                            <p className="text-white font-semibold pt-3">Things I've built</p>
                                            <p><strong className="text-white">UUU</strong>, patent-pending UI system, sole inventor</p>
                                            <p><strong className="text-white">Historical Map</strong>, deployed full-stack web app</p>
                                            <p><strong className="text-white">Mock YouTube</strong>, full-stack video platform</p>
                                            <p><strong className="text-white">MyDavis Educational Game</strong>, Agile team project</p>
                                            <p><strong className="text-white">ML Health App</strong>, neural networks, in progress</p>
                                            <p><strong className="text-white">This portfolio</strong>, React + TypeScript, no scroll</p>
                                            <p><strong className="text-white">Custom PC build</strong></p>
                                            <p><strong className="text-white">IT support</strong> for a 30-person office</p>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="button"
                                                onClick={() => setShowTLDRAbout(false)}
                                                className="inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold
                           uppercase tracking-widest hover:scale-90 active:scale-95 transition duration-150"
                                            >
                                                back
                                            </button>
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
