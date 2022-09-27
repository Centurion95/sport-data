# Notes CRUD project in MERN (Mongo Express React Node)
Simple Notes CRUD project in MERN stack (Mongo Express React Node)

- Rodrigo Centurión
(Asunción, Paraguay)


## Run both projects (backend+frontend) with a single command:
```sh
sh init.sh
```

## Development environment
- Linux (debian 10)
- Visual Studio Code
- M (mongoDB)
- E (express)
- R (react)
- N (nodejs)

## Dependencies
### General
- "concurrently": ^7.3.0"

### Backend
- "express": "^4.18.1",
- "mongodb": "^4.8.1",
- "mongoose": "^6.5.0",
- "cors": "^2.8.5"
- "env-cmd": "^8.0.2",
- "nodemon": "^1.18.9"

### Frontend
- "axios": "^0.26.0",
- "env-cmd": "^8.0.2",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-modal": "^3.15.1",
- "react-scripts": "5.0.1"

---
## Acerca de (About)
### rc95 - 26/08/2022 00:41
- Se realizan cambios en los 3 `package.json` para separar correctamente los ambientes de producción y desarrollo
- Se excluyen los archivos `.env` por inconsistencias en producción

### rc95 - 25/08/2022 22:33
#### Generales
- Implementamos la librería `concurrently` para ejecutar ambos proyectos a la vez
- Se agrega el comando `sh init.sh` para dicho efecto, a ejecutarse desde la carpeta raíz
- Se agrega `.gitignore`
- Cambios en el `readme.md`

#### Backend
- Reestructuración de carpetas, separación de funcionalidades
- Se finalizan los `GET / POST / PATCH / DELETE`

#### Frontend
- Reestructuración de carpetas, separación de funcionalidades
- Implementamos la librería `axios`
- Se agregan los archivos de imagenes para los botones
- Implementamos la librería `react-modal`
- Separamos la vista pricipal de los componentes


### rc95 - 25/08/2022 00:06
- Primera versión del proyecto
