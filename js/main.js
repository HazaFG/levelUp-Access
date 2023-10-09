document.addEventListener('DOMContentLoaded', function () {
        const usuarioIcon = document.getElementById('usuario-icon');
        const dropdownMenu = usuarioIcon.querySelector('.dropdown-menu');

        usuarioIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Evita que el clic se propague al documento

            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });

        // Cierra el menú desplegable si se hace clic en cualquier lugar fuera de él
        document.addEventListener('click', function () {
            dropdownMenu.style.display = 'none';
        });
    });

