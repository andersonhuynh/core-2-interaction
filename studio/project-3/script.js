window.addEventListener("load", function(){
    setTimeout(
        function open (event){
            document.querySelector(".popup").style.display = "block";
            document.querySelector(".popup").style.opacity="100%";

        },
        1000
    )
});

document.querySelector("#close").addEventListener
("click", function(){
    document.querySelector(".popup").style.display="none";
    document.querySelector(".popup").style.opacity="0%";
});