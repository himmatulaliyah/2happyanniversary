const openBtn = document.getElementById("openBtn");


setTimeout(()=>{

    openBtn.classList.add("show");

},5000);



openBtn.onclick = ()=>{

    window.location.href="puzzle.html";

};