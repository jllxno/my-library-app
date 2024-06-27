


// book.ts

export class libro {
    constructor(
        public Titulo: string,
        public Autor: string,
        public Genero: string,
        public idioma: string,       
        public Precio: number,
        public ISBN: number,
        public editorial: string,
        public paginas: number,
      
    ) {}
}