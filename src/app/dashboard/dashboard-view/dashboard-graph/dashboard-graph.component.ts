import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
    selector: 'app-dashboard-graph',
    templateUrl: './dashboard-graph.component.html',
    styleUrls: ['./dashboard-graph.component.css'],
    animations: [
        trigger('flyInOut', [
            state(
                'in',
                style({
                    width: 120,
                    transform: 'translateY(0)',
                    opacity: 1
                })
            ),
            transition('void => *', [
                style({ width: 10, transform: 'translateY(50px)', opacity: 0 }),
                group([
                    animate(
                        '0.5s 0.1s ease',
                        style({
                            transform: 'translateY(0)',
                            width: 300
                        })
                    ),
                    animate(
                        '0.5s ease',
                        style({
                            opacity: 1
                        })
                    )
                ])
            ]),
            transition('* => void', [
                group([
                    animate(
                        '0.5s ease',
                        style({
                            transform: 'translateY(-50px)',
                            width: 300
                        })
                    ),
                    animate(
                        '0.5s 0.5s ease',
                        style({
                            opacity: 0
                        })
                    )
                ])
            ])
        ])
    ]
})
export class DashboardGraphComponent implements OnInit {
    @Input() selectedArray: string[];
    constructor() {}

    ngOnInit() {
        console.log(this.selectedArray);
    }
}
