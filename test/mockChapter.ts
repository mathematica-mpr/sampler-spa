import { Chapter } from 'src/app/core/models/chapter';

export const mockChapter: Chapter = {
    title: 'The final Chapter',
    order: 0,
    descriptions: [
        {
            name: 'FinalChapterDescription',
            title: 'Our awesome data',
            order: 0,
            type: 'SectionDescription',
            content: 'This is what we did with our awesome data'
        }
    ],
    inputs: [
        {
            name: 'prevalence',
            title: 'Prevalence',
            order: 0,
            type: 'NumberInput'
        },
        { name: 'TP', title: 'True Positive', order: 1, type: 'NumberInput' },
        { name: 'FP', title: 'False Positive', order: 2, type: 'NumberInput' },
        { name: 'TN', title: 'True Negative', order: 3, type: 'NumberInput' }
    ],
    graphs: [
        {
            name: 'lineGraph',
            title: 'Confusion Errors',
            order: 0,
            type: 'LineGraph',
            data: [
                { x: 0.1, y: 0.1 },
                { x: 0.5, y: 1 },
                { x: 1, y: 2 },
                { x: 1.5, y: 3 },
                { x: 2, y: 4 },
                { x: 4, y: 5 },
                { x: 5.5, y: 4 },
                { x: 6, y: 3 },
                { x: 6.5, y: 2 },
                { x: 7, y: 1 }
            ]
        },
        {
            name: 'confusionErrorGraph',
            title: 'Confusion Errors',
            order: 1,
            type: 'ConfusionErrorGraph',
            graphs: [
                {
                    title: 'FP',
                    order: 0,
                    name: 'fp',
                    type: 'LineGraph',
                    data: [
                        { x: 0.1, y: 0.1 },
                        { x: 0.5, y: 1 },
                        { x: 1, y: 2 },
                        { x: 1.5, y: 3 },
                        { x: 2, y: 4 },
                        { x: 4, y: 5 },
                        { x: 5.5, y: 4 },
                        { x: 6, y: 3 },
                        { x: 6.5, y: 2 },
                        { x: 7, y: 1 }
                    ]
                },
                {
                    title: 'TP',
                    order: 1,
                    name: 'tp',
                    type: 'LineGraph',
                    data: [
                        { x: 0.1, y: 0.1 },
                        { x: 0.5, y: 1 },
                        { x: 1, y: 2 },
                        { x: 1.5, y: 3 },
                        { x: 2, y: 4 },
                        { x: 4, y: 5 },
                        { x: 5.5, y: 4 },
                        { x: 6, y: 3 },
                        { x: 6.5, y: 2 },
                        { x: 7, y: 1 }
                    ]
                },
                {
                    title: 'FN',
                    order: 2,
                    name: 'fn',
                    type: 'line',
                    data: [
                        { x: 0.1, y: 0.1 },
                        { x: 0.5, y: 1 },
                        { x: 1, y: 2 },
                        { x: 1.5, y: 3 },
                        { x: 2, y: 4 },
                        { x: 4, y: 5 },
                        { x: 5.5, y: 4 },
                        { x: 6, y: 3 },
                        { x: 6.5, y: 2 },
                        { x: 7, y: 1 }
                    ]
                },
                {
                    title: 'TN',
                    order: 3,
                    name: 'tn',
                    type: 'LineGraph',
                    data: [
                        { x: 0.1, y: 0.1 },
                        { x: 0.5, y: 1 },
                        { x: 1, y: 2 },
                        { x: 1.5, y: 3 },
                        { x: 2, y: 4 },
                        { x: 4, y: 5 },
                        { x: 5.5, y: 4 },
                        { x: 6, y: 3 },
                        { x: 6.5, y: 2 },
                        { x: 7, y: 1 }
                    ]
                }
            ]
        }
    ]
};
