from typing import Optional
from pydantic import BaseModel

class Perfil(BaseModel):

    id: str
    nome: str
    sobrenome: str
    foto_perfil: str
    data_nascimento: str
   
    model_config = {
        'json_schema_extra': {
            "example": {
                "id": "1aa53296-ad39-4f15-be93-7006a87f5844",
                "nome": "Vitor",
                "sobrenome": "Gabriel",
                "foto_perfil": "https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg",
                "data_nascimento": "2002-03-25"
            }
        }
    }

    def model_dump(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "sobrenome": self.sobrenome,
            'foto_perfil': self.foto_perfil,
            'data_nascimento': self.data_nascimento
        }
    
