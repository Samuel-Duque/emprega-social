from pydantic import BaseModel

# O Emprega Social é uma plataforma web que funciona como uma agência de 
# emprego com foco no social, conectando demandas de trabalho de empresas e 
# órgãos públicos com pessoas em busca de emprego, priorizando e qualificando 
# grupos sociais vulneráveis, como jovens em seu primeiro emprego ou em situação de risco,
# pessoas com deficiência e mulheres vítimas de violência.

class Register(BaseModel):
  name: str
  lastName: str
  dataNascimento: str
  email: str
  password: str
  terms: bool

  model_config = {
    'json_schema_extra': {
      "example": {
        "name": "João",
        "lastName": "Silva",
        "dataNascimento": "1990-01-01",
        "email": "teste123@gmail.com",
        "password": "123456",
        "terms": True
      }
    },
  }