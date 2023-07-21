const linkModal = document.querySelector(".linkModal");
const linkOpenBtn = document.querySelector("#linkOpen");
const inputName = document.querySelector("#link-inputName");
const inputLink = document.querySelector("#link-inputLink");
const linkForm = document.querySelector("#link-form");
const linklist = document.querySelector("#link-list");

let links = [];

function linkOpen(){
    if(linkModal.style.display === "block"){
    linkModal.style.display = "none";}
    else{
        linkModal.style.display = "block";
    }
}

function InputName(event){
    event.preventDefault();
    const linkVar = {
        name : inputName.value,
        link : inputLink.value,
        id : Date.now()
}
    inputName.value = "";
    inputLink.value = "";
    paintLink(linkVar)

    links.push(linkVar);
    savingLink();
}

function paintLink(linkVar){
    const li = document.createElement("li");
    li.id = linkVar.id;
    const a = document.createElement("a");
    a.innerText = linkVar.name;
    a.href = linkVar.link;
    a.target = "_blank";
    const linkDeleteBtn = document.createElement("button");
    linkDeleteBtn.innerText = "X";
    linkDeleteBtn.classList.add("linkDeleteBtn");
    linkDeleteBtn.addEventListener("click",deleteLink);
    linklist.appendChild(li);
    li.appendChild(a);
    li.appendChild(linkDeleteBtn);

    a.classList.add("a");
    li.classList.add("li");
}

function deleteLink(event){
    const li = event.target.parentNode;
    li.remove();

    links = links.filter(function(links){
        return links.id !== parseInt(li.id)
    });
    savingLink();
}

function savingLink(){
    localStorage.setItem("link",JSON.stringify(links));
}

linkOpenBtn.addEventListener("click",linkOpen);

linkForm.addEventListener("submit",InputName);

const savedLink = localStorage.getItem("link");
if(savedLink !== null){
    const parsedsavedLink = JSON.parse(savedLink);

    parsedsavedLink.forEach(paintLink);
    links = parsedsavedLink;

}