const img = document.getElementById("slide");
	const container = document.querySelector(".slider--inner");
  
	container.addEventListener("mousemove", (e) => {
	  const { left, top, width, height } = container.getBoundingClientRect();
	  const x = (e.clientX - left) / width * 100;
	  const y = (e.clientY - top) / height * 100;
	  
	  img.style.transformOrigin = `${x}% ${y}%`;
	  img.style.transform = "scale(2)"; // Nivel de zoom
	});
  
	container.addEventListener("mouseleave", () => {
	  img.style.transform = "scale(1)";
	});