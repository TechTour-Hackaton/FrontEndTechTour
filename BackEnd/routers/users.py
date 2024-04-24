from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/auth", tags=["auth"])

# Modelo para los datos de inicio de sesión
class LoginData(BaseModel):
    username: str
    password: str

# Modelo para los datos de registro de usuarios
class RegisterData(BaseModel):
    username: str
    password: str

# Lista simulada de usuarios registrados
registered_users = [
    {"username": "usuario1", "password": "contraseña1"},
    {"username": "usuario2", "password": "contraseña2"},
    {"username": "usuario3", "password": "contraseña3"}
]

# Endpoint para manejar el inicio de sesión de usuarios
@router.post("/login")
async def login(login_data: LoginData):
    # Verifica si las credenciales son válidas
    if any(user["username"] == login_data.username and user["password"] == login_data.password for user in registered_users):
        # Credenciales válidas, devuelve un mensaje de éxito
        return {"message": "Inicio de sesión exitoso"}
    else:
        # Credenciales inválidas, lanza una excepción HTTPException con un código de estado 401 (Unauthorized)
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

# Endpoint para manejar el registro de usuarios
@router.post("/register")
async def register(register_data: RegisterData):
    # Verifica si el usuario ya está registrado
    if any(user["username"] == register_data.username for user in registered_users):
        raise HTTPException(status_code=400, detail="El usuario ya está registrado")

    # Agrega el nuevo usuario a la lista de usuarios registrados
    registered_users.append({"username": register_data.username, "password": register_data.password})

    # Puedes agregar aquí la lógica para guardar el usuario en una base de datos u otro almacenamiento persistente

    return {"message": "Usuario registrado exitosamente"}
