import food from "../assets/images/food.png";
import cafe from "../assets/images/Cafe.png";
import dnovo from "../assets/images/dnovo.png";
import island from "../assets/images/island.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Ex-Intern",
        company_name: "Eisystem",
        date: "April 2024 - June 2024",
        points: [
            "During my internship at Eisystems, I gained hands-on experience in JavaScript, which played a crucial role in helping me develop an e-commerce website. This opportunity allowed me to strengthen my skills in front-end development, user interaction, and responsive design. I worked on optimizing UI components, improving functionality, and ensuring a seamless shopping experience. This experience not only enhanced my technical proficiency but also deepened my understanding of real-world web development challenges.",
        ],
    },
    {
        title: "Summer Intern",
        company_name: "EduSkill",
        date: "July 2024 - Sep 2024",
        points: [
            "Gained hands-on experience in the basics of Android development.",
"Worked with Android Studio, Dart, and Java for UI and functionality.",
"Developed and tested basic Android applications.",
"Learned about activity lifecycle, UI components, and API integration.",
        ],
    },
    {
        title: "Co-Founder/Web Designer",
        company_name: "De' Novo",
        date: "Dec 2025 - 2025",
        points: [
            "Conceptualized and developed an online street-style clothing brand.",
"Collaborated with college peers to design and curate trendy apparel.",
"Researched market trends to align product offerings with customer preferences.",
"Worked on branding, website design, and social media marketing strategies.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        image: food,
        theme: "btn-back-red",
        name: "Restaurant Website",
        description:
            "Developed a complete ordering system with admin and user roles, including a dashboard for business management.",
        link: "https://aditya-9944.github.io/e-commerce/",
    },
    {
        image: cafe,
        theme: "btn-back-green",
        name: "Cafe UI",
        description:
            "Designed and developed a visually appealing café website using HTML, CSS, and JavaScript, focusing on an engaging user experience and responsive design.",
        link: "https://aditya-9944.github.io/Cafe/",
    },
    {
        image: dnovo,
        theme: "btn-back-blue",
        name: "De Novo",
        description:
            "Co-founded De Novo, an online clothing brand focused on street-style fashion, in collaboration with college peers. Developed the brand concept, curated trendy apparel designs, and worked on the website, UI/UX, and social media marketing to establish a strong digital presence.",
        link: "https://aditya-9944.github.io/Dnovo/",
    },
    {
        image: island,
        theme: "btn-back-pink",
        name: "Three.js Portfolio",
        description:
            "Built a responsive multi-page React website using Three.js and Tailwind CSS, featuring interactive 3D elements, smooth navigation, and optimized performance.",
        link:"/",
    },
];
