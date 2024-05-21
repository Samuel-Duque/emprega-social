from typing import Optional
from pydantic import BaseModel

class Vaga(BaseModel):
    id: Optional[int]
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


    model_config = {
        'json_schema_extra': {
            "example": {
                "id": 1,
                "empresa": "Empresa",
                "titulo": "Desenvolvedor Fullstack",
                "descricao": "Descrição da vaga",
                "salario": 5000.00,
                "estado": "SP",
                "cidade": "São Paulo",
                "endereco": "Rua das Flores",
                "numero": "123",
                "complemento": "Apto 123",
                "cep": "12345-678",
                "bairro": "Centro",
                "pais": "Brasil",
                "data_publicacao": "2021-10-01",
                "data_expiracao": "2021-10-31",
                "tipo": "CLT",
                "modelo_contratacao": "Remoto",
                "nivel": "Pleno",
                "area": "Tecnologia"
            }
        }
    }


    