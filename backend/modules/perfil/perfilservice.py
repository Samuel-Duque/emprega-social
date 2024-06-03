from fastapi import Depends, HTTPException, status
import jwt
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.perfil import Perfil

from core.supabase import get_supabase_client, supabase_jwt_decode
from modules.auth.models.register import Register


class PerfilService:
  
  # @staticmethod
  # async def obter_perfis(supabase: Client):
  #   try:
  #       data = supabase.table('usuarios').select('*').execute()

  #   except Exception as e:
  #     print(e)
  #     raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter os perfis")
  #   return data
  
  @staticmethod
  async def obter_perfil(supabase: Client):

    try:
      id = supabase.auth.get_session().user.id
      email = supabase.auth.get_session().user.email

      # Pegando a função do usuário
      token = supabase.auth.get_session().access_token
      decoded = supabase_jwt_decode(token)
      regra = decoded['funcao_usuario'] if decoded['funcao_usuario'] is not None else 'candidato'

      data = supabase.table("usuarios").select("nome, sobrenome, foto_perfil").eq("id", id).single().execute()
      data.data["email"] = email
      data.data["regra"] = regra

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
  

  