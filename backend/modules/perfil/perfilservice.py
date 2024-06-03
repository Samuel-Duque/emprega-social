from fastapi import Depends, HTTPException, status
import jwt
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.perfil import Perfil

from core.supabase import get_supabase_client, supabase_jwt_decode
from modules.auth.models.register import Register


class PerfilService:
  
  @staticmethod
  async def obter_perfis(supabase: Client):
    try:
        data = supabase.table('usuarios').select('*').execute()

    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter os perfis")
    return data
  
  @staticmethod
  async def obter_perfil(id: str, supabase: Client):

    try:
      data = supabase.table("usuarios").select("*").eq("id", id).single().execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_200_OK, detail="Ocorreu um erro ao tentar obter o perfil")
    return data
  
  @staticmethod
  async def criar_perfil(perfil: Perfil, supabase: Client):
    try:
      response = supabase.table("usuarios").insert(perfil.model_dump()).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar criar o perfil")
    return response
  
  @staticmethod
  async def atualizar_pefil(id: int, perfil: Perfil, supabase: Client):

    try:
      response = supabase.table("usuarios").update(perfil.model_dump()).eq("id", id).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar atualizar o perfil")
    return response
  

  