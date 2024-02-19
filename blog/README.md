Blog Angular CRUD
Este proyecto consiste en un módulo CRUD para las publicaciones de un blog, desarrollado en Angular y utilizando la API del servicio web JSONPlaceholder como base de datos.

Especificaciones cumplidas
 Inicio del proyecto con Angular en modo standalone.
 Uso de Bootstrap 5 a través de su CDN.
 Creación de componentes para cada acción del CRUD: listado, vista individual, creación y actualización.
 Implementación de rutas del proyecto en el archivo app.routes.ts.
 Configuración del servicio HttpClient en app.config.ts.
 Creación de la interfaz Post para los objetos principales del proyecto.
 Desarrollo del servicio PostService para la conexión con la API de JSONPlaceholder, con métodos para realizar operaciones CRUD.
 Desarrollo del componente de listado de posts.
 Desarrollo del componente de creación de posts, con un formulario reactivo.
 Desarrollo del componente de edición de posts, con capacidad para editar un post existente.
 Desarrollo del componente de visualización individual de posts.

 

Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

Componentes: Se han desarrollado varios componentes ubicados en la carpeta src/app/post para manejar las diferentes operaciones del CRUD, como listar, crear, actualizar y ver publicaciones.

Servicio de Conexión a la API: Se ha implementado el servicio PostService en el archivo src/app/post/post.service.ts para interactuar con la API del servicio web JSONPlaceholder. Este servicio se encarga de realizar las operaciones CRUD en la base de datos remota.

Modelo de Datos: Se ha definido la interfaz Post en el archivo src/app/post/post.ts para representar la estructura de los objetos de tipo post.

Rutas del Proyecto: Las rutas del proyecto se configuran en el archivo src/app/app.routes.ts, proporcionando la navegación entre los diferentes componentes.

Bootstrap: Se ha utilizado Bootstrap 5 a través de CDN para el diseño y la maquetación de los componentes. Está enlazado en el archivo index.html.

Componentes Utilizados
Listado de Posts (list): Muestra un listado de todas las publicaciones disponibles con opciones para ver, editar o eliminar cada una.

Creación de Post (create): Permite a los usuarios agregar nuevas publicaciones al blog utilizando un formulario reactivo.

Edición de Post (update): Permite editar los datos de una publicación existente utilizando un formulario reactivo.

Visualización de Post (detail): Muestra los detalles de una publicación específica sin permitir modificaciones.

Funcionalidades Implementadas
Listar Publicaciones: Se muestra un listado de todas las publicaciones disponibles con opciones para ver, editar o eliminar cada una.

Crear Publicación: Permite a los usuarios agregar nuevas publicaciones al blog a través de un formulario reactivo.

Editar Publicación: Permite modificar los datos de una publicación existente utilizando un formulario reactivo.

Eliminar Publicación: Se proporciona la opción de eliminar una publicación desde el listado de posts.