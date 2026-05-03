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
    const [hoveredProject, setHoveredProject] = useState(null);
    const [expandedProjects, setExpandedProjects] = useState({});
    const projectRefs = useRef({});


    const projects = [
        {
            id: 1,
            name: "Social Impact Data Analytics Project",
            title: "Fair-Lending Disparity Analysis Tool",
            href: "https://travis-cu-fair-lending-production.up.railway.app",
            description:
                "An interactive analytics platform that surfaces lending patterns across demographic groups in real Travis Credit Union 2024 HMDA loan applications, sourced directly from the CFPB. " +
                "Users slice 1,443 real loan applications across race, ethnicity, age, sex, loan purpose, county, and loan product type — aggregating by count, approval rate, average income, loan amount, interest rate, or LTV. " +
                "Click any bar to drill down into outcome breakdowns (accepted vs denied), income and loan-amount distributions split by outcome, geographic breakdowns, and individual application records. " +
                "A demographic comparison view pits the applicant pool against U.S. Census ACS resident demographics, surfacing representation gaps at the county and census-tract level. " +
                "An interactive Leaflet map visualizes lending activity across Travis CU's service area with branch locations and county-level choropleth shading. " +
                "A feedforward neural network trained in TensorFlow.js predicts denial probability with a what-if UI and counterfactual analysis — showing how denial probability shifts when a single protected-class feature changes, mirroring how regulators probe for disparate impact. " +
                "ETL pipeline ingests CFPB Modified LAR data and ACS 5-year estimates, decodes HMDA codes, and loads into a denormalized analytical schema. Deployed April 2026.",
            tags: [
                "Data Analytics",
                "Fair Lending",
                "HMDA",
                "Deep Learning",
                "TensorFlow.js",
                "SQL",
                "Node.js",
                "Express",
                "ETL",
                "Chart.js",
                "Leaflet",
                "Census ACS"
            ],
            icon: ""
        },
        {
            id: 2,
            name: "Multimodal Deep Learning for Nutrition - Report Preview available - Code in progress",
            title: "Beyond Calories: A Multimodal Deep Learning Comparison for Nutritional Health Prediction",
            href: "/projects/wellbeing-predictor.html",
            description:
                "Graduate deep learning final project (CSC 296S, Spring 2026). Predicts calorie content, macronutrient " +
                "values (fat, carbs, protein), and a 3-class health rating (healthy, moderate, indulgent) from food " +
                "images and ingredient text using the Nutrition5k dataset from Google Research (~5,000 cafeteria dishes). " +
                "Compares three architectures from distinct deep learning families: a fully-connected baseline, a CNN-only " +
                "model using ResNet50 pretrained on ImageNet, and a multimodal fusion model combining ResNet50 with " +
                "DistilBERT for ingredient text and a small MLP for synthetic lifestyle features. Multimodal fusion wins " +
                "on most metrics (65% accuracy, 0.64 R-squared on calorie regression), with a clean negative result on " +
                "carbohydrate regression illustrating that redundant modalities can hurt fusion performance. Evaluation " +
                "includes RMSE/MAE/R-squared per nutrient, accuracy, macro-F1, per-class precision/recall, confusion " +
                "matrices, lifted charts, and one-vs-rest ROC curves. Estimated completion May 12th.",
            tags: [
                "Deep Learning",
                "Multimodal Learning",
                "Transfer Learning",
                "CNN",
                "Transformers",
                "Computer Vision",
                "ResNet50",
                "DistilBERT",
                "TensorFlow",
                "Keras"
            ],
            icon: ""
        },
        {
            id: 3,
            name: "Historical Map - Will Publish before May 4th at 9pm PST",
            title: "Historical Map of California",
            href: "/",
            description:
                "A full-stack project built to help visualize historical events across California. Users can filter and explore events by year, view their geographic distribution on an interactive map, and contribute new data through user input. The application highlights patterns and concentrations of historical activity while providing an intuitive way to navigate both time and location.",
            tags: [
                "SQL",
                "Node.js",
                "Express",
                "JavaScript",
                "HTML5",
                "CSS"
            ],
            icon: ""
        },
        {
            id: 4,
            name: "Full-stack video platform, backend training ground - Will publish Mid to End of May",
            title: "YouTube Demo",
            href: "https://youtu.be/9DAlimFigeI",
            description:
                "Full-stack video platform with encrypted passwords, uploads, comments, and delete functionality. " +
                "Built with Node.js on the backend. Runs locally or on a web server. " +
                "Deploying early May with limited upload capacity. Source code for the latest version is private.",
            tags: ["Full-Stack", "Node.js", "Auth", "JavaScript", "UI"],
            icon: ""
        },
        {
            id: 5,
            name: "Portfolio",
            title: "React and Tailwind App Portfolio",
            href: "https://www.github.com/loyrZ",
            description:
                "A showcase of my React and Tailwind CSS expertise, this portfolio represents both my technical " +
                "skill and creative approach to frontend development. If you’re interested in having a custom portfolio" +
                " built, feel free to reach out at gatessubroto@gmail.com. I’m happy to create one for you at no cost," +
                " with the opportunity to feature the project in my own portfolio.",
            tags: [
                "React", "Tailwind CSS", "NodeJS", "HTML", "yml", "AWS S3", "Bucket"
            ],
            icon: ""
        },
        {
            id: 6,
            name: "Javascript Game - On Github",
            title: "Davis Discovery",
            href: "https://www.github.com/loyrZ",
            description:
                "An educational JavaScript game built from scratch without frameworks, designed for 4th–5th graders to promote environmental awareness. The project features a custom scene system with teleportation between scenes, manual asset preloading, and canvas-based rendering using ctx.draw. Gameplay encourages safe and respectful interaction with nature through mechanics like avoiding wildlife, keeping a distance from animals, and properly managing trash.",
            tags: [
                "Javascript", "Art", "HTML", "Game", "CSS"
            ],
            icon: ""
        },
        {
            id: 7,
            name: "Smart Chatbot - In Progress",
            title: "Claude-Powered Chatbot with React + Express",
            href: "/",
            description:
                "Lightweight full-stack chatbot built on Anthropic's Claude API. React + Vite frontend talks to a Node.js + " +
                "Express backend that handles API calls and keeps secrets server-side. Stateless v1 design — each message is a " +
                "fresh API call, no database required. Deployed on Render/Vercel.",
            tags: [
                "React",
                "Vite",
                "Node.js",
                "Express",
                "Claude API",
                "Anthropic",
                "Full Stack",
                "JavaScript"
            ],
            icon: ""
        },
        {
            id: 8,
            name: "DentalBot - In Progress",
            title: "AI Dental Insurance Coverage Assistant",
            href: "/",
            description:
                "Full-stack proof-of-concept that answers plain-English dental insurance questions (\"Is a root canal " +
                "covered? What's my deductible?\") using an LLM grounded in a plan document. Java + Spring Boot REST " +
                "backend exposes typed JSON endpoints; Angular frontend provides a chat UI consuming the backend via " +
                "HttpClient and Observables. OpenAI integration uses system-prompt knowledge injection from a plan " +
                "document. Containerized with Docker (multi-stage Angular build, separate Spring Boot service) and " +
                "orchestrated with docker-compose. Applied the factory pattern for response formatting and OOP design " +
                "across services.",
            tags: [
                "Java",
                "Spring Boot",
                "REST API",
                "Angular",
                "TypeScript",
                "OpenAI API",
                "Docker",
                "docker-compose",
                "Nginx",
                "Design Patterns",
                "Full Stack"
            ],
            icon: ""
        },
        {
            id: "335355",
            name: "Unified Ubiqutious Utility",
            title: "Will be published at its own website within 8 months",
            href: "/",
            description:
                "Full-stack proof-of-concept that answers plain-English dental insurance questions (\"Is a root canal " +
                "covered? What's my deductible?\") using an LLM grounded in a plan document. Java + Spring Boot REST " +
                "backend exposes typed JSON endpoints; Angular frontend provides a chat UI consuming the backend via " +
                "HttpClient and Observables. OpenAI integration uses system-prompt knowledge injection from a plan " +
                "document. Containerized with Docker (multi-stage Angular build, separate Spring Boot service) and " +
                "orchestrated with docker-compose. Applied the factory pattern for response formatting and OOP design " +
                "across services.",
            tags: [
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢀⣠⢤⡤⡤⠤⣤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢾⣥⢻⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡱⣆⠤⡁⢎⡡⢵⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠆⣾⠸⣿⡎⢿⣿⣶⡀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡿⢘⣠⠞⡧⣙⠤⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⢸⢿⡇⣿⣿⡘⣿⣿⣿⡀⠀⠀⠀⠀⢠⣼⣿⣿⣿⣿⡿⣃⣿⠣⢤⣤⢛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢥⣃⣏⣷⡜⣿⣧⠹⣿⣿⣿⡄⠀⠀⣴⣿⣿⣿⣿⣿⣯⢾⣿⣿⣾⡿⠶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠵⣣⣟⣼⣷⣻⠸⣿⣦⠹⣿⣿⣿⡄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠭⣘⠻⣿⣧⣿⣾⣧⠘⣿⡿⣹⣽⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⡧⣼⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⠤⡤⢤⠶⡤⣆⣤⡀⡄⠀⠀⠀⠈⠐⠃⢈⠻⢿⣿⣿⡇⠘⡍⡷⢘⣿⣌⡄⠀⣼⣿⣿⣿⣿⣿⡗⠺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠰⠀⣀⠦⣑⢦⡙⡲⢍⡶⣋⠶⣡⠞⡝⢯⢷⣞⣶⢠⠀⠀⠀⠠⠀⠙⢿⡝⡄⡇⢱⢸⡏⢸⠆⢸⡟⣿⣿⣿⣿⣿⣟⠥⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠆⠀⠌⡄⡙⡘⠎⢷⡩⢏⠶⣩⠳⣡⠛⢬⢣⡍⠺⢞⢇⣾⠿⠆⠀⢎⡀⡄⠙⢡⣎⠞⡘⢿⡐⢀⡟⣲⢻⣿⣿⣿⣿⣏⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠈⠀⢂⠌⡑⢹⣛⢦⠹⢜⡲⡡⠜⡤⢃⠀⠁⠺⢑⢪⣌⢋⣄⠀⠡⠈⠳⣦⠅⠀⠻⡆⠇⣾⡄⢸⠘⢰⣼⣿⣿⣿⡟⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠠⠂⠍⢢⠘⢎⠵⢢⠔⣉⡘⠔⠫⠜⢦⠠⡄⢌⠂⠳⣎⠷⣄⡀⠀⠀⠙⣆⠐⣿⡆⣿⠀⡧⠰⣟⣿⣻⣿⡟⠑⠀⢀⡀⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⡄⠉⠎⡔⢃⠎⡱⠌⣙⠒⡆⣆⠀⠈⠃⠙⠀⠙⢼⣉⠷⢦⡐⠢⡘⢆⠙⢿⣿⠐⣱⠿⣀⣡⡶⠇⠀⢀⡐⣤⣻⣽⣯⣿⣶⣥⡄⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠃⡴⢠⢈⡐⠡⠒⠤⡈⢄⡘⢀⠀⠆⡡⠤⣀⣄⠰⠬⠡⢙⡳⢾⣮⣡⢌⠻⠀⡿⠙⡳⢃⠉⠀⠀⠈⣁⢋⠟⡻⠿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠲⢤⠓⣌⠲⠤⣄⣈⢂⠒⡌⢰⡐⠤⡈⢍⡛⡫⢭⣍⣓⢾⣿⣝⢷⠤⠀⠀⠀⠤⢒⡈⣋⢛⡒⠾⠶⣴⣦⣀⡈⠍⠛⢿⣿⣽⢦⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠚⠥⡳⡄⣙⢪⣝⠺⣧⢟⣷⡾⣧⣱⣦⠚⢀⣉⣓⣊⡙⣻⣆⠒⠄⡀⠈⢆⢳⡸⢯⣿⣿⣷⣶⣬⣙⣛⠻⢦⣤⣌⠛⣯⠓⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣀⠃⠮⢣⡹⢦⣛⠶⠛⠋⠀⢠⣳⡿⠟⠉⡼⢳⢌⡃⠌⠐⠀⠀⠎⠳⡛⠿⠛⡟⠿⠻⠿⢶⣻⠰⢦⡻⣝⢠⠏⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠄⢢⠐⠈⠄⠀⢄⠠⠀⢀⠀⡔⢁⠣⢃⠁⡐⢨⠑⡱⢊⠔⠈⠀⠀⢠⡈⡆⢁⣤⠡⠄⠄⠆⢁⡂⠰⠨⣥⢛⠬⡣⠍⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢂⠔⠈⣠⢮⡑⠊⠁⠈⠀⡠⠂⣸⠁⠨⠑⡂⢌⠀⢄⢣⣿⢨⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⠺⠥⠃⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⢡⡞⣨⣾⣿⡗⠈⠁⠄⡡⢐⡁⢀⡏⣘⠀⢰⢁⡂⠀⣺⣼⣵⡎⠡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⢡⡗⣰⣿⣿⣿⣼⣷⡏⣄⠣⢠⠂⢸⣷⣿⡀⣿⡘⢇⢲⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⡟⣰⣿⣿⣿⣿⣿⡿⣟⡽⡂⠧⠀⣾⣿⣿⡟⣿⡇⣾⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡧⢁⣿⡟⣽⣿⣿⣿⡿⣉⡴⠳⠀⠀⣿⣿⣿⣧⢻⣇⢿⢾⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢻⡼⣽⣿⣿⣿⡿⠓⠈⠀⠀⠀⠀⢸⡟⢿⣿⣟⣿⣷⡌⢹⣿⣿⢿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠻⣜⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠘⣿⣼⣿⣿⡿⣽⣷⠀⡟⢿⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢣⡝⣿⣷⣿⣿⣧⠙⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠭⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢾⣿⣿⣷⣿⣿⡄⣻⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠌⠛⠿⡏⠙⠁⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
            ],
            icon: ""
        },
    ];

    const toggleProject = (id) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const scrollToProject = (id) => {
        projectRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

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

                        <a href="https://github.com/loyrZ" target="_blank" rel="noreferrer">
                            <FaGithub size={44} className="hover:text-white hover:scale-150 transition" />
                        </a>


                        <a href="https://www.linkedin.com/in/gates-hadisubroto-4367772aa" target="_blank" rel="noreferrer">
                            <FaLinkedin size={44} className="hover:text-white hover:scale-150 transition" />
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
                        ${showHub || showAbout || showTLDRAbout? "pbi -2" : "pb-0"}`} //transition for get started
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
                        className={`relative mx-auto text-white md:p-8 xl:p-0 flex flex-col justify-center transition-all duration-300 ease-out
                            ${showHub ? "w-full max-w-none px-6" : "container max-w-[80vw]"}
                            ${showHub || showAbout || showTLDRAbout ? "-translate-y-0" : "translate-y-0"}
                            text-center md:text-left`}
                                            >
                        <div>
                            <h1 className=" relative text-3xl md:text-[50px] font-black uppercase leading-tight tracking-wider">
                                {showTLDRAbout
                                    ? "SKILLS"
                                    : showAbout
                                        ? "ABOUT ME"
                                        : showHub
                                            ? ""
                                            : showMore
                                                ? "INTRODUCTION"
                                                : "HOME PAGE"}
                            </h1>

                            {showHub && (
                                <p className=" text-sm md:text-base font-medium tracking-wide text-gray-500">

                                </p>
                            )}
                        </div>


                        <div className="relative mb-8 max-w-4xl">
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
                                I'm a Computer Science student at California State University, Sacramento, based in Sacramento.

                                I started teaching myself to code at 17 through Codecademy, drawn to programming as a creative outlet and a way to build software that feels both functional and expressive.

                                JavaScript is my strongest language, and I built this portfolio with React and Vite as a single-screen experience centered around button-based navigation.

                                I also have experience with Node.js, MySQL, Python, Java/Script, C++, and Microsoft Office.
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
                            <section className="-mt-1 w-full mx-auto w-[100vw] h-[90vh] px-2 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-sm text-white leading-relaxed transition duration-300 ease-out transform-gpu z-40">
                                <div className="h-full flex gap-4">
                                    <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {projects.map((project) => (
                                                <div
                                                    key={project.id}
                                                    ref={(el) => {
                                                        projectRefs.current[project.id] = el;
                                                    }}
                                                    onMouseEnter={() => setHoveredProject(project.id)}
                                                    onMouseLeave={() => setHoveredProject(null)}
                                                    className={`h-[380px] overflow-y-auto p-6 rounded-2xl border transition duration-200 flex flex-col gap-4
                                                        ${
                                                        hoveredProject === project.id
                                                            ? "bg-black/55 border-orange-300 shadow-[0_0_0_1px_rgba(253,186,116,0.5)]"
                                                            : "bg-black/40 border-white/10"
                                                    }`}
                                                >
                                                    <h2 className="text-xl font-bold">
                                                        Project {project.id}: {project.name}
                                                    </h2>

                                                    <div className="text-4xl">{project.icon}</div>

                                                    <h3 className="text-lg font-semibold text-white/80">
                                                        {project.title}
                                                    </h3>

                                                    <p
                                                        className={`text-sm text-white/70 ${
                                                            expandedProjects[project.id] ? "" : "line-clamp-4"
                                                        }`}
                                                    >
                                                        {project.description}
                                                    </p>

                                                    <button
                                                        type="button"
                                                        onClick={() => toggleProject(project.id)}
                                                        className="w-fit text-xs font-bold uppercase tracking-widest text-orange-300 hover:underline"
                                                    >
                                                        {expandedProjects[project.id] ? "read less" : "read more"}
                                                    </button>

                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map((tag, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs bg-orange-400/20 text-orange-200 px-3 py-1 rounded-full"
                                                            >
                                                            {tag}
                                                          </span>
                                                        ))}
                                                    </div>

                                                    <a
                                                        href={project.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-auto text-sm font-bold text-orange-300 hover:underline"
                                                    >
                                                        View Project →
                                                    </a>
                                                </div>
                                            ))}

                                            <div className="md:col-span-2">

                                            </div>
                                        </div>
                                    </div>

                                    <aside className="hidden lg:block w-56 shrink-0 h-full">
                                        <div className="h-full flex flex-col gap-1">
                                            <button
                                                type="button"
                                                onClick={() => setShowHub(false)}
                                                className="inline-block py-3 px-6 bg-orange-400 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-90 active:scale-95 transition duration-150"
                                            >
                                                back
                                            </button>
                                            {projects.map((project) => (
                                                <button
                                                    key={project.id}
                                                    type="button"
                                                    onMouseEnter={() => setHoveredProject(project.id)}
                                                    onMouseLeave={() => setHoveredProject(null)}
                                                    onClick={() => scrollToProject(project.id)}
                                                    className={`flex-1 min-h-0 rounded-xl px-3 py-2 text-left border transition duration-200 overflow-hidden
                                                                    ${
                                                        hoveredProject === project.id
                                                            ? "bg-orange-400/20 border-orange-300 text-white"
                                                            : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                                                    }`}
                                                >
                                                    <div className="truncate text-[10px] font-bold uppercase tracking-widest">
                                                        Project {project.id}
                                                    </div>
                                                    <div className="truncate text-sm font-semibold">
                                                        {project.title}
                                                    </div>
                                                </button>
                                            ))}

                                        </div>

                                    </aside>
                                </div>
                            </section>
                        )}

                        {/* ABOUT PANEL (mounted only when showAbout === true) */}
                        {showAbout && (
                            <section
                                className={`-mt-10 w-full max-w-[80wv] max-h-[80vh] mx-auto px-8 py-5 rounded-2xl
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
                                                      max-h-[90vh] overflow-y-auto overflow-x-hidden"
                                                                                                >

                                                <p className="text-lg text-white/80 leading-relaxed">
                                                    In my free time, I like turning messy inputs, data, logic, workflows, and scattered ideas, into something clear and usable. Sometimes that takes the form of a map, a dashboard, an interface, or a full application. The goal is usually the same: find what’s missing, figure out what could work better, and build it.

                                                    <br /><br />

                                                    I’m constantly working on improving myself, both professionally and personally. I learn through Codecademy, schoolwork, books, PDF resources, YouTube tutorials, networking, and insights from mentors both older and younger than me. I also focus on building better habits, like avoiding doomscrolling and strengthening my discipline and perseverance.
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
                                className={`-mt-10 w-full max-w-[80vw] mx-auto px-8 py-5 rounded-2xl
                                            bg-white/5 backdrop-blur-md border border-white/10 text-white leading-relaxed
                                            transform-gpu transition-[opacity,transform] duration-500 ease-out z-40
                                            h-[70vh]
                                          `}
                            >


                                <div className="relative transition-all duration-300 h-full">
                                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5" />

                                    <div
                                        className="relative h-full rounded-2xl border border-white/20 bg-black/30 p-6 text-white shadow-lg
      overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                                    >


                                        <div className="grid grid-cols-2 gap-8">
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

                                            <div className="space-y-3 text-white/80 leading-relaxed border-l border-white/10 pl-8">
                                                <p className="text-white font-semibold">Things I've built</p>
                                                <p><strong className="text-white">UUU</strong>, patent-pending UI system, sole inventor</p>
                                                <p><strong className="text-white">Historical Map</strong>, deployed full-stack web app</p>
                                                <p><strong className="text-white">Mock YouTube</strong>, full-stack video platform</p>
                                                <p><strong className="text-white">MyDavis Educational Game</strong>, Agile team project</p>
                                                <p><strong className="text-white">Data Analyst Social Impact Tool </strong>, Online Data Tool Navigator</p>
                                                <p><strong className="text-white">ML Health App</strong>, neural networks, in progress</p>
                                                <p><strong className="text-white">This portfolio</strong>, React + TypeScript</p>
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
                                </div>

                            </section>
                        )}
                    </div>





                </section>
            </main>

        </div>


    )

}
