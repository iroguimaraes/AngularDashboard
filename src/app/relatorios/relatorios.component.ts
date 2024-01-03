import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';

export interface Relatorios {
  id: number;
  descricao: string;
  tags: string;
  arquivo: string;
}

const ELEMENT_DATA: Relatorios[] = [
  { id: 1, descricao: 'Relatório de Vendas Mensal', tags: 'Vendas, Mensal', arquivo: 'vendas_mensal.pdf' },
  { id: 2, descricao: 'Relatório Financeiro Trimestral', tags: 'Financeiro, Trimestral', arquivo: 'financeiro_trimestral.pdf' },
  { id: 3, descricao: 'Análise de Estoques', tags: 'Estoque, Análise', arquivo: 'analise_estoques.xlsx' },
  { id: 4, descricao: 'Relatório de Desempenho de Funcionários', tags: 'Recursos Humanos, Desempenho', arquivo: 'desempenho_funcionarios.doc' },
  { id: 5, descricao: 'Relatório de Feedback do Cliente', tags: 'Clientes, Feedback', arquivo: 'feedback_cliente.pdf' },
  { id: 6, descricao: 'Relatório de Produção Diária', tags: 'Produção, Diária', arquivo: 'producao_diaria.xlsx' },
  { id: 7, descricao: 'Relatório de Despesas Operacionais', tags: 'Financeiro, Despesas', arquivo: 'despesas_operacionais.pdf' },
  { id: 8, descricao: 'Análise de Market Share', tags: 'Marketing, Market Share', arquivo: 'analise_market_share.ppt' },
  { id: 9, descricao: 'Relatório de Segurança no Trabalho', tags: 'Recursos Humanos, Segurança', arquivo: 'seguranca_trabalho.pdf' },
  { id: 10, descricao: 'Relatório de Satisfação do Cliente', tags: 'Clientes, Satisfação', arquivo: 'satisfacao_cliente.docx' },
  { id: 11, descricao: 'Relatório de Tendências de Mercado', tags: 'Marketing, Tendências', arquivo: 'tendencias_mercado.pptx' },
  { id: 12, descricao: 'Análise de Retenção de Clientes', tags: 'Clientes, Retenção', arquivo: 'analise_retencao_clientes.xlsx' },
  { id: 13, descricao: 'Relatório de Desempenho do Site', tags: 'Tecnologia, Desempenho', arquivo: 'desempenho_site.pdf' },
  { id: 14, descricao: 'Relatório de Investimentos', tags: 'Financeiro, Investimentos', arquivo: 'investimentos.pdf' },
  { id: 15, descricao: 'Relatório de Eficácia de Marketing Digital', tags: 'Marketing, Digital', arquivo: 'eficacia_marketing_digital.doc' },
  { id: 16, descricao: 'Análise de Custos de Produção', tags: 'Produção, Custos', arquivo: 'analise_custos_producao.xlsx' },
  { id: 17, descricao: 'Relatório de Pesquisa de Mercado', tags: 'Marketing, Pesquisa', arquivo: 'pesquisa_mercado.pptx' },
  { id: 18, descricao: 'Relatório de Manutenção de Equipamentos', tags: 'Produção, Manutenção', arquivo: 'manutencao_equipamentos.pdf' },
  { id: 19, descricao: 'Relatório de Desempenho de TI', tags: 'Tecnologia, Desempenho', arquivo: 'desempenho_ti.docx' },
  { id: 20, descricao: 'Análise de Rentabilidade', tags: 'Financeiro, Rentabilidade', arquivo: 'analise_rentabilidade.pdf' }
];


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.scss'
})
export class RelatoriosComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'descricao', 'tags', 'arquivo', 'edit'];
  dataSource = new MatTableDataSource<Relatorios>(ELEMENT_DATA);
  ultimoRelatorio: Relatorios | undefined

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // pegando relatorio com maior id
  maiorId = ELEMENT_DATA.reduce((objetoAnterior, objetoAtual) => {
    return objetoAnterior.id > objetoAtual.id ? objetoAnterior : objetoAtual;
  });

}