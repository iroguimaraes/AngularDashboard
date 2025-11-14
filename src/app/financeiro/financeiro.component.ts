import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Relatorios } from '../relatorios/relatorios.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { DarkModeService } from '../DarkModeService';

export interface Financas {
  id: number;
  descricao: string;
  tags: string;
  valores: string;
}

const dadosFinanceiros: Financas[] = [
  { id: 1, descricao: 'Pagamento de Fornecedor', tags: 'contas, fornecedor', valores: ' -1000' },
  { id: 2, descricao: 'Receita de Vendas', tags: 'vendas', valores: '5000' },
  { id: 3, descricao: 'Despesas de Escritório', tags: 'despesas, escritório', valores: ' -300' },
  { id: 4, descricao: 'Pagamento de Salários', tags: 'salários', valores: ' -2000' },
  { id: 5, descricao: 'Reembolso de Viagem', tags: 'viagem, reembolso', valores: '300' },
  { id: 6, descricao: 'Investimento em Ações', tags: 'investimento, ações', valores: '2000' },
  { id: 7, descricao: 'Juros de Empréstimo', tags: 'empréstimo, juros', valores: ' -150' },
  { id: 8, descricao: 'Receita de Aluguel', tags: 'aluguel', valores: '1000' },
  { id: 9, descricao: 'Compra de Equipamentos', tags: 'compras, equipamentos', valores: ' -5000' },
  { id: 10, descricao: 'Dividendos Recebidos', tags: 'dividendos', valores: '800' },
  { id: 11, descricao: 'Gastos com Marketing', tags: 'marketing, despesas', valores: ' -600' },
  { id: 12, descricao: 'Receita de Consultoria', tags: 'consultoria', valores: '1200' },
  { id: 13, descricao: 'Pagamento de Impostos', tags: 'impostos', valores: ' -700' },
  { id: 14, descricao: 'Despesas de Manutenção', tags: 'manutenção, despesas', valores: ' -400' },
  { id: 15, descricao: 'Receita de Serviços', tags: 'serviços', valores: '3000' },
  { id: 16, descricao: 'Compra de Matéria-Prima', tags: 'compras, matéria-prima', valores: ' -800' },
  { id: 17, descricao: 'Reembolso de Despesas', tags: 'reembolso, despesas', valores: '150' },
  { id: 18, descricao: 'Pagamento de Aluguel', tags: 'aluguel', valores: ' -1200' },
  { id: 19, descricao: 'Despesas de Treinamento', tags: 'treinamento, despesas', valores: ' -300' },
  { id: 20, descricao: 'Receita de Royalties', tags: 'royalties', valores: '500' }
];

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.scss',
  imports: [CurrencyPipe, 
    // Essential
    CommonModule,
    // Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    // PrimeNG Chart Modules
    ChartModule ]
})
export class FinanceiroComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'descricao', 'tags', 'valores'];
  dataSource = new MatTableDataSource<Financas>(dadosFinanceiros);
  ultimoRelatorio: Relatorios | undefined

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  //Dark Mode Variables
  isDarkMode: boolean = false;
      
  constructor(private darkModeService: DarkModeService) {}
  ngOnInit() {
  // Dark Mode Settings
    this.darkModeService.isDarkMode$.subscribe((value) => {
          this.isDarkMode = value;
          const table = document.getElementsByClassName('financas-data-table');
        for (let i = 0; i < table.length; i++) {
          const tab = table[i];
          if (this.isDarkMode) {
            tab.classList.add('darker');
          } else {
            tab.classList.remove('darker');
          }
        }
        const pagination = document.getElementsByClassName('financas-data-table-pagination');
        for (let i = 0; i < pagination.length; i++) {
          const pag = pagination[i];
          if (this.isDarkMode) {
            pag.classList.add('darker');
          } else {
            pag.classList.remove('darker');
          }
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
