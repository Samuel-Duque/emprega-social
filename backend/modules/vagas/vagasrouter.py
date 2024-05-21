from fastapi import APIRouter, Depends

from modules.vagas.vagasservice import VagasService
from core.supabase import get_supabase_client
from core.auth import validate_jwt
from models.vaga import Vaga


router = APIRouter(tags=["Vagas"])

@router.get("/")
async def obter_vagas(page: int, pagesize: int):
    return {"page": page, "pageSize": pagesize}

@router.get("/{id}")
async def obter_vaga(id: int):
    return {id}

@router.post("/criar", response_model=Vaga)
async def criar_vaga(vaga: Vaga, token = Depends(validate_jwt)):
    return VagasService.criar_vaga(vaga, token)

# # Perfil
# @router.get("/perfil")
# async def obter_perfil(token = Depends(validate_jwt)):
#     supabase = await get_supabase_client()

#     user = supabase.auth.get_user(token)

#     response = user
#     return response