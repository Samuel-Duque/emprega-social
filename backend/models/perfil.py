from typing import Optional
from pydantic import BaseModel

class Perfil(BaseModel):

    nome: str
    sobrenome: str
    id: str
    foto_perfil: str
   
    model_config = {
        'json_schema_extra': {
            "example": {
                "nome": "Vitor",
                "sobrenome": "Gabriel",
                "id": "b3a8e25c-c6ed-4cc1-a5dc-00e9cc138d76",
                "foto_perfil": "https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg"
            }
        }
    }

    def model_dump(self):
        return {
            "nome": self.nome,
            "sobrenome": self.sobrenome,
            'id': self.id,
            'foto_perfil': self.foto_perfil
        }
    
