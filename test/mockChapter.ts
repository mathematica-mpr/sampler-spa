import { Chapter } from 'src/app/core/models/chapter';

export const mockChapter: Chapter = {
    title: 'The final Chapter',
    order: 0,
    descriptions: [
        {
            name: 'FinalChapterDescription',
            title: 'Our awesome data',
            order: 0,
            content: 'This is what we did with our awesome data'
        }
    ],
    inputs: [
        { name: 'prevalence', title: 'Prevalence', order: 0, type: 'number' },
        { name: 'TP', title: 'True Positive', order: 1, type: 'number' },
        { name: 'FP', title: 'False Positive', order: 2, type: 'number' },
        { name: 'TN', title: 'True Negative', order: 3, type: 'number' }
    ],
    graphs: [
        {
            name: 'confusionErrorGraph',
            title: 'Confusion Errors',
            order: 0,
            graphs: [
                {
                    title: 'FP',
                    order: 0,
                    name: 'FPGraph',
                    type: 'line',
                    data: [{ x: 0, y: 0 }]
                },
                {
                    title: 'TP',
                    order: 1,
                    name: 'TPGraph',
                    type: 'line',
                    data: [{ x: 0, y: 0 }]
                },
                {
                    title: 'FN',
                    order: 2,
                    name: 'FNGraph',
                    type: 'line',
                    data: [{ x: 0, y: 0 }]
                },
                {
                    title: 'TN',
                    order: 3,
                    name: 'TNGraph',
                    type: 'line',
                    data: [{ x: 0, y: 0 }]
                }
            ]
        }
    ]
};
