const app = new Vue({
    el: "#content",
    data: {
        trinketsList: []
    }
})

let projectList;
fetch('../portfolio/trinkets/content.json')
    .then(response => response.json())
    .then(data => { projectList=data.projectList;})
    .catch(error=> {console.log('Error reading the file:', error);});

app.$data.trinketsList=app.$data.trinketsList.concat(projectList);
console.log(app.$data);