# Responsive Design Platzi

## ¿Qué es Responsive Design?

> Son todas las técnicas y patrones que usamos para adaptar nuestras aplicaciones web a la mayor cantidad de dispositivos.

## Motivación

* La adopción del móvil
* Múltiples tipos de pantalla
* Avances tecnológicos.
* Problemas con SEO y desarrollo en sitios
* Internet Móvil

## Patrones de Diseño

**Mostly Fluid**
    :  Cuadricula fluida autoajustable al tamaño de la pantalla, los elementos se desplazan hacía abajo en la medida que la pantalla se reduce.

Ejemplo: <http://www.antarcticstation.org/>

**Column Drop**
    : Es la Colocación de columnas de forma vertical, a medida que se va reduciendo la pantalla, las columnas va a tomar el 100% del espacio para adaptarse.

Ejemplo: <http://www.modernizr.com>

**Layout Shifter**
    : Es el reajuste del diseño del sitio de acuerdo al ancho de la pantalla, requiere diseños más pulidos y detallados.

Ejemplo: <http://foodsense.is/>

**Tiny Tweaks**
    : Pequeños cambios en el diseño, como ajustar el tamaño de la fuente, cambiar el tamaño de las imágenes o desplazar el contenido de diferentes maneras.

Ejemplo: <http://futurefriendlyweb.com/>

**Off Canvas**
    :  El contenido menos usado se coloca fuera de la pantalla y solo se muestra cuando el tamaño de la pantalla es lo suficientemente grande; en las pantallas más pequeñas, el contenido está solo a un clic de distancia.

Ejemplo: <https://getbootstrap.com/examples/offcanvas/>

## Consideraciones cómo Desarrolladores

A la hora de crear aplicaciones web responsive debemos tener claros los siguientes conceptos:

1.  Para Smartphone trabajar en Portrait - Landscape (En vertical, en horizontal)
2. Viewport (área visible del navegador) [Ver los diferentes tamaños](http://viewportsize.com/)
3. Unidades de Medida **absolutas** y **relativas**
    - **Absolutas**
       - Pixeles _px_
    - **Relativas**
       - Porcentaje = _%_
       - Altura de Fuente = _em_ - Root-em = _rem_
       - Viewport Height = _vh_ - Viewport Width = _vw_
4. Retina Display - Densidad de Pixel.
5. Touch Events.
6. Estrategias
    - Graceful Degradation (Desktop First)
    - Progressive Enhancement (Mobile Fisrt)
7. Que los archivos carguen rápido en el servidor.

## Tipos y Formas de agregar Media Queries

Se pueden agregar las media-queries desde archivos externos o en nuestra hoja de estilos principal, debemos tener en cuenta que muchas llamadas puede afectar la carga de nuestro sitio web.

Desde una hoja de estilos solo para las media-queries:

    <!-- HTML -->
    <link rel="stylesheet" media="(max-width: 800px)" href="css/media-query.css"/>

    /* CSS */
    body{
        background: red;
        border: 1px solid peru;
    }

Desde nuestra hoja de estilos principal:

Hay que tener en cuenta que debemos especificar para que tipo de medio van a funcionar. Ej: Tv, screen, print.

     <!-- HTML -->
     <link rel="stylesheet" href="css/main.css"/>

     /* CSS */
     @media screen and (max-width: 650px) {
        .header{
            text-align: center;
        }

        .logotipo{
            margin: 0;
        }

        .menu{
            position: static;
            padding: 0;
            display: block;
        }

        .menu li:first-child{
            margin: 0;
        }
        .menu ul{
            padding: 0;
        }
    }
     
## Soportando múltiples resoluciones de pantalla

Así cómo tenemos diferentes tamaños de pantalla, también tenemos diferentes densidades. Si la densidad de píxeles es mayor a 227 ppi, estamos hablando de una pantalla retina y lo primero que se ve afectado, si el sitio no está optimizado, son las imágenes. Las imágenes, por ser mapas de bits y no elementos vectoriales, no escalan de manera natural, toca hacer algunos trucos cómo exportar al doble de tamaño para que puedan visualizarse de manera efectiva.

