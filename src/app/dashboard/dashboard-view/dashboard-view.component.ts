import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ComputeResource } from '../../core/compute.resource';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
    randomResult: number = 0;
    arrayOfStuff: string[] = ['hello', 'this is a story', 'about probability', 'and', 'disease', 'the end'];
    selectedChapter = -1;
    selectedArray: string[] = [];
    dashboardClass = 'dashboard-view';

    constructor(private el: ElementRef, private computeResource: ComputeResource) {}

    @HostListener('wheel', ['$event'])
    onScroll(e: WheelEvent) {
        if (e.deltaY < 0) {
            console.log('scrolling up');
            this.previousChapter();
        }
        if (e.deltaY > 0) {
            console.log('scrolling down', e);
            this.nextChapter();
        }
    }

    ngOnInit() {
        this.nextChapter();
    }

    nextChapter() {
        if (this.selectedChapter < this.arrayOfStuff.length - 1) {
            this.selectedChapter++;
            this.selectedArray.pop();
            this.selectedArray.push(this.arrayOfStuff[this.selectedChapter]);
        }
    }

    previousChapter() {
        if (this.selectedChapter > 0) {
            this.selectedChapter--;
            this.selectedArray.pop();
            this.selectedArray.push(this.arrayOfStuff[this.selectedChapter]);
        }
    }

    runRegression(num: number) {
        if (num) {
            this.computeResource.getRegression(num).subscribe(
                result => {
                    console.log(result);
                    this.randomResult = result['result'];
                },
                error => {
                    console.error('could not run regression', error);
                }
            );
        }
    }
}
