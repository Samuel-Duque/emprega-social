from fastapi import Depends, HTTPException, status
import supabase
from typing_extensions import Annotated
from supabase import Client

from core.supabase import get_supabase_client
from modules.auth.models.register import Register


class AuthService:

  @staticmethod
  async def login(request: Register) -> dict:
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_in_with_password({"email": request.email, "password": request.password})
      return {"access_token": data.session.access_token}
    except Exception as e:
      raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=str(e))

  @staticmethod
  async def register(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_up({"email": request.email, "password": request.password})
      return {"access_token": data}
    except Exception as e:
      raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=str(e))
