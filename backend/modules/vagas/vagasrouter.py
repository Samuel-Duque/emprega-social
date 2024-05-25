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
async def obter_vaga(id: int, supabase: Vaga = Depends(get_supabase_client)):
    response = supabase.table("vagas").select("*").eq("id", id).execute()
    vaga = Vaga(**response.data[0])
    return vaga

@router.post("/criar")
async def criar_vaga(vaga: Vaga, token = Depends(validate_jwt)):
    return await VagasService.criar_vaga(vaga, token)
    
@router.put("atualizar")
async def atualizar_vaga(id: int, vaga: Vaga):
    return {'id': id, 'vaga': vaga}