export class Chapter {
    title: string;
    order: number;
    descriptions: ChapterDescription[];
    inputs: ChapterInput[];
    graphs: ChapterGraph[];
}

export class ChapterElement {
    name: string;
    title: string;
    order: number;
    type?: string;
    data?: any[];
}

export class ChapterDescription extends ChapterElement {
    content: string;
}

export class ChapterInput extends ChapterElement {}

export class ChapterGraph extends ChapterElement {
    data?: any[];
    graphs?: ChapterGraph[];
}
