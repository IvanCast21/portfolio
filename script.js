script.justify

// Abre el modal al hacer clic en una imagen
function openModal(element) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    modal.style.display = "flex";
    modalImg.src = element.src;
    modalCaption.textContent = element.getAttribute("data-caption");
}

// Cierra el modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Cierra el modal con la tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Activa o desactiva el "modo pesadilla"
function toggleNightmare() {
    document.body.classList.toggle("nightmare");
}

function toggleNightmare() {
    document.body.classList.toggle("nightmare");
}

// Movimiento de ojo que sigue al cursor
document.addEventListener("mousemove", e => {
    const eye = document.getElementById('eye1');
    if (eye) {
        eye.style.left = `${e.clientX - 15}px`;
        eye.style.top = `${e.clientY - 15}px`;
    }
});