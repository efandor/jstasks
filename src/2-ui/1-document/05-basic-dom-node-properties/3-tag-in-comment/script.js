let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

console.log(body.firstChild.data); // BODY
