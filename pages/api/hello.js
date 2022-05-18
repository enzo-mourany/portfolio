export default function handler(req, res) {
    res.status(200).json(
        [{
            id: 1,
            title: "The Tabata App",
            img: "../public/PNG/tabata-app.png",
            description: "A simple Tabata application compatible on IOS and Android. My React Native project",
            tech: ["React Native"],
            retex: "../public/PDF/retex-the-tabata-app.pdf",
            githubLink: "https://github.com/enzo-mourany/the-tabata-app.git",
            date: "2022"
        },
        {
            id: 2,
            title: "Lowatem AI",
            img: "../public/PNG/tabata-app.png",
            description: "Project for the IUT. Board game with two opposing players and IA development",
            tech: ["Java"],
            retex: "../public/PDF/retex-lowatem-IA.pdf",
            githubLink: "https://github.com/enzo-mourany/ia_lowatem",
            date: "2022"
        },
        {
            id: 3,
            title: "Pong",
            img: "../public/PNG/tabata-app.png",
            description: "First project for the IUT. Development of the classic pong game with objects, collision, balls and sprites management.",
            tech: ["Java", "Processing"],
            retex: "../public/PDF/retex-pong.pdf",
            githubLink: "https://github.com/enzo-mourany/pong-java-iut",
            date: "2021"
        },
        {
            id: 4,
            title: "Clajem",
            img: "../public/PNG/tabata-app.png",
            description: "Project for the IUT. Creation of an electric skateboard rental and sale business. Realization of the PESTEL analysis and its website. Team project",
            tech: ["HTML", "CSS"],
            retex: "../public/PDF/retex-clajem.pdf",
            githubLink: "github-link test",
            date: "2021"
        },
        {
            id: 5,
            title: "Storyboard",
            img: "../public/PNG/tabata-app.png",
            description: "Project for the IUT. Creation of an electric skateboard rental and sale business. Realization of the PESTEL analysis and its website. Team project",
            tech: ["Shell", "HTML"],
            retex: "../public/PDF/retex-storyboard.pdf",
            githubLink: "https://github.com/enzo-mourany/storyboard.git",
            date: "2021"
        },
        {
            id: 6,
            title: "Wine Orders",
            img: "../public/PNG/tabata-app.png",
            description: "Project for the IUT. Creation and conception of database to manage wine orders. Team project",
            tech: ["SQL"],
            retex: "../public/PDF/retex-wine-orders.pdf",
            githubLink: "https://github.com/enzo-mourany/wine-commands.git",
            date: "2022"
        },
        ])
}