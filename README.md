# Do Something!

- Crear una App llamada **“Do Something!”** Utilizando React totalmente en Inglés.<br>
  La misma deberá contar con 4 pantallas:
- Pantalla **“Sign Up”**: Los datos deberán guardarse en el LocalStorage.
  Datos requeridos: Email, password, age, name, lastname.

- Pantalla **“Login”**: Email and password. <br>
- Pantalla **Home**: Mostrar la siguiente info:
    Nombre y edad del usuario logueado.
    Detalle de una actividad random proveniente de Bored Api, únicamente Activity,
    Type y participants y algún icono o imagen correspondiente al Type de la actividad.
    http://www.boredapi.com/api/activity
Un botón de tipo Refresh para refrescar la actividad.<br>
Un botón *“Add to list”* para agregar a una lista de actividades a realizar. Dichas
actividades deben guardarse en el estado de la aplicación.
Un botón *“Activities to do”* para acceder al listado de actividades.
- Pantalla **“Activities to do”**: Mostrar un listado de las actividades guardadas con su
detalle, y la posibilidad de eliminarla del estado de la aplicación.


## Tecnologías utilizadas
- React + Vite
- SASS
- React Router DOM

## Estructura del Proyecto

```my-app/
├── src/
|   ├── api/
|   ├── components/
|   ├── hooks/
|   ├── pages/
|   |   ├── activities/
|   |   ├── home/
|   |   ├── login/
|   |   ├── signup/
|   ├── styles/
├── ...
```

---


## Instalación
1. Clona este repositorio: `git clone <URL del repositorio>`
2. Navega a la carpeta del proyecto: `cd my-app`
3. Instala las dependencias: `npm install`

## Uso
- Inicia la aplicación en modo de desarrollo: `npm run dev`
- Construye la aplicación para producción: `npm run build`

## Rutas
- `/` - Página de inicio
- `/login` - Página de inicio de sesión
- `/signup` - Página de registro
- `/activities` - Página de actividades

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:
1. Crea un fork del repositorio
2. Crea una nueva rama para tu contribución: `git checkout -b feature/nueva-caracteristica`
3. Realiza tus cambios y commitéalos: `git commit -m "Agrega nueva característica"`
4. Haz push de la rama: `git push origin feature/nueva-caracteristica`
5. Crea una solicitud de extracción en GitHub

## Contacto
- [Douglas San Anton](https://github.com/Douglas-san-anton)
- Correo electrónico: douglassananton@gmail.com
