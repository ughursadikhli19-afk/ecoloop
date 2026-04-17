const childList = document.querySelectorAll(".child");
childList.forEach((child) => {
child.addEventListener("click", () => {
alert("X")
})
});