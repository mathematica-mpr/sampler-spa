import { Chapter } from 'src/app/core/models/chapter';

export const mockChapter: Chapter = {
    title: 'The final Chapter',
    name: 'finalChapter',
    order: 0,
    descriptions: [
        {
            name: 'FinalChapterDescription',
            title: 'Our Findings',
            order: 0,
            type: 'SectionDescription',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tortor eu interdum congue. Fusce convallis felis purus, non scelerisque arcu lobortis ultricies. Donec dapibus mauris sed orci vulputate, eu ultrices urna maximus. Ut id euismod eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean blandit odio vitae enim ornare, sed tristique tellus accumsan.'
        }
    ],
    inputs: [
        {
            name: 'population',
            title: 'Population size',
            order: 0,
            type: 'RangeInput'
        },
        {
            name: 'prevalence',
            title: 'Prevalence',
            order: 1,
            type: 'RangeInput'
        },
        {
            name: 'confusionErrorInput',
            title: 'Confusion Errors',
            order: 2,
            type: 'ConfusionErrorInput',
            inputs: [
                { name: 'TP', title: 'True Positive', order: 1, type: 'NumberInput' },
                { name: 'FP', title: 'False Positive', order: 2, type: 'NumberInput' },
                { name: 'FN', title: 'False Negative', order: 3, type: 'NumberInput' },
                { name: 'TN', title: 'True Negative', order: 4, type: 'NumberInput' }
            ]
        }
    ],
    graphs: [
        {
            name: 'modelPerformanceGraph',
            title: 'Model Performance',
            order: 1,
            type: 'ModelPerformanceGraph',
            graphs: [
                {
                    title: 'PPV (precision)',
                    order: 0,
                    name: 'ppv',
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
                    title: 'NPV',
                    order: 1,
                    name: 'npv',
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
                    title: 'Sensitivity (recall)',
                    order: 2,
                    name: 'sensitivity',
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
                    title: 'Specificity',
                    order: 3,
                    name: 'specificity',
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
        },
        {
            name: 'confusionErrorGraph',
            title: 'Confusion Errors',
            order: 1,
            type: 'ConfusionErrorGraph',
            graphs: [
                {
                    title: 'TP',
                    order: 0,
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
                    title: 'FP',
                    order: 1,
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
