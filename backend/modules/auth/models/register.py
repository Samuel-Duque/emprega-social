from pydantic import BaseModel

# O Emprega Social é uma plataforma web que funciona como uma agência de 
# emprego com foco no social, conectando demandas de trabalho de empresas e 
# órgãos públicos com pessoas em busca de emprego, priorizando e qualificando 
# grupos sociais vulneráveis, como jovens em seu primeiro emprego ou em situação de risco,
# pessoas com deficiência e mulheres vítimas de violência.

class Register(BaseModel):
    email: str
    password: str