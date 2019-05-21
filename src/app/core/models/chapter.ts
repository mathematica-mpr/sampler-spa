export interface Chapter {
    title: string;
    order: number;
    descriptions: ChapterDescription[];
    inputs: ChapterInput[];
    graphs: (BaseChapterGraph | CompositeChapterGraph)[];
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

export interface BaseChapterGraph extends ChapterElement {
    data: any[];
}

export interface CompositeChapterGraph extends ChapterElement {
    graphs: BaseChapterGraph[];
}
