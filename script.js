document.addEventListener("DOMContentLoaded", () => {
    const projectData = [
        {
            title: "Predictive Climate Analytics",
            description: "Leverages AI and machine learning to analyze climate variability and enhance environmental decision-making.",
            image: "climate.png",
            link: "https://sites.google.com/colorado.edu/predictiveclimateanalytics/home?authuser=0"
        },
        {
            title: "Houston Crime Analysis",
            description: "Analyzing crime data to uncover patterns, trends, and correlations for informed public safety strategies.",
            image: "crime.png",
            link: "https://sites.google.com/view/houston-crime-analysis/home?authuser=0"
        },
        {
            title: "ADHD Assistance App",
            description: "Redesign and web content writing for the EcoWave brand, a sustainable products company.",
            image: "adhd.png",
            link: "#"
        }
    ];

    const projectsContainer = document.getElementById("projects-container");
    projectData.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <h3>⚙️ ${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
    });
});