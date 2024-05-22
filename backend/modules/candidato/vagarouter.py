from fastapi import APIRouter, Depends

from core.supabase import get_supabase_client
from core.auth import validate_jwt
from models.vaga import Vaga


router = APIRouter(tags=["Candidato"])

# # Perfil
# @router.get("/perfil")
# async def obter_perfil(token = Depends(validate_jwt)):
#     supabase = await get_supabase_client()

#     user = supabase.auth.get_user(token)

#     response = user
#     return response