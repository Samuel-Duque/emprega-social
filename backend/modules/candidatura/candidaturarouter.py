from fastapi import APIRouter, Depends, Request

from modules.candidatura.candidaturaservive import CandidaturaService
from core.supabase import get_supabase_client
from models.candidatura import Candidatura
from modules.auth.authrouter import supabase_session

router = APIRouter(tags=["Candidatos"])

@router.post("/candidatar/{id}")
async def candidatar(candidatura: Candidatura, supabase = Depends(get_supabase_client)):
    return await CandidaturaService.candidatar(candidatura, supabase)

@router.delete("/descandidatar/{id}")
async def descandidatar(id: str, supabase = Depends(get_supabase_client)):
    return await CandidaturaService.descandidatar(id, supabase)
