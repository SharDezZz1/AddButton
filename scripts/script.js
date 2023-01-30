const parentBlock = document.getElementsByClassName("parent-block");

for (const element of parentBlock) {
    const innerBtn = document.createElement("button");
    innerBtn.style.width = "100px";
    innerBtn.style.height = "30px";
    innerBtn.innerText = "Push me";
    element.appendChild(innerBtn);

}