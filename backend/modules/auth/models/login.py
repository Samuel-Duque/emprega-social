from pydantic import BaseModel

class Login(BaseModel):
    email: str
    password: str

    model_config = {
        'json_schema_extra': {
            "example": {
                "email": "admin@gmail.com",
                "password": "1234"
            }
        }
    }
