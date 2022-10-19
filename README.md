

## Aplicación de Ver paises

1. Montar la estructura de la app.

- listar paises ( table )
- ver pais ( detalle )

- módulo paises 
``` ng g m paises --routing  ```

- componentes del módulo de paises:

``` ng g c paises/listado  ```

``` ng g c paises/detalle ``` 

Después de crear los componentes, configuro las rutas de la app principal

2. Peticiones rest

- Servicio rest.

``` ng g s paises/services/paises ```

Para hacer peticiones http, en app.module, hay que importar el módulo de HttpClientModule. Luego en el servicio hay que inyectar el cliente http.

- Esos paises son de un tipo concreto. ( Crearemos el tipo de dato ).

en el detalle del país hay que obtener el parámetro que viene en la url y con ese parámetro, obtener el pais que me dará el servicio.


El fin principal es tener todo por consola.


3. Aplicar estilos.

- Angular material.

hay que instalar angualar material ```ng add @angular/material ```

Se recomienda tener un módulo para los módulos de angular material

``` ng g m material ```





