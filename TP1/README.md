# DevOps-B3 TP1

1- Package npm inclus dans Node.js requis \
```https://nodejs.org/en```

2- Clone le projet \
```git clone https://github.com/quentin-csg/DevOps-B3.git```

3- Pour changer le port (par défaut 2222), créer un fichier .env dans le dossier src avec la variable défini à l'intérieur \
```PING_LISTEN_PORT=n° Port```

4- Installer les dépendences \
```npm install```

5- Compiler le code qui est présent dans le dossier src \
```npx tsc index.ts```

6- Exécuter le code \
```node index.js```

7- Effectuer une requête vers l'API \
```curl http://localhost:2222/ping```