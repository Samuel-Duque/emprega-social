from typing import Optional
from pydantic import BaseModel

class Vaga(BaseModel):
    id: Optional[int] = None
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
    tipo: str # CLT, PJ, Estágio
    modelo_contratacao: str # Presencial, Remoto, Híbrido
    nivel: str # Júnior, Pleno, Sênior, Especialista
    area: str
    data_publicacao: str
    data_expiracao: str
    criado_por: str
    status: str # Aberta, Fechada, Em andamento
    quantidade_vagas: int
    exibe_salario: bool
    exibe_quantidade_vagas: bool
    exclusivo_pcd: bool
    permite_pcd: bool
    


    model_config = {
        'json_schema_extra': {
            "example": {
                "id_empresa": "1",
                "titulo": "Desenvolvedor Python",
                "descricao": "Desenvolver aplicações em Python",
                "salario": 5000.00,
                "estado": "SP",
                "cidade": "São Paulo",
                "endereco": "Rua dos Bobos",
                "numero": "0",
                "complemento": "",
                "cep": "00000-000",
                "bairro": "Vila do Chaves",
                "pais": "Brasil",
                "tipo": "CLT",
                "modelo_contratacao": "Presencial",
                "nivel": "Pleno",
                "area": "Desenvolvimento",
                "data_publicacao": "2021-09-01",
                "data_expiracao": "2021-09-30",
                "criado_por": "1",
                "status": "Aberta",
                "quantidade_vagas": 1,
                "exibe_salario": True,
                "exibe_quantidade_vagas": True,
                "exclusivo_pcd": False,
                "permite_pcd": True
            }
        }
    }


    