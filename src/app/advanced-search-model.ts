export class AdvancedSearchModel {
    constructor(
        public q: string,
        public language?: string,
        public user?: string,
        public size?: string,
        public star?: string,
        public topic?: string
    ) {}
}
