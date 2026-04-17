  const button = document.querySelector("#btn");
    const counter = document.querySelector("#count");

    let clicks = 0;

    button.addEventListener("click", () => {
      clicks++;
      counter.textContent = clicks;

      if (clicks === 10) {
        button.style.backgroundColor = "red";

      }
	  else if (clicks === 20) {
		button.style.backgroundColor = "green";

	  }
	  else if (clicks === 30) {
		button.style.backgroundColor = "blue";

	  }

else if (clicks === 40) {
		button.style.backgroundColor = "chartreuse";

	  }

	  else if (clicks === 50) {
		button.style.backgroundColor = "aquamarine";
	  }

	  else if (clicks === 60) {
		button.style.backgroundColor = "purple";
	  }
	  	else if (clicks === 70) {
		button.style.backgroundColor = "orange";
		}
		else if (clicks === 80) {
		button.style.backgroundColor = "yellow";
		}
			else if (clicks === 90) {
		button.style.backgroundColor = "pink";
		}	
			else if (clicks === 100) {
		button.style.backgroundColor = "black";
		}


		if (clicks === 150) {
			alert("Поздравляю! Вы достигли КОНЦА !Для продолжения либо заплатите 15$ либо ждите 2.0!");
				clicks = 0;
				counter.textContent = clicks;
				button.style.backgroundColor = "#4caf50";
		}
    });