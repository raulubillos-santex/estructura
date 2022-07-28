# MOVIES API
## Como levantar la api
Bien, primero lo que vamos a hacer es, teniendo docker instalado, parados en la carpeta raiz del proyecto, vamos a correr el comando, este comando nos va a levantar un contenedor de docker con mysql para la bd y les va a crear el volumen.
```
docker-compose up -d
```

Luego de esto ejecutamos el comando siguiente. Con esto vamos a poder instalar todos los paquetes para que funcione el proyecto.
```
npm install
```

Luego de esto ejecutamos el comando siguiente para levantar la API.
```
npm start
```
# DOC

Si entran en http://localhost:4000/ vas a ver una pagina en blanco que dice HOME. significa que la api fue levantada con exito.

# ROUTES

La siguente ruta los traera un listado con todas las peliculas que tenemos.

```
TYPE GET
http://localhost:4000/api/movies
```

La siguente ruta nos creara una pelicula.

```
TYPE POST
http://localhost:4000/api/movies

Requiere un obj. json con los siguientes datos:

{
  "title": "string",
  "year": number,
  "rating": number (0 al 10)
}
```

La siguente ruta nos eliminará una pelicula.

```
TYPE DELETE
http://localhost:4000/api/movies

Requiere el nombre de la Pelicula, la cual se la pasaremos mediante la key 'title' usando query params.

Ej.:
http://localhost:4000/api/movies?title=Titanic

```

La siguente ruta nos actualizara los campos Rating y Year de una pelicula.

```
TYPE PUT/PATCH
http://localhost:4000/api/movies

Requiere un obj. json con los siguientes datos:

{
  "title": "string",
  "year": number,
  "rating": number (0 al 10)
}
```
