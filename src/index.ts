
import { libros } from './libros';
import { Seccion } from './libreria';
import { libro } from './libro';

import promptSync from 'prompt-sync';

const prompt = promptSync();


const seccion = new Seccion('Seccion 1', 'Sección dedicada a primeros libros agregados', libros);

 




function agregarLibro(): void {
    const Titulo = prompt("Ingrese el título del libro: ");
    const Autor = prompt("Ingrese el autor del libro: ");
    const Genero = prompt("Ingrese el género del libro: ");
    const Idioma = prompt("Ingrese el idioma del libro: ");
    const Precio = parseFloat(prompt("Ingrese el precio del libro: "));
    const ISBN = parseInt(prompt("Ingrese el ISBN del libro: "));
    const Editorial = prompt("Ingrese la editorial del libro: ");
    const Paginas = parseInt(prompt("Ingrese el número de páginas del libro: "), 10);

    const libros = new libro( Titulo, Autor,Genero,Idioma,Precio,ISBN,Editorial,Paginas);
    seccion.AgregarLibro(libros);
    console.log('Libro agregado correctamente.');
}



function eliminarLibro(): void {
    const Titulo = prompt('Ingrese el titulo del libro a eliminar: ');
    seccion.EliminarLibro(Titulo);
    console.log('Libro eliminado correctamente.');
}

function MostrarLibros(): void {
    const libros = seccion.ObtenerLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la sección.');
    } else {
        libros.forEach(librx => {
            console.log(`
                Título: ${librx.Titulo},
                Autor: ${librx.Autor},
                Género: ${librx.Genero},
                Idioma: ${librx.idioma},
                Precio: ${librx.Precio},
                ISBN: ${librx.ISBN}`);
        });
    }
}
function menu(): void {
    let opcion: string;
    do {
        console.log('\n Menú \n');
        console.log('1. Agregar libro');
        console.log('2. Eliminar libro');
        console.log('3. Mostrar libros');
        console.log('4. Salir del menu \n ');
        opcion = prompt('Seleccione: ');

        switch (opcion) {
            case '1':
            agregarLibro(); 
                break;
            case '2':
              eliminarLibro(); 
                
                break;
            case '3':
              MostrarLibros();
                break;
            case '4':
                console.log('Saliste del menu');
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
        }
    } while (opcion !== '4');
}

menu();
