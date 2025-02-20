const notas = document.getElementById("blocoNotas");
const botaoLimpar = document.getElementById("limpar");

notas.value = localStorage.getItem("blocoNotas");

notas.addEventListener("input",()=>{
    localStorage.setItem("blocoNotas", notas.value);
});

botaoLimpar.addEventListener("click", ()=>{
    localStorage.removeItem("blocoNotas");
    notas.value = "";
});

