console.log("hello")

let container = document.querySelector("#container");


let content = document.createElement("div");
content.classList.add("content")
content.textContent = "This is the glorious text - content";
container.appendChild(content);

let para = document.createElement("p");
para.textContent = "Hey I'm red";
para.style.color = "red";
container.appendChild(para);

let header3 = document.createElement("h3");
header3.classList.add("blue-text");
header3.style.color = "blue";
header3.textContent = "Hey I'm blue h3";
container.appendChild(header3);

let divContainer = document.createElement("div");
divContainer.style.borderStyle = "solid";
// divContainer.style.borderWidth = "2px";
divContainer.style.borderColor = "black";
divContainer.style.backgroundColor = "pink";

let divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
divContainer.appendChild(divH1);

let divP = document.createElement("p");
divP.textContent = "ME TOO";
divContainer.appendChild(divP);

container.appendChild(divContainer);


const btn = document.querySelector("#btn2");
btn.onClick = () => alert("Hello World!");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', (a) => {
    a.target.style.backgroundColor = "blue";
});

const btns = document.querySelectorAll('button');

console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert(btn.id);
    });
});
