from typing import Optional
from pydantic import BaseModel

class Candidatura(BaseModel):

    id_vaga: str
    id_candidato: str
   
    model_config = {
        'json_schema_extra': {
            "example": {
                "id_vaga": "d7b1cd69-a2e9-4c8f-88a1-d760741e0378",
                "id_candidato": "3e6952c7-fb3c-4bbc-bd5a-1703e8a6c832",
            }
        }
    }

    def model_dump(self):
        return {
            "id_vaga": self.id_vaga,
            'id_candidato': self.id_candidato,
        }
    
