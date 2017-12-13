export class Departamento {
    constructor(
        public opcion: string,
        public recamaras: string,
        public banos: string,
        public interior: string,
        public jardin: string,
        public area: string,
        public otros: string,
        public planos: Array<string>,
    ) {}
}
