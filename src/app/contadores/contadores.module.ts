import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContadorComponent } from '../contadores/contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadoresModule { }