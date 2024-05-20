from supabase import Client
from typing_extensions import Annotated
from fastapi import APIRouter, Depends, status, HTTPException

from core.supabase import get_supabase_client

from modules.auth.authservice import AuthService
from modules.auth.models.login import Login
from modules.auth.models.register import Register


router = APIRouter(tags=["Autenticação"])

@router.post("/login")
async def login(request: Login):
    return await AuthService.login(request)
    
@router.post("/register")
async def register(request: Register):
    return await AuthService.register(request)