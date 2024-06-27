import { libro } from "./libro";
import { libros } from "./libros";

export class Seccion {
    Nombre: string;
    Descripcion: string;
    Libros: libro[] = [];

    constructor(Nombre: string, Descripcion: string, Libros: libro[]) {
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Libros = Libros;
    }


    AgregarLibro(libro: libro): void {
        this.Libros.push(libro);
    }


    EliminarLibro(Titulo: string): void {
        for (let i = 0; i < this.Libros.length; i++) {
            if (this.Libros[i].Titulo === Titulo) {
                this.Libros.splice(i, 1);
                break; // 
            }
        }
    }


    ObtenerLibros(): libro[] {
        return this.Libros;
    }

}
