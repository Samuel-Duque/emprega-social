from fastapi import Depends, HTTPException, status
import jwt
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.qualificacao import Qualificacao

from core.supabase import get_supabase_client, supabase_jwt_decode
from modules.auth.models.register import Register


class QualificacoesService:
  
  @staticmethod
  async def obter_qualificacoes(supabase: Client):
    try:

        data = supabase.table('qualificacoes').select('*')
        data = data.order('data_publicacao', desc=True).execute()

    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter as qualificações")
    return data
  
  @staticmethod
  async def obter_qualificacao(id: str, supabase: Client):
    try:
      data = supabase.table("qualificacoes").select("*").eq("id", id).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar obter a qualificação")
    return data
  
  @staticmethod
  async def atualizar_qualificacao(id: int, qualificacao: Qualificacao, supabase: Client):
    try:
      response = supabase.table("qualificacoes").update(qualificacao.model_dump()).eq("id", id).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar atualizar a qualificação")
    return response
  
  @staticmethod
  async def criar_qualificacao(qualificacao: Qualificacao, supabase: Client):

    try:
      response = supabase.table("qualificacoes").insert(qualificacao.model_dump()).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar criar a qualificação")
    return response
  