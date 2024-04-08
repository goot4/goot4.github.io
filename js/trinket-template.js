
const projectJSON = sessionStorage.getItem('project');
const project = projectJSON ? JSON.parse(projectJSON) : {};
console.log(project);
const articleEl = document.querySelector("article");
const titleEl = document.createElement('h1');
const typeTimeEl = document.createElement('h5');
const tagEl = document.createElement('p');
const descriptionEl = document.createElement('p');
const noteEl = document.createElement('p');
const linkEl = document.createElement('a');
const codeEl = document.createElement('a');

titleEl.textContent = project.projectName;
typeTimeEl.innerHTML = `Type: ${project.type} &nbsp;&nbsp;&nbsp;&nbsp; Time: ${project.time}`;
tagEl.textContent = `Tag: ${project.tag}`;
descriptionEl.textContent = project.description;
noteEl.textContent = project.note;
linkEl.textContent = "Check project here";
linkEl.target = '_blank';
linkEl.href = project.link;
codeEl.textContent = "Check source code here";
codeEl.href = `https://github.com/goot4/goot4.github.io/tree/main/${project.code}`;
codeEl.target = '_blank';

articleEl.appendChild(titleEl);
articleEl.appendChild(typeTimeEl);
articleEl.appendChild(tagEl);
articleEl.appendChild(descriptionEl);
articleEl.appendChild(noteEl);
articleEl.appendChild(linkEl);
articleEl.appendChild(codeEl);
