# Utiliza una imagen base con Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm i

# Copia todo el contenido de la carpeta actual en el contenedor
COPY . .

# Expone el puerto que utilizará tu aplicación
EXPOSE 19000 19001 19002 19003

# Comando para ejecutar la aplicación
CMD ["npm", "start"]