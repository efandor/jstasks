const button = document.getElementById('button');

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1")); //doesn't work
button.onclick = () => console.log(2);
