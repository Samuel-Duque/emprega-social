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
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter a vaga")
    return data
  
  @staticmethod
  async def atualizar_vaga(id: int, vaga: Vaga, supabase: Client):
    try:
      vaga_data = vaga.model_dump()
      response = supabase.table("vagas").update(vaga_data).eq("id", id).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar atualizar a vaga")
    return response
  
  @staticmethod
  async def criar_vaga(vaga: Vaga, supabase: Client):

    try:
      response = supabase.table("vagas").insert(vaga.model_dump()).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar criar a vaga")
    return response
  