from fastapi import APIRouter, Depends

from modules.vagas.vagasservice import VagasService
from core.supabase import get_supabase_client
from core.auth import validate_jwt
from models.vaga import Vaga

router = APIRouter(tags=["Vagas"])

@router.get("/obter")
async def obter_vagas(supabase = Depends(get_supabase_client)):
    return await VagasService.obter_vagas(supabase)

@router.get("/obter/{estado}/{cidade}")
async def obter_vaga(estado: str, cidade: str, supabase = Depends(get_supabase_client)):
    return await VagasService.obter_vaga(estado, cidade, supabase)

@router.post("/criar")
async def criar_vaga(vaga: Vaga, token: str = Depends(validate_jwt)):
    return await VagasService.criar_vaga(vaga, token)
    
@router.put("atualizar")
async def atualizar_vaga(id: int, vaga: Vaga):
    return {'id': id, 'vaga': vaga}