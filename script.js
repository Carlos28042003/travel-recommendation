let data=[];

fetch("travel.json")
.then(response => response.json())
.then(result => {
data=result.destinations;
});

function search(){

let keyword=document.getElementById("searchInput").value.toLowerCase();

let results=data.filter(place =>
place.name.toLowerCase().includes(keyword)
);

display(results);
}

function display(results){

let container=document.getElementById("results");
container.innerHTML="";

results.forEach(place => {

container.innerHTML += `
<h3>${place.name}</h3>
<p>${place.country}</p>
<p>${place.description}</p>
<hr>
`;

});
}

function resetResults(){
document.getElementById("results").innerHTML="";
document.getElementById("searchInput").value="";
}