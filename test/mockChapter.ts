import { Chapter } from 'src/app/core/models/chapter';

export const mockChapter: Chapter = {
    title: 'The final Chapter',
    order: 0,
    descriptions: [
        {
            title: 'Our awesome data',
            content: 'This is what we did with our awesome data'
        }
    ],
    inputs: [
        { name: 'prevalence', order: 0 },
        { name: 'TP', order: 1 },
        { name: 'FP', order: 2 },
        { name: 'TN', order: 3 }
    ],
    graphs: [
        {
            title: 'Confusion Errors',
            graphs: [
                {
                    title: 'FP',
                    data: [{ x: 0, y: 0 }]
                },
                {
                    title: 'TP',
                    data: [{ x: 0, y: 0 }]
                },
                {
                    title: 'FN',
                    data: [{ x: 0, y: 0 }]
                },
                {
                    title: 'TN',
                    data: [{ x: 0, y: 0 }]
                }
            ]
        }
    ]
};
