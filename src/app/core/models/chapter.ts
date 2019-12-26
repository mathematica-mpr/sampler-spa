export class Chapter {
    title: string;
    name: string;
    order: number;
    descriptions: ChapterDescription[];
    menus: Menu[];
    graphs: Graph[];
}

export class Menu {
    guid: string;
    inputs: ChapterInput[];
}
export class ChapterElement {
    name: string;
    title: string;
    order: number;
    type?: string;
    data?: any[];
    content?: string;
}

export class ChapterDescription extends ChapterElement {}

export class ChapterInput extends ChapterElement {
    inputs?: ChapterInput[];
    max?: number;
    min?: number;
    init?: number;
    step?: number;
    value: number;
}

export class Graph extends ChapterElement {
    graphItems: GraphItem[];
    graphs?: Graph[];
}

export class GraphItem {
    guid: string;
    coordinates: Coordinates[];
}

export class Coordinates {
    X: number;
    Y: number;
    C: number;
}
