from fastapi import Depends, HTTPException, status
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.vaga import Vaga

from core.supabase import get_supabase_client
from modules.auth.models.register import Register


class VagasService:
  
  @staticmethod
  async def obter_vagas(page: int, pagesize: int):
    return {"page": page, "pageSize": pagesize}
  
  @staticmethod
  async def obter_vaga(id: int):
    return {id}
  
  @staticmethod
  async def criar_vaga(vaga: Vaga, token: str):
    supabase = await get_supabase_client()

    # user = supabase.auth.get_user(token)
    
    supabase.table("vagas").insert(vaga.dict()).execute()

    return { "OK": "OK" }