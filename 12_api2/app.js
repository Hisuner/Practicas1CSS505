var divResults = document.querySelector("#resultado")
const verPhoto=async()=>{
const respuesta= await fetch("https://jsonplaceholder.typicode.com/photos")
const json=await respuesta.json();
console.log(json)
json.map(photos=>{
    let divPhoto=document.createElement("div");
    divPhoto.className="photos";
    divPhoto.innerHTML=`
    <p><b>Titulo: </b>${photos.title}</p>
    <img src="${photos.url}"  width="100%">
    
    `;
divResults.appendChild(divPhoto);
});

}

const clearPhoto= async ()=>{
divResults.innerHTML="";
}