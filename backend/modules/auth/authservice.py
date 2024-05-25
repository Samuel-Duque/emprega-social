import json
from fastapi import Depends, HTTPException, Response, status
import supabase
from typing_extensions import Annotated
from supabase import Client

from core.supabase import get_supabase_client
from modules.auth.models.register import Register


class AuthService:

  @staticmethod
  async def login(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_in_with_password({"email": request.email, "password": request.password})
      return {"access_token": data.session.access_token, "role": "A"}
    except Exception as e:
      return Response(status_code=status.HTTP_200_OK, content=json.dumps({"error_message": "Endereço de email ou senha inválidos"}))

  @staticmethod
  async def register(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_up({"email": request.email, "password": request.password})
      return {"access_token": data.session.access_token, "role": "A"}
    except Exception as e:
      Response(status_code=status.HTTP_200_OK, content=json.dumps({"error_message": "Ocorreu um erro ao tentar se registrar: " + str(e)}))
