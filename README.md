# Young Minds Liège - Site web - Public version

**Auteur** : Clémentine Hauret \
**Projet Github** : https://github.com/hauretc/YMLiege_Website (private repository) - https://github.com/hauretc/YMLiege_Website_public (public repository) \
**Website** : http://www.ymliege.uliege.be/ \
**Date de rédaction du README** : 27/09/23

## Aperçu général 

Le site YMLiège est un site web classique composé de différentes pages HTML dont le style est géré par un fichier CSS (style.css). Certaines pages HTML (concernant les membres ou les évènements) ainsi que les parties communes à toutes les pages du site (header et footer) sont également générées automatiquement à l'ouverture des dites pages grâce à un code JavaScript (JS) du même nom que la page HTML. Les données servant à créer ces pages sont stockées dans des objets JS enregistrés dans les fichiers JS dont le nom finit par "Data". Ainsi, la page pageX.html est créée par le code JS pageX.js à partir des données contenues dans pageXData.js.

## Explications des pages individuelles

Voici la liste des pages et fichiers composant le site web:

- Script **common.js**
    - Script appelé par toutes les pages HTML du site 
    - Utilité :
        - Création du header et du footer de chaque page HTML à partir des données (code HTML) stockées dans **commonData.js**
        - Gestion de l'interaction de l'utilisateur 
            - avec la barre de navigation
            - avec les fenêtres modales contenant l'adresse mail de contact
- Page **index.html** 
    - Utilité :
        - Accueil du site
        - Présentation générale de la section YMLiège et des activités associées
        - Direction de l'utilisateur vers les différentes pages du site
        - Invitation de l'utilisateur à rejoindre YMLiège
    - Script JS associé : **index.js** 
        - Adaptation de la barre de navigation pour une meilleure expérience utilisateur
- Page **project.html** 
    - Utilité : 
        - Description en détails du project YM et de la section liégeoise
        - Liens et logos des organisation partenaires (EPS, BPS, ULiège, DEPHY, AGO, Réjouisciences)
    - Script JS associé : **project.js** 
        - Adaptation de la barre de navigation pour une meilleure expérience utilisateur
- Pages **members.html** et **membersOld.html**
    - Utilité :
        - Présentation des membres actuels (**members.html**) et anciens (**membersOld.html**) de la section YMLiège
        - Séparation en membres du bureau, membres actifs et responsable académique (**members.html**)
        - Petit historique de la section (**membersOld.html**)
    - Scripts JS associés : **members.js** et **membersOld.js**
        - Adaptation de la barre de navigation pour une meilleure expérience utilisateur
        - Génération automatique des pages à l'ouverture à partir des données (objets JS) stockées dans le fichier **membersData.js**
        - Création d'une fenêtre modale donnant plus d'informations sur un membre choisi
        - Gestion de l'interaction de l'utilisateur avec la fenêtre modale
- Page **events.html**
    - Utilité: 
        - Présentation des évènements passés et à venir
        - Possibilité d'ajouter des liens vers des sites webs extérieurs, des documents internes et/ou des photos de l'évènement
    - Script JS associé : **events.js**
        - Adaptation de la barre de navigation pour une meilleure expérience utilisateur
        - Génération automatique de la page à l'ouverture à partir des données (objet JS) stockées dans le fichier **eventsData.js**
- Page **workshop.html**
    - Utilité : 
        - Présentation des ateliers proposés par YMLiège
    - Script JS associé : **workshops.js**
        - Adaptation de la barre de navigation pour une meilleure expérience utilisateur
- Dossier *spacedebris* 
    - Dossier comprenant tous les fichiers faisant fonctionner le jeu Space Débris créé par Martin Farnir (game engine Godot) dont la page **SpaceDebris.html** vers laquelle le menu dirige
- Dossier *Fonts*
    - Dossier contenant les polices d'écriture utiles (Cooper-Hewitt et Source-Sans-Pro)
- Dossier *Images*
    - Dossier contenant les images associées aux pages (+ les documents internes pour certains évènements)
    - Sous-dossiers associés à chaque page du site + sous-dossier avec les logos


## Modifications simples du site

Deux sortes de modifications peuvent être faites très simplement sur le site : les modifications concernant les ***membres*** (ajout, retrait, modification des informations, passage du statut de membre actif au statut de membre ancien, modification du bureau) et celles concernant les ***évènements*** (ajout, retrait, modification des informations, passage du statut d'évènement à venir à évènement passé). 


Pour ces deux types de modifications, il vous suffira d'aller modifier ***uniquement*** les fichiers **membersData.js** et **eventsData.js** respectivement. En préambule de chacun de ces fichiers, vous trouverez des explications plus précises concernant l'ajout d'un membre/évènement et les informations à fournir dans ce cas. La page **membre.html**/**events.html** sera alors créée automatiquement par les scripts JS associés.

:warning: Toute autre modification concernant le contenu ou le style d'une page est "plus complexe" à effectuer et requiert des connaissances (basiques) en HTML, CSS et JS. Mais rien d'insurmontable, ne vous en faites pas :smiley:
