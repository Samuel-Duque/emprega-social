import datetime
from typing import Optional
from pydantic import BaseModel

class Vaga(BaseModel):
    id_empresa: str
    titulo: str
    descricao: str
    salario: float
    estado: str
    cidade: str
    endereco: str
    numero: str
    complemento: str
    cep: str
    bairro: str
    pais: str
    tipo: str # 'Efetivo', 'Pessoa Jurídica', 'Estágio', 'Temporário', 'Aprendiz', 'Terceiro', 'Voluntário', 'Trainee',  'Freelancer'
    area: str # Desenvolvimento, Design, Marketing, Vendas, Administrativo
    data_publicacao: str
    data_expiracao: str
    criado_por: str
    status: str # Aberta, Fechada, Em andamento
    quantidade_vagas: int
    exibe_salario: bool
    exibe_quantidade_vagas: bool
    exclusivo_pcd: bool
    tbm_pcd: bool
    modelo_trabalho: str # Presencial, Remoto, Híbrido


    model_config = {
        'json_schema_extra': {
            "example": {
                "id_empresa": "1",
                "titulo": "Desenvolvedor Full Stack",
                "descricao": "Desenvolvimento de aplicações web",
                "salario": 5000.00,
                "estado": "PE",
                "cidade": "Recife",
                "endereco": "Rua da Empresa",
                "numero": "123",
                "complemento": "Sala 2",
                "cep": "12345-678",
                "bairro": "Bairro da Empresa",
                "pais": "Brasil",
                "tipo": "Efetivo",
                "area": "Desenvolvimento",
                "data_publicacao": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "data_expiracao": "2022-01-31 23:59:59",
                "criado_por": "1",
                "status": "Publicada",
                "quantidade_vagas": 1,
                "exibe_salario": True,
                "exibe_quantidade_vagas": True,
                "exclusivo_pcd": False,
                "tbm_pcd": False,
                "modelo_trabalho": "Remoto"
            }
        }
    }


class VagaSearch(BaseModel):
    termo: str
    uf: str
    cidade: str
    tipoVaga: str

    model_config = {
        'json_schema_extra': {
            "example": {
                "termo": "Desenvolvedor",
                "uf": "SP",
                "cidade": "São Paulo",
                "tipoVaga": "Efetivo"
            }
        }
    } 