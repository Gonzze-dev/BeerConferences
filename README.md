# BeerConferences
Proyecto de conferencia de cervezas en react-native

## Ejecucion sin docker
Este proyecto usa el sdk v51 de expo.
Para ejecutar el proyecto, usar el comando `npm start`.

## Ejecucion con docker windows
Ejecutar el script `set_host_devise_ip_windows` con el siguiente comando
(se necesita hacerlo en powershell)
```
./set_host_devise_ip.ps1
```
para setear el puerto Ethernet a una variable de entorno, esto se debe a que el docker-compose hace uso de la misma.

luego usar
Primera vez
```
docker-compose up --build
```
Segunda vez
```
docker-compose up
```

## Ejecucion con docker unix (mac y linux)
para mac
```
chmod +x set_host_devise_ip_macOS.sh
```
para linux
```
chmod +x set_host_devise_ip_linux.sh
```

luego usar
Primera vez
```
docker-compose up --build
```
Segunda vez
```
docker-compose up
```

## 01
# Requerimientos
Crear una app móvil para ver conferencias de un evento de cerveceros artesanales.

## 02

# Como usuario queremos:

1. **Ver las conferencias de distintos disertantes de cerveceros:**
   - Imagen de la conferencia.
   - Nombre de la conferencia.
   - Nombre del disertante.
   - Hora de inicio y finalización de la conferencia.

2. **Ver una grilla de 10 conferencias distintas.**

3. **Ver un detalle de las conferencias**
   - Información similar a la de la vista de la grilla.

4. **Ver un mapa del lugar de las conferencias**
   - Integración con la API de Google Maps.

## 03
# Estructura Técnica

- **Tecnología de desarrollo** React Native.
- **Autenticación de usuario** 
  - Logueo mediante email.
  - Autenticación con proveedores usando una API serverless.
- **Almacenamiento de contenido** 
  - Instancia Cloud como Firestore.