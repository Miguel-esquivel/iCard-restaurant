# iCard-restaurant

## Instalación recomendada

Este repo contiene dos partes:

- Backend Django en `icard_django/icard`
- Frontend React en `icard_react/icard`

### Backend (Django)

1. Crear un entorno virtual limpio:

```powershell
cd icard_django/icard
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Instalar dependencias:

```powershell
pip install -r requirements.txt
```

3. Aplicar migraciones:

```powershell
python manage.py migrate
```

4. Crear usuario administrador:

```powershell
python manage.py createsuperuser
```

5. Ejecutar el servidor:

```powershell
python manage.py runserver
```

> Si no quieres crear el entorno dentro de la carpeta del proyecto, crea `.venv` fuera o en otra ubicación y actívalo desde allí.

### Frontend (React)

1. Instalar dependencias:

```powershell
cd icard_react/icard
npm install
```

2. Ejecutar la app:

```powershell
npm start
```

### Buenas prácticas del repo

- No subir `node_modules/` ni el entorno Python.
- No subir `db.sqlite3` ni archivos de configuración local.
- Usa un `.gitignore` para excluir estos archivos.
- Si usas variables de entorno, no subir `.env`.

### Notas

- El backend usa SQLite por defecto en `icard_django/icard/db.sqlite3`.
- El frontend usa `react-scripts` y debe ejecutarse desde `icard_react/icard`.

### Extensiones usadas

Backend:

- Django
- django-cors-headers
- djangorestframework
- djangorestframework-simplejwt
- drf-yasg

Frontend:

- formik
- react-dropzone
- react-router-dom
- react-toastify
- sass
- semantic-ui-react
- semantic-ui-css
- yup

### Clonar desde GitHub

1. Clona el repo y entra en la carpeta:

```powershell
git clone https://github.com/<tu-usuario>/<tu-repo>.git
cd iCard-restaurant
```

2. Backend: crear entorno, instalar dependencias y ejecutar (resumen):

```powershell
cd icard_django/icard
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

3. Frontend: instalar e iniciar:

```powershell
cd ../../icard_react/icard
npm install
npm start
```

### Variables de entorno

- Backend: copia `icard_django/icard/.env.example` a `icard_django/icard/.env` y modifica valores seguros (SECRET_KEY, DEBUG, etc.).
- Frontend: copia `icard_react/icard/.env.example` a `icard_react/icard/.env` y modifica `REACT_APP_BASE_API` si tu backend corre en otra URL.

No subas archivos `.env` al repositorio.
