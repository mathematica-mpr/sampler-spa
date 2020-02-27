import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ZoomService {
    constructor() {}

    zoomIn(div: HTMLElement): void {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const bbox: DOMRect = <DOMRect>div.getBoundingClientRect();
        const xDenom: number = width < height ? 5 : 3;
        const yDenom: number = width < height ? 5 : 5;
        const tx = (width - bbox.width * 2) / xDenom - bbox.x;
        const ty = (height - bbox.height * 2) / yDenom - bbox.y;
        div.classList.add('zoomed');
        div.style.setProperty('--x', tx + 'px');
        div.style.setProperty('--y', ty + 'px');
    }

    zoomOut(div: HTMLElement): void {
        div.classList.remove('zoomed');
    }
}
