import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [HeaderComponent, FooterComponent, MenuComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
