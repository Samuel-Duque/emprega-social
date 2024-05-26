import os

from fastapi import Cookie, HTTPException, Request, Response, status
from supabase import create_client, Client
from supabase.client import ClientOptions

from core.config import Settings

settings = Settings()

async def get_supabase_client():
    supabase: Client = create_client(
        settings.supabase_url,
        settings.supabase_key,
        options=ClientOptions(
            persist_session=False,
            auto_refresh_token=False,
        ),
    )

    return supabase

async def supabase_session(request: Request, mycookie: str = Cookie(None)):
    supabase = await get_supabase_client()

    access_token = request.cookies.get('access_token')
    refresh_token = request.cookies.get('refresh_token')

    if not access_token or not refresh_token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Não foi encontrado tokens de sessão")
    try:
        supabase.auth.set_session(access_token, refresh_token)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token de sessão inválido")
    else:
        return supabase