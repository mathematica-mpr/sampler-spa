import { trigger, transition, animate, style } from '@angular/animations';

export const slideInOutRight = trigger('slideRight', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-out', style({ transform: 'translateX(100%)' }))
    ])
]);
