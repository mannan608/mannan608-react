import emoji from "react-easy-emoji";
import skillsAnimation from "../components/icons/animation-icons/skills.json";


export const skillsSection = {
    title: "What I do",
    subTitle: "I design and build responsive, user-friendly web interfaces using modern technologies & frameworks. I ensure seamless functionality, performance optimization, and collaboration with teams to deliver exceptional user experiences.",
    data: [
        {
            title: "Tools & Technologies",
            lottieAnimationFile: skillsAnimation,
            skills: [
                emoji("⚡ Building responsive Single-Page-App (SPA) & PWA in React.js"),
                emoji("⚡ Building responsive interactive website using Next.js"),
                emoji("⚡ Building RESTful APIs in Next.js"),
            ],
            softwareSkills: [
                {
                    skillName: "JavaScript",
                    iconifyTag: "logos:javascript",
                },
                {
                    skillName: "Reactjs",
                    iconifyTag: "vscode-icons:file-type-reactjs",
                },
                {
                    skillName: "Redux",
                    iconifyTag: "skill-icons:redux",
                },
                {
                    skillName: "Nextjs",
                    iconifyTag: "vscode-icons:file-type-light-next",
                },
                {
                    skillName: "Web Socket",
                    iconifyTag: "logos:websocket",
                },
                {
                    skillName: "Rest API",
                    iconifyTag: "dashicons:rest-api",
                },
                {
                    skillName: "jquery",
                    iconifyTag: "akar-icons:jquery-fill",
                },
                {
                    skillName: "PHP",
                    iconifyTag: "logos:php",
                },
                {
                    skillName: "Material UI",
                    iconifyTag: "devicon:materialui",
                },
                {
                    skillName: "Bootstrap",
                    iconifyTag: "skill-icons:bootstrap",
                },
                {
                    skillName: "Tailwind CSS",
                    iconifyTag: "devicon:tailwindcss",
                },

                {
                    skillName: "Mongo DB",
                    iconifyTag: "skill-icons:mongodb",
                },
                {
                    skillName: "My SQL",
                    iconifyTag: "logos:mysql",
                },
                {
                    skillName: "Postman",
                    iconifyTag: "devicon:postman",
                },
                {
                    skillName: "Github",
                    iconifyTag: "akar-icons:github-fill",
                },
                {
                    skillName: "Figma",
                    iconifyTag: "devicon:figma",
                },
                {
                    skillName: "Slack",
                    iconifyTag: "logos:slack-icon",
                },
            ],
        },
    ],
};

