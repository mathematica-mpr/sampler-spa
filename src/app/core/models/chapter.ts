export class Chapter {
    title: string;
    order: number;
    descriptions: ChapterDescription[];
    inputs: ChapterInput[];
    graphs: (BaseChapterGraph | CompositeChapterGraph)[];
}

export class ChapterElement {
    name: string;
    title: string;
    order: number;
    type?: string;
}

export class ChapterDescription extends ChapterElement {
    content: string;
}

export class ChapterInput extends ChapterElement {}

export class BaseChapterGraph extends ChapterElement {
    data: any[];
}

export class CompositeChapterGraph extends ChapterElement {
    graphs: BaseChapterGraph[];
}
