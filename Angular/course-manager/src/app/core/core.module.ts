import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Erro404Component } from "./component/Erro-404/erro-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent      
    ],
    imports:[
        RouterModule.forChild([
            //problemas na hora de ler a url. Por algum motivo o comando ** le qualquer url como 404, incluindo as urls corretas
            //acredito ser problema de ordem de prioridade.
        ])
    ],
    exports:[
        NavBarComponent
    ]
})

export class CoreModule{}