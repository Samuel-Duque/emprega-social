from typing import Optional
from pydantic import BaseModel

class Candidatura(BaseModel):

    id_vaga: str
    id_candidato: str
   
    model_config = {
        'json_schema_extra': {
            "example": {
                "id_vaga": "d7b1cd69-a2e9-4c8f-88a1-d760741e0378",
                "id_candidato": "0efa5403-5903-408d-a2af-a4dd561c6016",
            }
        }
    }

    def model_dump(self):
        return {
            "id_vaga": self.id_vaga,
            'id_candidato': self.id_candidato,
        }
    
