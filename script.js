const container = document.querySelector(".items");
const items = document.querySelectorAll(".item");

let currentcube = null;
let draggable = false;

let ofsetX = 0;
let ofsetY = 0;

items.forEach((item)=>{
	item.addEventListener("mousedown", (e)=>{
		currentcube = item;
		draggable=true;
		ofsetX = e.ofsetX;
		ofsetY = e.ofsetY;

		item.style.position = "absolute";
	})
	
});

document.addEventListener("mousemove",(e)=>{
	if (!isDragging) return;

    const rect = container.getBoundingClientRect();

    let x = e.clientX - rect.left - offsetX;
    let y = e.clientY - rect.top - offsetY;

    x = Math.max(
        0,
        Math.min(x, container.clientWidth - currentCube.offsetWidth)
    );

    y = Math.max(
        0,
        Math.min(y, container.clientHeight - currentCube.offsetHeight)
    );

    currentCube.style.left = x + "px";
    currentCube.style.top = y + "px";

});

document.addEventListener("mouseup",(e)=>{
	currentcube = null;
    draggable = false;
})
