## Installation du projet

### Copie du projet en local

1. Cliquez sur le bouton "code", puis sur la section HTTPS qui affiche l'url
   suivante :
   `https://github.com/belarif/sport-see.git`
   copiez cette url à utiliser pour installer le projet en local.

2. Ouvrez le terminal de votre IDE. Si vous utilisez le server WampServer64, positionnez vous sur le chemin :
   `c:/wamp64/www`

grace à la commande : cd Comme suit:
`cd c:/wamp64/www`

Si vous utilisez un server autre que WampServer64, positionnez vous sur le chemin qui permettra l'exécution du site.

3. Sur le même chemin, tapez la commande suivante pour cloner le projet :
   `git clone https://github.com/belarif/sport-see.git`

Après exécution de la commande, le projet sera copié dans le répertoire `www`

### Installation des dépendances

1. backend :
   positionnez vous sur le chemin :
   `c:/wamp64/www/sport-see/back-end` puis exécutez la commande :
   `yarn`

2. frontend :
   positionnez vous sur le chemin :
   `c:/wamp64/www/sport-see/front-end` puis exécutez la commande :
   `yarn`

### Lancement de l'application

1. backend :
   `yarn dev`

2. frontend
   `npm start`

### Mock de données :

Rendez-vous au fichier `.env` à la racine du répertoire `front-end` pour choisir mock comme source de données

### Visualisation des données utilisateurs 12 et 18

- utilisateur d'id = 12 :
  `http://localhost:3001/Profil/12`

- utilisateur d'id = 18 :
  `http://localhost:3001/Profil/18`
