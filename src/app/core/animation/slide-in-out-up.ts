import { trigger, transition, animate, style } from '@angular/animations';

export const slideInOutUp = trigger('slideUp', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-out', style({ transform: 'translateY(-100%)' }))
    ])
]);
