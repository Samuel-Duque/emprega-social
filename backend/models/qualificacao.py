from typing import Optional
from pydantic import BaseModel

class Qualificacao(BaseModel):
    
    titulo: str
    descricao: str
    duracao: str # 3 meses, 6 meses, 1 ano
    modalidade: str # Presencial, Online, Híbrido
    dificuldade: str # Básico, Intermediário, Avançado
    id_categoria: str # Matemática, Lógica, Lingua Portuguesa
    banner_url: str

    model_config = {
        'json_schema_extra': {
            "example": {
                "titulo": "Curso de Python",
                "descricao": "Curso de Python para iniciantes",
                "duracao": "3 meses",
                "modalidade": "Online",
                "dificuldade": "Básico",
                "id_categoria": "1",
                "banner_url": " "
            }
        }
    }

    def model_dump(self):
        return {
            "titulo": self.titulo,
            "descricao": self.descricao,
            "duracao": self.duracao,
            "modalidade": self.modalidade,
            "dificuldade": self.dificuldade,
            "id_categoria": self.id_categoria,
            "banner_url": self.banner_url
        }
