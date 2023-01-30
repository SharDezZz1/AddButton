const parentBlock = document.getElementsByClassName("parent-block");

for (const element of parentBlock) {
    const innerBtn = document.createElement("button");
    innerBtn.className = "inner-block";
    innerBtn.innerText = "Push me";
    element.appendChild(innerBtn);

}