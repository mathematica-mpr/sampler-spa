export interface Chapter {
    title: string;
    order: number;
    descriptions: ChapterDescription[];
    inputs: ChapterInput[];
    graphs: ChapterGraph[];
}

export interface ChapterElement {
    name: string;
    title: string;
    order: number;
    type?: string;
}

export interface ChapterDescription extends ChapterElement {
    content: string;
}

export interface ChapterInput extends ChapterElement {}

export interface ChapterGraph extends ChapterElement {
    graphs: Graph[];
}

export interface Graph extends ChapterElement {
    data: any[];
}
