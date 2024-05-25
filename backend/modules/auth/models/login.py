from pydantic import BaseModel, Field

class Login(BaseModel):
    email: str = Field(..., example="O email do usuário")
    password: str = Field(..., example="A senha do usuário")

    model_config = {
        'json_schema_extra': {
            "example": {
                "email": "admin@gmail.com",
                "password": "1234",
            }
        },
    }
