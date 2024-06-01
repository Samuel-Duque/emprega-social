import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasService } from '@app/core/services/vagas.service';
import { transformDate, transformDateToBR } from '@app/shared/utils/transform';
import { first } from 'rxjs';

@Component({
  selector: 'app-visualizar-vaga',
  templateUrl: './visualizar-vaga.component.html',
  styleUrl: './visualizar-vaga.component.css'
})
export class VisualizarVagaComponent implements OnInit {

  isLoading = true;
  vagaData: any;

  constructor(private router: Router, private route: ActivatedRoute, private vagaService: VagasService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.carregarVaga(id);
    } else {
      this.router.navigate(['404']);
    }
  }

  carregarVaga(id: string) {
    // Manda o scroll para o topo da página
    window.scrollTo(0, 0);

    this.vagaService.getVaga(id).pipe(first()).subscribe({
      next: (response: any) => {

        if ('error_message' in response) {
          this.router.navigate(['404']);
        } else {
          this.isLoading = false;

          const vaga = response.data

          const data = {
            id: vaga.id,
            titulo: vaga.titulo,
            data_publicacao: transformDateToBR(vaga.data_publicacao),
            estado: vaga.estado,
            cidade: vaga.cidade,
            tbm_pcd: vaga.tbm_pcd,
            modelo_trabalho: vaga.modelo_trabalho,
            tipo: vaga.tipo,
            logo: vaga.empresa.logotipo_url,
            empresa: vaga.empresa.nome,
          }

          this.vagaData = data
        }

      },
      error: (error) => {
        this.router.navigate(['404']);
      }
    })
  }

  voltarVagas() {
    this.router.navigate(['vagas']);
  }

}
