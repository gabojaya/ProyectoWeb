document.addEventListener('DOMContentLoaded', function() {
    showPage(1); // Mostrar la primera página al cargar la página
    setupTabs(); // Configurar eventos para las pestañas
});

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const pageNumber = parseInt(tab.dataset.page); // Obtiene el número de la pestaña
            showPage(pageNumber);
        });
    });
}

function showPage(pageNumber) {
    // Ocultar todas las secciones
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Mostrar la sección correspondiente
    const pageToShow = document.getElementById('page' + pageNumber);
    if (pageToShow) {
        pageToShow.style.display = 'flex';
    }
}




