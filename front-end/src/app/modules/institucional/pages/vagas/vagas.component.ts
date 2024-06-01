import { Component, OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { IbgeService } from '@app/core/services/ibge.service';
import { SelectComponentOption } from '@app/shared/components/select/select.component';
import { IBGEUFResponse } from '@app/shared/interfaces/ibge';
import { Subject, first, takeUntil } from 'rxjs';
import { signal } from '@angular/core';
import { VagasService } from '@app/core/services/vagas.service';
import { transformDate } from '@app/shared/utils/transform';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VagasParams } from '@app/shared/interfaces/vagas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  buscaForm!: FormGroup;
  termo = '';
  ufs: Array<SelectComponentOption> = [];
  city: Array<SelectComponentOption> = [];
  tipoVaga = [
    { id: 'Efetivo', value: 'Efetivo', selected: false },
    { id: 'Pessoa Jurídica', value: 'Pessoa Jurídica', selected: false },
    { id: 'Estágio', value: 'Estágio', selected: false },
    { id: 'Temporário', value: 'Temporário', selected: false },
    { id: 'Aprendiz', value: 'Aprendiz', selected: false },
    { id: 'Terceiro', value: 'Terceiro', selected: false },
    { id: 'Voluntário', value: 'Voluntário', selected: false },
    { id: 'Trainee', value: 'Trainee', selected: false },
    { id: 'Freelancer', value: 'Freelancer', selected: false },
  ];

  vagasData: WritableSignal<Array<any>> = signal([]);

  isLoading = false;
  countResult = 0;

  constructor(private router: Router, private ibgeService: IbgeService, private formBuilder: FormBuilder, private vagasService: VagasService) { }

  ngOnInit(): void {
    this.createForm();
    this.searchVagas();
    this.getUf();
    this.getCity();
  }

  private createForm() {
    this.buscaForm = this.formBuilder.group({
      termo: [''],
      uf: [''],
      cidade: [''],
      tipoVaga: [''],
    });
  }

  navegarParaVaga(id: string) {
    this.router.navigate(['vagas', id]);
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
                id: uf.sigla,
                value: uf.nome,
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
                id: city.nome,
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
    const params = this.buscaForm.value as VagasParams;
    this.isLoading = true;

    this.vagasService.getVagas(params).pipe(first(), takeUntil(this._unsubscribeAll)).subscribe({
      next: (response: any) => {

        const data = response.data.map((vaga: any) => {
          return {
            id: vaga.id,
            titulo: vaga.titulo,
            data_publicacao: transformDate(vaga.data_publicacao),
            estado: vaga.estado,
            cidade: vaga.cidade,
            tbm_pcd: vaga.tbm_pcd,
            modelo_trabalho: vaga.modelo_trabalho,
            tipo: vaga.tipo,
            logo: vaga.empresa.logotipo_url,
            empresa: vaga.empresa.nome,
            // empresa: vaga.company,
            // localizacao: vaga.location,
            // descricao: vaga.description,
            // salario: vaga.salary,
            // data: vaga.published_at,
            // tipo: vaga.type,
            // modelo: vaga.contract,
            // pcD: vaga.is_pcd,
            // logo: vaga.company_logo,
          };
        });

        this.vagasData.set(data);
        this.countResult = data.length;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Ocorreu um erro ao buscar as vagas', error);
        this.isLoading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}

