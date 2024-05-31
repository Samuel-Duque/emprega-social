from fastapi import Depends, HTTPException, status
import jwt
import supabase
from typing_extensions import Annotated
from supabase import Client
from models.vaga import Vaga, VagaSearch

from core.supabase import get_supabase_client, supabase_jwt_decode
from modules.auth.models.register import Register


class VagasService:
  
  @staticmethod
  async def obter_vagas(search: VagaSearch, supabase: Client):
    try:
        data = supabase.table('vagas').select('id, titulo, tipo, data_publicacao, estado, cidade, tbm_pcd, modelo_trabalho').eq('status', 'Publicada')
        
        if search.tipoVaga:
          data = data.eq('tipo', search.tipoVaga)
        
        if search.termo:
          data = data.like('titulo', f'*{search.termo}*')

        if search.uf:
          data = data.eq('estado', search.uf)
        
        if search.cidade:
          data = data.eq('cidade', search.cidade)

        data = data.order('data_publicacao', desc=True).execute()

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
      response = supabase.table("vagas").update(vaga.model_dump()).eq("id", id).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar atualizar a vaga")
    return response
  
  @staticmethod
  async def criar_vaga(vaga: Vaga, supabase: Client):
    try:
      vaga = vaga.model_dump()
      response = supabase.table("vagas").insert(vaga).execute()
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ocorreu um erro ao tentar criar a vaga")
    return response
  