// Your code her
const boxes = document.querySelectorAll(".item");
let isdragging = false;
let currentbox;
boxes.forEach((box)=>{
	box.addEventListener("mousedown",(event)=>{
		isdragging = true;
		currentbox = box;
	});

	
})
document.addEventListener("mousemove",(event)=>{
		if(isdragging){
			currentbox.style.left = event.clientX + 'px';
			currentbox.style.top = event.clientY + 'px';
		}
		
	});

	document.addEventListener("mouseup",(event)=>{
		isdragging = false;
		currentbox = null;
	})