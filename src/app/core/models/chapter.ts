export interface Chapter {
    title: string;
    order: number;
    descriptions: ChapterDescription[];
    inputs: ChapterInput[];
    graphs: ChapterGraph[];
}

export interface ChapterDescription {
    title: string;
    content: string;
}

export interface ChapterInput {
    name: string;
    order: number;
}

export interface ChapterGraph {
    title: string;
    graphs: Graph[];
}

export interface Graph {
    title: string;
    data: any[];
}
