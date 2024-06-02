import json
from fastapi.responses import JSONResponse
import uvicorn
from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from typing import Union

from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

#Rotas
from modules.auth import authrouter
from modules.vagas import vagasrouter
from modules.qualificacoes import qualificacoesrouter

app = FastAPI(
    title="API do Projeto Emprega Social", 
    description="O Emprega Social é uma plataforma web que funciona como uma agência de emprego com foco no social, conectando demandas de trabalho de empresas e órgãos públicos com pessoas em busca de emprego, priorizando e qualificando grupos sociais vulneráveis, como jovens em seu primeiro emprego ou em situação de risco, pessoas com deficiência e mulheres vítimas de violência.", 
    version="1.0")

origins = [
    "http://127.0.0.1:4200",
    "http://localhost:4200",
    
]

app.add_middleware(
 CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "HEAD", "OPTIONS"],
    allow_headers=["Access-Control-Allow-Headers", "Content-Type", "Authorization", "Access-Control-Allow-Origin","Set-Cookie"],
)

@app.get("/")
def read_root():
    return "Olá"

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(status_code=exc.status_code, content={"error_message": str(exc.detail)})

app.include_router(authrouter.router, prefix="/api/v1/auth")
app.include_router(vagasrouter.router, prefix="/api/v1/vagas")
app.include_router(qualificacoesrouter.router, prefix="/api/v1/qualificacoes")

# Inicializando o servidor
if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)

