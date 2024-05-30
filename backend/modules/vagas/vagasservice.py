from fastapi import Depends, HTTPException, status
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.vaga import Vaga

from core.supabase import get_supabase_client
from modules.auth.models.register import Register


class VagasService:
  
  @staticmethod
  async def obter_vagas(supabase: Client):
    try:
      data = supabase.table('vagas').select('*').execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter as vagas")
    return data
  
  @staticmethod
  async def obter_vaga(estado: str, cidade: str, supabase: Client):
    try:
      data = supabase.table("vagas").select("*").eq("estado", estado).eq("cidade", cidade).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter as vagas")
    return data
  
  @staticmethod
  async def criar_vaga(vaga: Vaga, token: str):
    
    supabase = await get_supabase_client()

    user = supabase.auth.get_user(token)
    
    response = supabase.table("Vagas").insert(vaga.model_dump()).execute()

    return {"message": "Vaga criada com sucesso!", "data": response.data}