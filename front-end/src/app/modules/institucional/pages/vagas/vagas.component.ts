import { Component, OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { IbgeService } from '@app/core/services/ibge.service';
import { SelectComponentOption } from '@app/shared/components/select/select.component';
import { IBGEUFResponse } from '@app/shared/interfaces/ibge';
import { Subject, first, takeUntil } from 'rxjs';
import { signal } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();


  ufs: Array<SelectComponentOption> = [];
  city: Array<SelectComponentOption> = [];
  // vagasData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // $vagasData = this.vagasData.asObservable();

  vagasData: WritableSignal<Array<any>> = signal([]);

  isLoading = false;
  countResult = 0;

  vagas = [
    {
      titulo: 'Desenvolvedor Front-end',
      empresa: 'Tech Solutions',
      localizacao: 'Igarassu, PE',
      descricao:
        'Estamos buscando um desenvolvedor front-end com experiência em Angular e TypeScript.',
      salario: 'R$ 6.000 - R$ 8.000',
      data: 'Publicado há 3 dias',
      tipo: 'Remoto',
      modelo: 'Efetivo',
      pcD: true,
      logo: '/assets/images/logo1.png',
    },
    {
      titulo: 'Analista de Dados',
      empresa: 'Data Insights',
      localizacao: 'Igarassu, PE',
      descricao: 'Analista de Dados com experiência em SQL e Python.',
      salario: 'R$ 5.000 - R$ 7.000',
      data: 'Publicado há 5 dias',
      tipo: 'Híbrido',
      modelo: 'Efetivo',
      pcD: false,
      logo: '/assets/images/logo2.png',
    },
    {
      titulo: 'Designer UX/UI',
      empresa: 'Creative Agency',
      localizacao: 'Goiana, PE',
      descricao:
        'Procuramos um designer UX/UI para criar experiências de usuário incríveis.',
      salario: 'R$ 4.500 - R$ 6.500',
      data: 'Publicado há 7 dias',
      tipo: 'Presencial',
      modelo: 'Estágio',
      pcD: true,
      logo: '/assets/images/logo3.png',
    },
    {
      titulo: 'Tech Lead',
      empresa: 'Creative Agency',
      localizacao: 'Goiana, PE',
      descricao:
        'Procuramos um líder técnico para liderar nossa equipe de desenvolvimento.',
      salario: 'R$ 8.000 - R$ 10.000',
      data: 'Publicado há 7 dias',
      tipo: 'Presencial',
      modelo: 'Efetivo',
      pcD: true,
      logo: '/assets/images/logo3.png',
    },
  ];

  constructor(private ibgeService: IbgeService) {}

  ngOnInit(): void {
    this.searchVagas();
    this.getUf();
    this.getCity();
  }

  // Utiliza o serviço de IBGE para buscar as UFs
  getUf() {
    this.ibgeService
      .getUf()
      .pipe(first(), takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response: Array<IBGEUFResponse>) => {
          const data = response.map(
            (uf: IBGEUFResponse): SelectComponentOption => {
              return {
                id: uf.id,
                value: uf.sigla,
                selected: false,
              };
            }
          );

          this.ufs = data;

        },
        error: (error) => {
          console.error('Ocorreu um erro ao buscar as UFs', error);
        },
      });
  }

  getCity() {
    this.ibgeService
    .getCity('PE')
    .pipe(first(), takeUntil(this._unsubscribeAll))
    .subscribe({
      next: (response: Array<IBGEUFResponse>) => {
        const data = response.map(
          (city: IBGEUFResponse): SelectComponentOption => {
            return {
              id: city.id,
              value: city.nome,
              selected: false,
            };
          }
        );

        this.city = data;
      },
      error: (error) => {
        console.error('Ocorreu um erro ao buscar as cidades', error);
      },
    });
  }

  // Simulanado o carregamento das vagas
  searchVagas() {
    this.isLoading = true;
    setTimeout(() => {
      this.vagasData.set(this.vagas);
      this.isLoading = false;
      this.countResult = this.vagasData().length;
    }, 1000);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
function toSignal(arg0: any, arg1: { initialValue: null; }) {
  throw new Error('Function not implemented.');
}

