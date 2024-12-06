document.addEventListener('DOMContentLoaded', function() {
    showPage(1); // Mostrar la primera página al cargar la página
});

function showPage(pageNumber) {
    // Ocultar todas las páginas
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Mostrar la página seleccionada
    var pageToShow = document.getElementById('page' + pageNumber);
    pageToShow.style.display = 'flex';
}
