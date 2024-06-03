import json
from fastapi import Depends, HTTPException, Response, status
from fastapi.responses import JSONResponse, RedirectResponse
import supabase
from typing_extensions import Annotated
from supabase import Client

from core.supabase import get_supabase_client, supabase_jwt_decode, supabase_session
from modules.auth.models.register import Register


class AuthService:

  @staticmethod
  async def login(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_in_with_password({"email": request.email, "password": request.password})

      token = data.session.access_token
      refresh_token = data.session.refresh_token
      
      response = JSONResponse(content={"message": "Login efetuado com sucesso!"})
      response.set_cookie(key="access_token", value=token, httponly=True, secure=True, samesite="None")
      response.set_cookie(key="refresh_token", value=refresh_token, httponly=True, secure=True, samesite="None")
      return response
    except Exception as e:
      print(e)
      raise HTTPException(status_code=status.HTTP_200_OK, detail="Endereço de email ou senha invalidos")

  @staticmethod
  async def register(request: Register):
    supabase = await get_supabase_client()

    try:
      data = supabase.auth.sign_up({"email": request.email, "password": request.password})
      supabase.table("usuarios").insert({"id": data.user.id, "nome": request.name, "sobrenome": request.lastName, "data_nascimento": request.dataNascimento}).execute()

      token = data.session.access_token
      refresh_token = data.session.refresh_token
      
      response = JSONResponse(content={"message": "Register efetuado com sucesso!"})
      response.set_cookie(key="access_token", value=token, httponly=True, secure=True, samesite="None")
      response.set_cookie(key="refresh_token", value=refresh_token, httponly=True, secure=True, samesite="None")
      return response
    except Exception as e:
      print(e)
      return Response(status_code=status.HTTP_200_OK, content=json.dumps({"error_message": "Ocorreu um erro ao tentar se registrar: " + str(e)}))

    
  @staticmethod
  async def logout(supabase: Client):
    error = supabase.auth.sign_out()

    if error:
      print(error)
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
      token = supabase.auth.get_session().access_token
      decoded = supabase_jwt_decode(token)

      regra = decoded['funcao_usuario']

      # Determina a regra do usuário
      match(regra):
        case 'prefeitura':
          return {"message": "Informações válidas!", "role": regra, "redirect": "/gestao"}
        case 'empresa':
          return {"message": "Informações válidas!", "role": regra, "redirect": "/gestao"}
        case 'candidato':
          return {"message": "Informações válidas!", "role": regra, "redirect": "/candidato"}
        case _:
          return {"message": "Informações válidas!", "role": regra, "redirect": "/candidato"}
          # return Response(status_code=status.HTTP_403_FORBIDDEN, content=json.dumps({"error_message": "Usuário não autorizado"}))
        
    except Exception as e:
      print(e)
      return Response(status_code=status.HTTP_400_BAD_REQUEST, content=json.dumps({"error_message": "Ocorreu um erro ao tentar verificar as informações"}))
    
    


