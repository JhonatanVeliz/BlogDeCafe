// OBTENIENDO VALORES
let showContainer = document.querySelector('#show');
let visibeld = document.querySelector('#visibeld');
let disabled = document.querySelector('#disabeld');

// EJECUCION

const show = () => {
    showContainer.style.transform = "scale(1)";
    showContainer.style.right = "0%";
};

const hidden = () =>{
    showContainer.style.right = "-100%";
    showContainer.style.transform = "scale(0)";
};

visibeld.addEventListener('click', show);
disabled.addEventListener('click', hidden);