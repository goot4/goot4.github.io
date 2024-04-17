
async function fetchJsonFile(filePath) {
    try {
        const response = await fetch(filePath);
        const jsonData = await response.json();
        const {projectList} = jsonData;

        // Create grid view using DOM
        const projectsEl = document.querySelector('#projects');
        for (const project of projectList) {
            const projectNameEl = document.createElement('p');
            const projectNameAEl = document.createElement('a');
            const projectCoverEl=document.createElement('img');
            const projectCoverAEl = document.createElement('a');
            const projectUnitEl = document.createElement('div');
            projectUnitEl.classList.add('grid-unit');
            projectNameEl.textContent=project["projectName"];
            projectNameAEl.href="./trinkets/trinket-template.html";
            projectCoverEl.src = project["projectCover"];
            projectCoverAEl.href="./trinkets/trinket-template.html";
            projectUnitEl.appendChild(projectCoverAEl)
                .appendChild(projectCoverEl);
            projectUnitEl.appendChild(projectNameAEl)
                .appendChild(projectNameEl);
            projectsEl.appendChild(projectUnitEl);

            projectNameEl.addEventListener('click', () => {
                sessionStorage.setItem("project", JSON.stringify(project));
            })
            projectCoverEl.addEventListener('click', () => {
                sessionStorage.setItem("project", JSON.stringify(project));
            })
        }
    } catch (error) {
        console.error('Error fetching/parsing file:', error);
    }
}

const filePath = '../portfolio/trinkets/content.json';
fetchJsonFile(filePath);