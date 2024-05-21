from fastapi import APIRouter, Depends

from modules.vagas.vagasservice import VagasService
from core.supabase import get_supabase_client
from core.auth import validate_jwt
from models.vaga import Vaga


router = APIRouter(tags=["Vagas"])

@router.get("/obter")
async def obter_vagas(page: int, pagesize: int):
    return {"page": page, "pageSize": pagesize}

@router.get("/obter/{id}")
async def obter_vaga(id: int):
    return {id}

@router.post("/criar")
async def criar_vaga(vaga: Vaga, token = Depends(validate_jwt)):
    return await VagasService.criar_vaga(vaga, token)

# Perfil
@router.get("/perfil")
async def obter_perfil():
    # supabase = await get_supabase_client()

    # user = supabase.auth.get_user(token)

    # response = user
    return {"D"}