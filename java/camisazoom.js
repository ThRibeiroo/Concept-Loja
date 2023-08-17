const box = document.getElementById("box");
const camisaAqui = document.getElementById("camisaAqui");

box.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    camisaAqui.style.transformOrigin = `${x}px ${y}px`;
    camisaAqui.style.transform = "scale(2)";
    camisaAqui.style.margin = "5rem"

});

box.addEventListener("mouseleave", () =>{

    camisaAqui.style.transformOrigin = "center center";
    camisaAqui.style.transform = "scale(1)";
    camisaAqui.style.margin = "0rem"
})