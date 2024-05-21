from fastapi import Depends, HTTPException, status
import supabase
from typing_extensions import Annotated
from supabase import Client

from core.supabase import get_supabase_client
from modules.auth.models.register import Register


class CandidatoService:
  pass