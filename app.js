document.querySelector(".dice-img").onclick = function(){
    advice();
}
 async function advice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    document.querySelector(".id").innerHTML = `${data.slip.id}`;
    document.querySelector(".advice-text").innerHTML = `${data.slip.advice}`;
}
