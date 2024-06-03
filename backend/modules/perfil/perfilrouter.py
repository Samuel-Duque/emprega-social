from fastapi import APIRouter, Depends, Request

from modules.perfil.perfilservice import PerfilService
from core.supabase import get_supabase_client
from models.perfil import Perfil
from modules.auth.authrouter import supabase_session

router = APIRouter(tags=["Perfil"])

@router.get("/obter")
async def obter_perfis(supabase = Depends(get_supabase_client)):
    return await PerfilService.obter_perfis(supabase)

@router.get("/obter/{id}")
async def obter_perfil(id: str, supabase = Depends(get_supabase_client)):
    return await PerfilService.obter_perfil(id, supabase)

@router.post("/criar")
async def criar_perfil(perfil: Perfil, supabase = Depends(get_supabase_client)):
    return await PerfilService.criar_perfil(perfil, supabase)
    
@router.put("atualizar/{id}")
async def atualizar_perfil(id: str, perfil: Perfil, supabase = Depends(get_supabase_client)):
    return await PerfilService.atualizar_pefil(id, perfil, supabase)