var divResults = document.querySelector("#resultado")
const verUsers=async()=>{
const respuesta= await fetch("https://jsonplaceholder.typicode.com/users")
const json=await respuesta.json();
console.log(json)
json.map(user=>{
    let divUser=document.createElement("div");
    divUser.className="user";
    divUser.innerHTML=`
    <p><b>ID: </b>${user.id}</p>
    <p><b>NOMBRE: </b>${user.name}</p>
    <p><b>USERNAME:</b>${user.username}</p>
    <p><b>EMAIL: </b>${user.email}</p>
    
    `;
divResults.appendChild(divUser);
});

}

const clearUsers= async ()=>{
divResults.innerHTML="";
}