
import { book } from './books';
import { Seccion } from './libreria';
import { libros } from './book';

import promptSync from 'prompt-sync';

const prompt = promptSync();


const seccion = new Seccion('Seccion 1', 'Sección dedicada a primeros libros agregados', libros);

 
function agregarLibro(): void {
    const Titulo = prompt("Ingrese el título del libro: ");
    const Autor = prompt("Ingrese el autor del libro: ");
    const Genero = prompt("Ingrese el género del libro: ");
    const Idioma = prompt("Ingrese el idioma del libro: ");
    const Precio = parseFloat(prompt("Ingrese el precio del libro: "));
    const Formato = prompt("Ingrese el formato del libro: ");
    const ISBN = prompt("Ingrese el ISBN del libro: ");
    const Descripcion = prompt("Ingrese la descripción del libro: ");
    const Estado = prompt("Ingrese el estado del libro (nuevo/uso): ");
    const Ubicacion = prompt("Ingrese la ubicación del libro: ");
    const FechaPublicacion = new Date(prompt("Ingrese la fecha de publicación del libro: "));
    const Editorial = prompt("Ingrese la editorial del libro: ");
    const Paginas = parseInt(prompt("Ingrese el número de páginas del libro: "), 10);
    const Peso = parseInt(prompt("Ingrese el peso del libro: "), 10);

    const libro = new book( Titulo, Autor,Genero,Idioma,Precio,Formato,ISBN,Descripcion,Estado,Ubicacion,FechaPublicacion,Editorial,Paginas,Peso);
    seccion.AgregarLibro(libro);
    console.log('Libro agregado correctamente.');
}


function eliminarLibro(): void {
    const Titulo = prompt('Ingrese el titulo del libro a eliminar: ');
    seccion.EliminarLibro(Titulo);
    console.log('Libro eliminado correctamente.');
}



function verLibros(): void {
    const libros = seccion.ObtenerLibros();
    if (libros.length === 0) {
        console.log('No hay libros en la sección.');
    } else {
        libros.forEach(libro => {
            console.log(`
                Título: ${libro.Titulo},
                Autor: ${libro.Autor},
                Género: ${libro.Genero},
                Idioma: ${libro.Idioma},
                Precio: ${libro.Precio},
                Formato: ${libro.Formato},
                ISBN: ${libro.ISBN},
                Descripción: ${libro.Descripcion},
                Estado: ${libro.Estado},
                Ubicación: ${libro.Ubicacion},
                Fecha de Publicación: ${libro.FechaPublicacion.toLocaleDateString()},
                Editorial: ${libro.Editorial},
                Número de Páginas: ${libro.Paginas},
                Peso: ${libro.Peso} kg`);
        });
    }
}



function menu(): void {
    let opcion: string;
    do {
        console.log('\n Menú \n');
        console.log('1. Agregar libro');
        console.log('2. Eliminar libro');
        console.log('3. Ver libros');
        console.log('4. Salir \n ');
        opcion = prompt('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                agregarLibro();
                break;
            case '2':
                eliminarLibro();
                break;
            case '3':
                verLibros();
                break;
            case '4':
                console.log('Saliste');
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
        }
    } while (opcion !== '4');
}

menu();
