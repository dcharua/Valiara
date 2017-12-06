export class Project {
    constructor(
        public title: string,
        public subtitle: string,
        public color: string,
        public year: string,
        public location: string,
        public slug: string,
        public tasks: Array<string>,
        public photos: Array<string>,
    ) {}
}