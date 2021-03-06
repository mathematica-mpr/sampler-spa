import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ComponentFactoryResolver
} from '@angular/core';
import { ChapterItem } from '../../../core/models/chapter-item';
import { ChapterDirective } from '../chapter.directive';

@Component({
    selector: 'app-chapter-item',
    templateUrl: './chapter-item.component.html',
    styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit {
    @Input() chapterItem: ChapterItem;
    @ViewChild(ChapterDirective) chapterHost: ChapterDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.chapterItem.component
        );

        const viewContainerRef = this.chapterHost.viewContainerRef;

        viewContainerRef.clear();

        const component = viewContainerRef.createComponent(componentFactory);

        component.instance['config$'] = this.chapterItem.chapterElement;
    }
}
