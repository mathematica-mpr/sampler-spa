import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuResource } from './menu.resource';
import { MenuService } from './menu.service';
import { GraphsService } from './graphs.service';
import { GraphResource } from './graph.resource';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent],
    providers: [MenuResource, MenuService, GraphsService, GraphResource]
})
export class CoreModule {}
