document.addEventListener('DOMContentLoaded', function () {
    showPage(1); // Mostrar la primera página al cargar la página
    setupTabs(); // Configurar eventos para las pestañas
    setupMetaScreen();
});

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const pageNumber = parseInt(tab.dataset.page); // Obtiene el número de la pestaña
            showPage(pageNumber);
        });
    });
}

function showPage(pageNumber) {
    // Ocultar todas las secciones
    const pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
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
    const editarMetaBtns = document.querySelectorAll('.editar-meta');
    const screenOverlay = document.getElementById('screenOverlay');
    const cerrarBtn = document.getElementById('cerrar-btn');
    const continuarBtn = document.getElementById('continuar-btn');
    const screenOverlayHabitos = document.getElementById('screenOverlayHabitos');

    const addHabitoBtn = document.getElementById('agregar-habito-btn');
    const editarHabitoBtn = document.querySelectorAll('.editar-habito');
    const screenOverlayRegistroHabitos = document.getElementById('screenOverlayRegistroHabitos');

    const guardarRegistroHabitoBtn = document.getElementById('guardar-habito-btn');
    const cerrarHabitoBtn = document.getElementById('cerrar-habito-btn');
    const volverAMetasBtn = document.getElementById('volver-a-metas-btn');



    // Funcionalidad para mostrar la pantalla modal al hacer clic en "Agregar Meta"
    addMetaBtn.addEventListener('click', function () {
        screenOverlay.style.display = 'flex'; // Mostrar la pantalla modal
    });

    // Funcionalidad para ocultar la pantalla modal al hacer clic en "Cancelar"
    cerrarBtn.addEventListener('click', function () {
        screenOverlay.style.display = 'none'; // Ocultar la pantalla modal
    });

    // Funcionalidad para manejar los botones de "Editar Meta"
    editarMetaBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            screenOverlay.style.display = 'flex'; // Mostrar la pantalla modal
            // Opcional: Aquí puedes agregar lógica para cargar datos dinámicos
        });
    });

    continuarBtn.addEventListener('click', function () {
        screenOverlayHabitos.style.display = 'flex'; // Mostrar la pantalla modal
    });

    addHabitoBtn.addEventListener('click', function () {
        screenOverlayRegistroHabitos.style.display = 'flex'; // Mostrar la pantalla modal
    });

    guardarRegistroHabitoBtn.addEventListener('click', function () {
        // Ocultar el modal de registro de hábitos
        screenOverlayRegistroHabitos.style.display = 'none';


    });

    cerrarHabitoBtn.addEventListener('click', function () {
        // Ocultar el modal de registro de hábitos
        screenOverlayRegistroHabitos.style.display = 'none';

    });

    volverAMetasBtn.addEventListener('click', function () {
        // Ocultar el modal de registro de hábitos
        screenOverlayHabitos.style.display = 'none';
        screenOverlay.style.display = 'none';
    });


    editarHabitoBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            screenOverlayRegistroHabitos.style.display = 'flex'; // Mostrar la pantalla modal
            // Opcional: Aquí puedes agregar lógica para cargar datos dinámicos
        });
    });



    /* Seccion 3: Registrar Ejecucion*/
    const registrarEjecucionBtn = document.querySelectorAll('.registrar-ejecucion');
    const cerrarEjecucionBtn = document.getElementById('cerrar-ejecucion-btn');
    const screenOverlayEjecucion = document.getElementById('screenOverlayEjecucion');


    // Funcionalidad para mostrar la pantalla modal al hacer clic en "Agregar Meta"
    registrarEjecucionBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            screenOverlayEjecucion.style.display = 'flex'; // Mostrar la pantalla modal
            // Opcional: Aquí puedes agregar lógica para cargar datos dinámicos
        });
    });

    // Funcionalidad para ocultar la pantalla modal al hacer clic en "Cancelar"
    cerrarEjecucionBtn.addEventListener('click', function () {
        screenOverlayEjecucion.style.display = 'none'; // Ocultar la pantalla modal
    });





}
