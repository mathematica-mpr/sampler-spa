import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryViewComponent } from './story-view/story-view.component';

const routes: Routes = [
    {
        path: 'story',
        component: StoryViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoryRoutingModule {}
