# App BCP Agencias por Alfredo Medina

## Caracteristicas

- Aplicación realizada con Angular 14 con Typescript
- Posee un loading que se muestra al cargar la página con un timer de 2 segundos para simular la carga de data
- Listado de agencias segun la data provista por el BCP
a) Cada item del listado posee una foto que se actualiza aleatoriamente.
b) Nombre de la Agencia, Departamento - Provincia - Distrito y la Dirección de la Agencia.
c) En la parte derecha del item un icono de estrella para marca como favorito o desfavoritear que funciona con la localStorage.
d) Un botón flotante en la parte inferior derecha que simula ser un botón para agregar una nueva agencia.
e) En la parte superior un Header con el nombre de la vista y en la parte derecha un icono de busqueda que al hacer click muestra un buscador flotante en la parte superior de la pantalla.
- Al hacer click en cualquiera de las agencias mostradas en el listado lleva a la vista de edición del item.
a) Se muestra la data de la agencia seleccionada segun su ID.
b) Se muestra un mapa con las coordenadas de cada agencia, que funciona y al hacer click en una nueva ubicación dentro del mapa estas coordenadas de la agencia son actualizadas.
c) Botón de Actualizar: Actualiza los datos de la agencia realizando la busqueda en el arreglo de Agencia BCP en la localtorage tal como lo haria con una API.
d) Al actualizar se muestra un Pop-up indicando que los datos fueron guardados exitosamente y luego el usuario es redireccionado a la pantalla del listado de agencias para visualizar los cambios.
e) En la parte superior se muestra el botón VOLVER.

- La aplicación esta desplegada en Heroku y el link es el siguiente: 
https://app-bcp-agencias.herokuapp.com/

## Licencia

**Alfredo Medina Díaz**
**+51 914872971**