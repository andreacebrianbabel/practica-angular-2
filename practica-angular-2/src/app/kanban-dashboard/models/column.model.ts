export class Column {
    constructor(public name: string, public id: string, public tasks: [{
        name: string;
        priority: number;
        estimatedTime: number
    }]) {}
}