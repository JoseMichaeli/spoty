
Proyecto final del curso de react.

José Joaquín Michaeli Diaz.

El proyecto fue creado para generar un perfil de Spotify, donde el usuario pueda revisar la información de cuenta.
Por temas de tiempo y debido a que el principal objetivo del proyecto es cumplir con los solicitado en el enunciado del proyecto,
el alcance se redujo a mostrar las listas de las canciones que posee el usuario en spotify, y lo que está escuchando actualmente.
Siendo nuevo en el desarrollo de react y en el mundo javascript moderno (ES6), fue un desafío desarrollar la aplicación y me dió un 
marco real de lo que significa desarrollar en react, resolver error y aprender el lenguaje de javascript moderno.
El header muestra la actividad del usuario conectado en spotify, la columna de la derecha despliega las listas de canciones del usuario y
la parte principal muestra las canciones que contiene la lista seleccionada.
A continuación se detalla donde se desarrollaron los puntos pendidos en el enunciado del proyecto.

1- Conexión y consumo de apis. Las llamadas pueden ser con fetch o axios:
    Están contenidas en el archivo useQuery.js dentro del directorio hooks.
2- Creación de rutas + lazy loading el proyecto:
    Fueron implementadas en App.js
3- Readme con la explicación y especificaciones del proyecto:
    Archivo actual.
4- Arquitectura limpia basada en patrones de arquitecturas vistos en el curso y buenas prácticas con Code Splitting:
    Se puede ver que se cumplió con este punto.
5- Implementación de página not found 404:
    Fue implementado en App.js y es lo primero que aparece al loguearse en la página
6.- Aplicar el uso de hooks:
    Se puede ver su uso en Playlists.js, ShowSongs.js y useQuery.js
7- Creación de algún custom hook:
    Para hacer llamados a las apis se crearon customs hooks que están programados en useQuery.js
8.- Utilización de Prop-Types en por lo menos 3 componentes:
    Se pueden ver en los componentes Playlists, Showsongs y los componentes que se encuentran en el directorio
    Albums y CurrentActivity. Los 2 últimos no se usan actualmente en el proyecto pero si funcionan, los dejé ahí
    puesto a que pienso seguir desarrollando la app y haré uso de estos componentes a futuro.
9.- Empaquetado de recursos a producción con Webpack y Babel:
    Se puede revisar en .babelrc, webpack.configjs y package.json como se logró este punto.
10.- Despliegue en producción en Vercel:
    Revisar la dirección https://spoty-zeta.vercel.app/
11.- La UI la pueden implementar como mas les acomode:
    Aunque a la aplicación le falta para modificar la parte gráfica, se puede ver que se utilizó bootstrap, css y varios
    componentes html para mostrar los compenentes de cara al usuario.
12.- Investigar y aplicar el HOC de ErrorBoundary (límites de error) a su proyecto:
    Esta implementado en ErrorBoundary.js y se aplica en App.js
Links:
GitHub: https://github.com/JoseMichaeli/spoty
Vercel: https://spoty-zeta.vercel.app/
