import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Union

#Rotas
from modules.auth import authrouter
from modules.candidato import candidatorouter

app = FastAPI(
    title="API do Projeto Emprega Social", 
    description="O Emprega Social é uma plataforma web que funciona como uma agência de emprego com foco no social, conectando demandas de trabalho de empresas e órgãos públicos com pessoas em busca de emprego, priorizando e qualificando grupos sociais vulneráveis, como jovens em seu primeiro emprego ou em situação de risco, pessoas com deficiência e mulheres vítimas de violência.", 
    version="1.0")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return "Olá"

app.include_router(authrouter.router, prefix="/api/v1/auth")
app.include_router(candidatorouter.router, prefix="/api/v1/candidato")

# Inicializando o servidor
if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)