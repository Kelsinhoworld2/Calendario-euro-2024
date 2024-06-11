const container = document.getElementById("data-container");

function updateElement(data) {
  const matches = data;
  for (let match of matches) {
    console.log(match);
    container.innerHTML += `<tr>
                <td>${match.date}</td>
                <td>${match.home}</td>
                <td>${match.away}</td>
                <td>${match.time}</td>
            </tr>`;
  }
}

const url = "https://api-do-euro-2024.onrender.com";
const endpoint = "/matches";

fetch(url + endpoint)
.then(response => {
    if(!response.ok){
        console.log("Erro ao resgatar dados");
    }else{
        return response.json()
    }
})
.then(data => updateElement(data));
