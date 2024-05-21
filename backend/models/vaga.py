from typing import Optional
from pydantic import BaseModel

class Vaga(BaseModel):
    id: Optional[int] = None
    empresa: str
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
    


    model_config = {
        'json_schema_extra': {
            "example": {
                "empresa": "Empresa",
                "titulo": "Título",
                "descricao": "Descrição",
                "salario": 1000,
                "estado": "Estado",
                "cidade": "Cidade",
                "endereco": "Endereço",
                "numero": "Número",
                "complemento": "Complemento",
                "cep": "CEP",
                "bairro": "Bairro",
                "pais": "País",
                "tipo": "CLT",
                "modelo_contratacao": "Presencial",
                "nivel": "Júnior",
                "area": "Área",
                "data_publicacao": "2021-09-01",
                "data_expiracao": "2021-09-30",
                "criado_por": "Criado Por",
                "status": "Aberta",
                "quantidade_vagas": 1,
                "exibe_salario": True,
                "exibe_quantidade_vagas": True
            }
        }
    }


    