from fastapi import Depends, HTTPException, status
import jwt
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.candidatura import Candidatura

from core.supabase import get_supabase_client, supabase_jwt_decode
from modules.auth.models.register import Register


class CandidaturaService:
  
  @staticmethod
  async def candidatar(candidatura: Candidatura, supabase: Client):
    try:
        data = supabase.table('candidaturas').insert(candidatura.model_dump()).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar criar candidatura")
    return data
  
  @staticmethod
  async def descandidatar(id: str, supabase: Client):
    try:
      data = supabase.table("candidaturas").delete().eq('id', id).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_200_OK, detail="Ocorreu um erro ao tentar deletar candidatura")
    return data
 