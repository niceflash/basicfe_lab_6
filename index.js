let b_d = document.getElementById("download");

b_d.addEventListener("click",  function (event){
    event.preventDefault();
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0]);
            const result = data.results[0];

            const person = [
                result.picture.large,
                result.name.title,
                result.name.first,
                result.name.last,
                result.location.city,
                result.location.postcode,
                result.phone,
            ];
            newPerson(person);
        });
})

function newPerson(data){
    let block = document.createElement("div");
    block.id = "people";

    let img = document.createElement("img");
    img.id = "photo";
    img.src = data[0];

    let text = document.createElement("span");
    text.id = "info";

    text.innerText = "\nName: " + data[1] + " " + data[2] + " " + data[3] + "\n" + "City: " + data[4] + "\n" + "Postcode: " + data[5] + "\n" + "Phone: " + data[6];

    block.appendChild(img);
    block.appendChild(text);

    document.getElementById("result").appendChild(block);
}