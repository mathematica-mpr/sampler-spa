import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ComponentFactoryResolver,
    Type
} from '@angular/core';
import { ChapterItem } from '../../../core/models/chapter-item';
import { ChapterDirective } from '../chapter.directive';
import { REGISTRY } from 'src/app/core/chapter-item.resource';
import { BehaviorSubject } from 'rxjs';
import { ChapterElement } from 'src/app/core/models/chapter';

@Component({
    selector: 'app-chapter-item',
    templateUrl: './chapter-item.component.html',
    styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit {
    @Input() chapterItem: ChapterElement;
    @ViewChild(ChapterDirective, { static: true }) chapterHost: ChapterDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.getComponent(this.chapterItem.type)
        );
        const viewContainerRef = this.chapterHost.viewContainerRef;
        viewContainerRef.clear();
        const component = viewContainerRef.createComponent(componentFactory);
        component.instance['config'] = this.chapterItem;
    }

    getComponent(chartType: string): Type<any> {
        return REGISTRY[chartType];
    }
}
