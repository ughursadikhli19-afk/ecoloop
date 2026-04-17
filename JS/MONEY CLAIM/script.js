function game() {

    function createMoney() {
        setInterval(() => {
            const azn = document.createElement("img");
            azn.className = "azn";
            azn.src = ".images/100.ashx";
            
            azn.style.left = Math.random() * 1200 + "px";
            azn.style.top = "8px";
            azn.style.position = "absolute";

            azn.addEventListener("click", () => {
                azn.remove();
                getScore();
            });

            document.querySelector(".game").appendChild(azn);
        }, 500);
    }

    function falling() {
        setInterval(() => {
            document.querySelectorAll(".azn").forEach(azn => {
                azn.style.top = azn.offsetTop + "px";

                if (azn.offsetTop > window.innerHeight) {
                    azn.remove();
                }
            });
        }, 16);
    }

    function getScore() {
        ++score;
        const scoreEl = document.querySelector(".score");
        scoreEl.textContent = score;
    }

    createMoney();
    falling();
}

game();