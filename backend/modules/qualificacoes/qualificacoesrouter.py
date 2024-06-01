from fastapi import APIRouter, Depends

from modules.qualificacoes.qualificacoesservice import QualificacoesService
from core.supabase import get_supabase_client
from models.qualificacao import Qualificacao
from modules.auth.authrouter import supabase_session

router = APIRouter(tags=["Qualificacoes"])

@router.post("/obter")
async def obter_qualificacoes(supabase = Depends(get_supabase_client)):
    return await QualificacoesService.obter_qualificacoes(supabase)

@router.get("/obter/{id}}")
async def obter_qualificacao(id: str, supabase = Depends(get_supabase_client)):
    return await QualificacoesService.obter_qualificacao(id, supabase)

@router.post("/criar")
async def criar_qualificacao(qualificacao: Qualificacao, supabase = Depends(get_supabase_client)):
    return await QualificacoesService.criar_qualificacao(qualificacao, supabase)
    
@router.put("/atualizar/{id}")
async def atualizar_qualificacao(id: str, qualificacao: Qualificacao, supabase = Depends(supabase_session)):
    return await QualificacoesService.atualizar_qualificacao(id, qualificacao, supabase)