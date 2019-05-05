export interface Chapter {
    title: string;
    order: number;
    descriptions: Description[];
    chapterInputs: ChapterInput[];
    chapterGraphs: ChapterGraph[];
}

export interface Description {
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
