var css = document.querySelector("h3")
		color1 = document.querySelector(".color1")
		color2 = document.querySelector(".color2")
		body = document.querySelector("body")
		random = document.querySelector(".random");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = color1.value + "; " + color2.value;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRnadomgGradient() {
	var c1 = getRandomColor();
	var c2 = getRandomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2
	+ ")";

	css.textContent = c1 + "; " + c2;
	color1.value = c1;
	color2.value = c2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRnadomgGradient);