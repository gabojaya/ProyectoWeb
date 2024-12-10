document.addEventListener('DOMContentLoaded', function() {
    showPage(1); // Mostrar la primera página al cargar la página
    setupTabs(); // Configurar eventos para las pestañas
    setupMetaScreen();
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

function setupMetaScreen() {
    const addMetaBtn = document.getElementById('add-meta-btn');
    const screenOverlay = document.getElementById('screenOverlay');
    const cerrarBtn = document.getElementById('cerrar-btn');

    // Funcionalidad para mostrar la pantalla modal al hacer clic en "Agregar Meta"
    addMetaBtn.addEventListener('click', function() {
        screenOverlay.style.display = 'flex'; // Mostrar la pantalla modal
    });

    // Funcionalidad para ocultar la pantalla modal al hacer clic en "Cancelar"
    cerrarBtn.addEventListener('click', function() {
        screenOverlay.style.display = 'none'; // Ocultar la pantalla modal
    });

    // Funcionalidad para manejar los botones de "Editar Meta"
    const editarMetaBtns = document.querySelectorAll('.editar-meta');
    editarMetaBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            screenOverlay.style.display = 'flex'; // Mostrar la pantalla modal
            // Opcional: Aquí puedes agregar lógica para cargar datos dinámicos
        });
    });
}
