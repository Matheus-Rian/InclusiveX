import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./telaInicial/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'detalhes/treinamento-diario',
    pathMatch: 'full',
    loadChildren: () => import('./treinamentoDiario/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'detalhes/alimentacao-diaria',
    pathMatch: 'full',
    loadChildren: () => import('./alimentacaoDiaria/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'detalhes/sono-diario',
    pathMatch: 'full',
    loadChildren: () => import('./sonoDiario/tab4.module').then(m => m.Tab4PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
