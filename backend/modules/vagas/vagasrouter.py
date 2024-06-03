from fastapi import APIRouter, Depends, Request

from modules.vagas.vagasservice import VagasService
from core.supabase import get_supabase_client
from models.vaga import Vaga, VagaSearch
from modules.auth.authrouter import supabase_session

router = APIRouter(tags=["Vagas"])

@router.post("/obter")
async def obter_vagas(search: VagaSearch, supabase = Depends(get_supabase_client)):
    return await VagasService.obter_vagas(search, supabase)

@router.get("/obter/{id}")
async def obter_vaga(id: str, supabase = Depends(get_supabase_client)):
    return await VagasService.obter_vaga(id, supabase)

@router.post("/criar")
async def criar_vaga(vaga: Vaga, supabase = Depends(get_supabase_client)):
    return await VagasService.criar_vaga(vaga, supabase)
    
@router.put("atualizar")
async def atualizar_vaga(id: str, vaga: Vaga, supabase = Depends(get_supabase_client)):
    return await VagasService.atualizar_vaga(id, vaga, supabase)