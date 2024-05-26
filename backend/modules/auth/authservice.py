import json
from fastapi import Depends, HTTPException, Response, status
from fastapi.responses import JSONResponse
import supabase
from typing_extensions import Annotated
from supabase import Client

from core.supabase import get_supabase_client, supabase_session
from modules.auth.models.register import Register


class AuthService:

  @staticmethod
  async def login(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_in_with_password({"email": request.email, "password": request.password})
      
      response = JSONResponse(content={"message": "Login efetuado com sucesso!"})
      response.set_cookie(key="access_token", value=data.session.access_token, httponly=True, secure=True, samesite="None")
      response.set_cookie(key="refresh_token", value=data.session.refresh_token, httponly=True, secure=True, samesite="None")
      return response
    except Exception as e:
      response = {"error_message": "Endereço de email ou senha inválidos"}
      return Response(status_code=status.HTTP_200_OK, content=json.dumps(response))


  @staticmethod
  async def register(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_up({"email": request.email, "password": request.password})
      return {"access_token": data.session.access_token, "refresh_token": data.session.refresh_token, "role": "A"}
    except Exception as e:
      Response(status_code=status.HTTP_200_OK, content=json.dumps({"error_message": "Ocorreu um erro ao tentar se registrar: " + str(e)}))

    
  @staticmethod
  async def logout(supabase: Client):
    error = supabase.auth.sign_out()

    if error:
      return Response(status_code=status.HTTP_200_OK, content=json.dumps({"error_message": "Ocorreu um erro ao tentar sair: " + str(error)}))
    else:
      return {"message": "Logout efetuado com sucesso!"}
  

  @staticmethod
  async def forgot_password(email: str):
    supabase = await get_supabase_client()

    try:
      supabase.auth.reset_password_email(email)
      return {"message": "Email enviado com sucesso!"}
    except Exception as e:
      return Response(status_code=status.HTTP_200_OK, content=json.dumps({"error_message": "Ocorreu um erro ao tentar enviar o email: " + str(e)}))
    

  @staticmethod
  async def verify_infos(supabase: Client):

    try: 
      user_id = supabase.auth.get_user_identities()
      user_id = user_id.identities[0].id

      # Pega o grupo do usuário
      response = supabase.table('regra_usuarios').select('id_grupo').eq('id_usuario', user_id).execute()

      # Determina a regra do usuário
      match(response.data[0]['id_grupo']):
        case 1: # Prefeitura
          return {"message": "Informações válidas!", "redirectTo": "/prefeitura"}
        case 2: # Empresa
          return {"message": "Informações válidas!", "redirectTo": "/empresa/dashboard"}
        case 3: # Candidato
          return {"message": "Informações válidas!", "redirectTo": "/candidato/perfil"}
        case _:
          return Response(status_code=status.HTTP_403_FORBIDDEN, content=json.dumps({"error_message": "Usuário não autorizado"}))
        
    except Exception as e:
      print(e)
      return Response(status_code=status.HTTP_400_BAD_REQUEST, content=json.dumps({"error_message": "Ocorreu um erro ao tentar verificar as informações"}))
    
    


