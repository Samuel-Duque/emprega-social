from fastapi import APIRouter, Depends

from core.auth import validate_jwt
from modules.candidato.models.vaga import Vaga


router = APIRouter(tags=["vaga"])

# Vagas
@router.get("/vagas")
async def obter_vagas(page: int, pageSize: int):
    return {"page": page, "pageSize": pageSize}

@router.get("/vagas/{id}")
async def obter_vaga(id: int):
    return {id}

@router.get("/vagas/criar", response_model=Vaga)
async def obter_vaga(vaga: Vaga):
    
    return vaga

# Perfil
@router.get("/perfil", )
async def obter_perfil(dependencies=[Depends(validate_jwt)]):
    return {"perfil"}