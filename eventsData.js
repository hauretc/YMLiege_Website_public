/*

Liste des évènements, à venir et passés (= liste d'objets)

Organisation de la liste : ordre chronologique des évènements (! Important à respecter)

Pour chaque évènement, 
    -> créer un dossier associé à l'évènement dans le dossier global "Images/Activities/" (format : Année-NomCode; voir exemples dans dossier global)
    -> ajouter dans ce dossier l'image qu'on veut afficher sur le site web + les éventuel documents internes associés à l'évènement (rapports d'activité, slides...)
    -> compléter et coller l'objet suivant tout en dessous du fichier :
        {
            title : "",
            date : "",                          // Date(s) sous format string
            type : ["", "", ...],               // Type(s) de l'évènement (Science et/ou Vulgarisation et/ou Rencontre)
                                                //   sous format liste de string
            desc : ``,                          // Texte descriptif de l'évènement
            collab : "",                        // (Si nécessaire) Infos sur les collaborations pour l'organisation d
                                                //   sous format string qui sera placé automatiquement après le string
                                                //   "en collaboration avec" 
                                                //   Exemples : "Réjouiscience et la Société Astronomique de Liège", "l'AGO",...
            financement : "",                   // (Si nécessaire) Infos sur le soutien financier pour l'organisation 
                                                //   sous format string qui sera placé automatiquement après le string 
                                                //   "avec le soutien financier"
                                                //   Exemples : "de l'EPS", "de l'AGO", "de Réjouisciences",...
            directory : "",                     // Nom du répertoire associé à l'évènement (format Année-NomCode)
                                                //   Exemple : 2018-PhysSport, 2019-AlumNight, ...
            int_links : {"" : ""}               // (Si nécessaire) Lien vers fichiers (pdf...) stockés sur le serveur lui-même
                                                //   (! dans le répertoire associé à l'évènement) -> Objet où key = texte à 
                                                //   afficher et value = nom du fichier
                                                //   Exemple : {"Pour consulter notre rapport d'activité" : "2019_SpringofScience.pdf",
                                                //              "Pour les slides présentées à l'évènement" : "slides.pdf"}
            ext_links : {"" : ""},              // (Si nécessaire) Liens extérieurs éventuels (évènement Facebook, sites 
                                                //   officiels) -> Objet où key = texte à afficher sur site et value = url 
                                                //   extérieur
                                                //   Exemple : {"Evenement Facebook" : "www.facebook.com/blahblabla",
                                                //              "Site officiel de Blahbla" : "www.blahbla.be"}
            mainImg : "",                       // Nom de l'image à afficher
            altImg : "",                        // Texte alternatif qui sera affiché si l'image n'existe pas 
                                                //   Exemple : "Affiche de l'évènement"
            hasPictures : bool,                 // (Si nécessaire) Si photos associées à l'évènement, true. Sinon false. 
                                                //   Attention à bien mettre les photos dans un dossier "Photos" dans le 
                                                //   dossier de l'évènement et à les renommer 1, 2, 3...
            nbrPictures : int,                  // (Si nécessaire) Si photos associées à l'évènement, nombre de photos
                                                //   présentes dans le dossier
            fmtPictures : "",                   // (Si nécessaire) Si photos associées à l'évènement, format des photos
                                                //   (donné en string). Attention, toutes photos ds même dossier
                                                //   doivent avoir le même format.
                                                //   Exemple: "jpg", "png"...
            status : ""                         // Statut de l'évènement : planned ou done
        }

Une fois que l'évènement est réalisé, 
    -> changer son keyword status de "planned" à "done"
    -> changer éventuellement le texte associé pour faire un petit récap de ce qu'il s'est passé/du nombre de personnes présentes...
       (plus intéressant à lire pour les visiteurs que de garder le texte d'invitation à l'évènement)
    -> si photos associées à l'évènement, 
        - ajouter les photos dans le dossier associé à l'évènement (dans un dossier nommé Photos)
        - ajouter le keyword hasPictures = true
        
*/


export let eventsData = [
    {
        title : "Séminaire : La Physique du sport",
        date : "12 octobre 2018",
        type : ["Science", "Rencontre"],
        desc : `Afin de lancer notre jeune section Young Minds Liège, nous avons organisé en début d'année académique 2018-2019 
                    une conférence sur la physique du sport. Les deux orateurs, Dr. Caroline Cohen et Prof. Christophe Clanet 
                    du Laboratoire d'Hydrodynamique de l'Ecole polytechnique (LadHyX) à Paris nous ont ainsi présenté le contenu 
                    de leurs recherches concernant l'application de la physique à divers sports tels que le rugby ou l'aviron. 
                    <br><br> Cette conférence ouverte à tous était ensuite suivie d'un barbecue de bienvenue afin de faire se rencontrer 
                    les physiciens de l'ULiège. Pour notre premier évènement, le succès a été au rendez-vous et Young Minds Liège a 
                    pu démarrer sous de très bons hospices. `,
        collab : "CESAM",
        financement : "du ReD",
        directory : "2018-PhysSport",
        mainImg : "phys_sport.jpg",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 5,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Printemps des Sciences : Elémentaire!",
        date : "Du 25 au 31 mars 2019",
        type : ["Vulgarisation"],
        desc: `A chaque printemps, les sciences et les technologies sont en fête dans toute la Fédération Wallonie-Bruxelles avec une 
                    foule d'activités gratuites organisées à destination des écoles et du grand public. 
                    <br><br>En 2019, le thème de cette semaine était « Elémentaire ! » et les membres de Young Minds Liège étaient présents durant deux jours pour 
                    faire voyager les petits comme les grands à travers la structure de la matière, des cristaux et molécules aux 
                    particules élémentaires. Grâce à des jeux, des expériences en direct ou encore des modélisations en trois 
                    dimensions, nos visiteurs ont pu toucher du doigt la physique de l'infiniment petit. `,
        collab : "Réjouisciences",
        financement : "de l'EPS",
        directory : "2019-PdS",
        int_links : {"Pour consulter notre rapport d'activité EPS sur cet évènement (en anglais)" : "2019_SpringofScience.pdf"},
        mainImg : "PdS2019.jpg",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 16,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "8èmes rencontres Young Minds",
        date : "Du 24 au 25 mai 2019",
        type : ["Rencontre"],
        desc : `Chaque année, les représentants de toutes les cellules Young Minds se rencontrent, sous la tutelle des membres du 
                    comité international. Celui-ci présente les initiatives envisagées à grande échelle (nouveaux/modifications des 
                    financements possibles, création de bases de données européenne pour les activités de vulgarisation, création 
                    d'un forum pour tous les membres des sections,...). Cette année et pour la première fois, Young Minds Liège était 
                    présent en la personne de son président Alexis Darras. 
                    <br><br>En outre, ces rencontres Young Minds sont aussi l'occasion pour chaque section de présenter son 
                    fonctionnement et sa "meilleure" activité de l'année. Un prix est décerné à la section la plus méritante. 
                    Cette année, le prix a été décerné aux sections d'Arménie et d'Ashtarak qui ont conçu et distribué des expériences 
                    pédagogiques dans différentes écoles en manque cruel de matériel. 
                    <br><br>Au final, ces rencontres sont l'occasion de découvrir les différentes réalités scientifiques européennes 
                    et d'échanger nos bonnes pratiques en terme de diffusion des sciences, de réseautage et de formations.`,
        directory : "2019-RencontresYM",
        int_links : {"Pour consulter le poster présenté lors de ces rencontres (en anglais)" : "LDposter.png"},
        ext_links : {"Site internet de ces 8èmes rencontres" : "https://epsymlm2019.sciencesconf.org/"},
        mainImg : "ld1.jpg",
        altImg : "Photo d'ensemble des participants à la rencontre", 
        status : "done"
    },
    {
        title : "Nuit des Chercheurs : Objectif Terre",
        date : "20 septembre 2019",
        type : ["Vulgarisation"],
        desc : `La Nuit européenne des Chercheurs est organisée chaque année dans différentes villes d'Europe, dont Liège. 
                    À cette occasion, des chercheurs de toutes les disciplines vont à la rencontre du public. 
                    <br><br>Ce vendredi 20 septembre, l'équipe Young Minds Liège a eu la chance de pouvoir participer à l'édition liégeoise de cet événement, organisée 
                    à la Médiacité et ayant comme thème 'Objectif Terre'. A cette occasion, nous avons proposé au public un tableau 
                    périodique géant se présentant sous forme de puzzle, afin d'aborder de façon ludique les différents éléments 
                    exploités dans le monde actuellement et leur impact sur l'environnement. Nous leur avons également proposé un 
                    quiz en ligne pour mettre en question leurs connaissances à propos de thèmes cruciaux par rapport à l'environnement, 
                    tels que par exemple l'émission de gaz à effets de serre ou le nucléaire. Notre puzzle a eu un franc succès, auprès 
                    des enfants comme de leurs parents, et nous espérons pouvoir renouveler l'expérience l'année prochaine !`,
        collab : "Réjouisciences",
        directory : "2019-NdC",
        mainImg : "Nuit_Chercheurs.png",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 3,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Alum'Night", 
        date : "13 novembre 2019",
        type : ["Rencontre"],
        desc : `L'Alum'Night est un événement organisé par Young Minds Liège dans le but de permettre aux étudiants en 
                    physique/astrophysique (bachelier, master, doctorat), de venir rencontrer différents alumni en (astro)physique de 
                    l'ULiège. Cette soirée a permis d'échanger avec des anciens étudiants ayant opté pour différents choix de 
                    carrières professionnelles (recherche, spatial, start up, académique, ensignement, industrie, ...). 
                    L'événement a attiré près de 100 personnes qui, nous en sommes convaincus, ont pu obtenir des pistes de réponse 
                    pour leur avenir. `,
        financement : "de l'EPS",
        rapport : "2019_AlumNight.pdf",
        directory : "2019-AlumNight",
        int_links : {"Pour consulter notre rapport d'activité EPS sur cet évènement (en anglais)" : "2019_AlumNight.pdf"},
        mainImg : "alumnight.png",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 7,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Les dossiers du vendredi",
        date : "Du 26 mars au 28 mai 2021",
        type : ["Vulgarisation"],
        desc : `Pour le Printemps des Sciences 2021, l'équipe de Young Minds Liège s'est attelée à proposer au grand public une liste 
                    de dossiers thématiques liés à des anniversaires d'évènements marquants dans le domaine de la physique, de 
                    l'astrophysique ou des technologies. 
                    <br><br> Associés à des activités ludiques ainsi qu'à des ressources supplémentaires pour creuser 
                    les sujets proposés, nos dossiers vous ferrons découvrir les principes physiques qui se cachent derrière 
                    la radio, les rayons X, les lasers, les hélicoptères, les vaisseaux spatiaux ou encore les centrales 
                    nucléaires.`,
        collab : "Réjouisciences",
        directory : "2021-DossiersVendredi",
        ext_links : {"Pour consulter les dossiers" : "https://www.rejouisciences.uliege.be/cms/c_13579302/fr/les-dossiers-du-vendredi"},
        mainImg : "dossiersvendredi2.jpg",
        altImg : "Photo d'illustration", 
        status : "done"
    },
    {
        title : "Nuit des Chercheurs : Observer l'Espace/Observer la Terre !",
        date : "30 septembre 2022",
        type : ["Vulgarisation"],
        desc : `En 2022, les Youngs Minds Liège se sont à nouveau joints à la Nuit européenen des Chercheurs. Cette fois-ci, nous avons
                    proposés aux visiteurs présents sur place de découvrir comment les astrophysiciens réussissent à détecter et à caractériser 
                    des planètes autour d'autres soleils que le nôtre. Grâce à notre Transit Simulator, une maquette reproduisant les passages
                    de planètes devant leur étoile, enfants comme adultes ont pu se mettre dans la peau de véritables chercheurs et profiter 
                    de ce moment pour nous poser toutes leurs questions.`,
        links : {"Pour consulter l'aftermovie de l'évènement" : "https://www.youtube.com/watch?v=VCWqjeMjgaQ"},
        collab : "Réjouisciences",
        financement : "de l'AGO et de l'EPS",
        directory : "2022-NdC",
        mainImg : "NdC2022.png",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 1,
        fmtPictures : "jpg",
        status : "done"
    }, 
    {
        title : "Printemps des Sciences : Diversités",
        date : "Du 20 au 26 mars 2023",
        type : ["Vulgarisation"],
        desc : `Cette année encore, l'équipe Young Minds Liège était présente pour fêter les sciences et technologies lors du 
                    Printemps des Sciences. Nous avons ainsi accueilli pendant 4 jours des élèves du secondaire mais également des familles
                    avec enfants afin de leur faire comprendre la diversité des planètes qui peuplent notre Univers à l'aide d'activités 
                    ludiques,  de maquettes et d'expériences en direct. 
                    <br><br>Ils ont ainsi pu découvrir les conditions très différentes et extrêmes qui règnent à la surface de 
                    certains corps de notre Système Solaire tels que Vénus, Mars ou encore Pluton. Grâce à notre Transit Simulator
                    (qui reproduit les passages de planètes devant leur étoile) et à nos expériences de spectroscopie, petits comme 
                    grands ont pu se mettre dans la peau des astrophysiciens qui détectent et étudient au jour le jour les planètes 
                    autour d'autres soleils que le nôtre. `,
        collab : "Réjouisciences et l'AGO",
        financement : "de l'EPS",
        directory : "2023-PdS",
        mainImg : "PdS2023.png",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 6,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Atelier : A la découverte des exoplanètes",
        date : "28 mars 2023",
        type : ["Vulgarisation"],
        desc : `Dans le cadre de la Semaine de l'Astronomie organisée à l'école Saint-Hadelin de Visé, une partie de l'équipe de 
                    Young Minds Liège est venue présenter aux élèves nos maquettes et autres activités ludiques permettant de découvrir
                    comment il est possible de détecter mais également de caractériser les exoplanètes, ces planètes qui orbitent autour 
                    d'autres étoiles que notre Soleil. Durant 3h, nous avons pu répondre à toutes les questions des jeunes, partager 
                    notre passion et, qui sait, peut-être créer quelques vocations. `,
        financement : "de l'école Saint-Hadelin (Visé)",
        directory : "2023-Vise",
        mainImg : "vise.jpg",
        altImg : "Photo de l'atelier exoplanètes organisé à l'école Saint-Hadelin de Visé", 
        hasPictures : true,
        nbrPictures : 2,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Ciné-Sciences : Seul sur Mars",
        date : "19 avril 2023",
        type : ["Science", "Vulgarisation"],
        desc : `Grâce à deux chercheurs de l'Université de Liège, Jean-Claude Gérard (spécialiste de la planète Mars) et Alain
                    Hambuckers (spécialiste de la biologie végétale), nous avons pu décrypter la science derrière le film "Seul sur Mars" 
                    de Ridley Scott. 
                    <br><br>Notre séance de cinéma améliorée a ainsi attiré plus de 60 curieux, à la recherche de réponses sur 
                    la conquête spatiale humaine et robotique, sur l'existence de tempêtes de sable martiennes et bien entendu, sur la 
                    possibilité de cultiver des pommes de terre sur la planète rouge !`,
        collab : "Réjouisciences",
        financement : "de l'EPS",
        directory : "2023-CineSciences",
        mainImg : "Affiche_V3.png",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 4,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Alum'Night Astro",
        date : "27 avril 2023",
        type : ["Rencontre"],
        desc : `Comme en 2019, Young Minds Liège a de nouveau organisé une soirée afin de discuter opportunités de carrières. cette
                    fois-ci, l'accent a été mis sur les possibilités d'emploi au sortir du Master en Sciences Spatiales de l'Université 
                    de Liège. Après la présentation de quelques statistiques réalisées sur une cinquantaine d'étudiants du Master sortis
                    entre 2008 et 2022, sept intervenants de tous horizons ont pu présenter leur différents parcours aux étudiants actuels 
                    et en discuter avec eux autour d'un verre de l'amitié offert par le département AGO.
                    <br><br> En rassemblant la quarantaine d'étudiants du Master en Sciences Spatiales ainsi que quelques étudiants en 
                    bachelier, cette soirée nous conforte dans l'idée d'organiser chaque année ce genre d'évènements, 
                    très appréciés pour leur côté "pratique" mais pour les rencontres qu'ils génèrent.`,
        financement :"de l'AGO",
        directory : "2023-AlumNightAstro",
        int_links : {"Pour consulter les slides projetées lors de l'évènement" : "AlumNightAstro2023.pdf"},
        mainImg : "Alumnight-2023-300ppi.png",
        altImg : "Affiche de l'évènement", 
        hasPictures : true,
        nbrPictures : 5,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Science in a Bottle",
        date : "22 et 23 mai 2023",
        type : ["Science", "Vulgarisation", "Rencontre"],
        desc : `Pour notre première édition de "Science in a Bottle", Young Minds Liège a investi le ØBar pour discuter physique et 
                    astrophysique autour de quelques boissons rafraîchissantes.
                    <br><br>Le lundi soir, Michaël Wery (Société Astronomique de Liège), Coralie Byttebier (Eurospace Center)
                    et Yanis Argyriou (KU Leuven) ont dévoilé les secrets des fabuleuses images de l'espace, réalisées grâce aux télescopes 
                    plantés dans vos jardins mais aussi grâce aux concentrés de technologie que sont les télescopes spatiaux tels 
                    que le Hubble Space Telescope ou le James Webb Space Telescope. Le lendemain, de l'infiniment grand, nous sommes passés
                    à l'infiniment petit et aux propriétés étonnantes de la matière. Cyril André, Jonathan Louvet et Adrien Wafflard (ULiège) nous ont ainsi fait 
                    découvrir les mystères des anti-bulles, de l'intrication quantique et des matériaux magnétoélastiques.
                    <br><br>Avec un public enthousiaste, présent en nombre et de nombreuses discussions avec nos intervenants, cette 
                    première édition a été un franc succès que nous comptons bien réitérer l'année prochaine!`,
        collab : "le ØBar, Réjouisciences et la Société Astronomique de Liège",
        financement : "de l'EPS",
        directory : "2023-SiaB",
        mainImg : "ScienceInABottle-Final-300ppi.png",
        altImg : "Affiche de l'évènement",
        hasPictures : true,
        nbrPictures : 11,
        fmtPictures : "jpg",
        status : "done"
    },
    {
        title : "Participation à la conférence de l'European Astronomical Society",
        date : "Du 10 au 14 juillet 2023",
        type : ["Rencontre"],
        desc : `En juillet dernier, deux de nos membres, Antoine Thuillier et Valentin Christiaens, ont été présenter notre Transit Simulator
                    lors de la conférence annuelle de l'European Astronomical Society qui se tenait cette année à Cracovie, en Pologne.
                    <br><br>Leur but était de montrer comment il est possible, avec l'aide de notre simulateur, de permettre au grand public de tirer 
                    des conclusions pertinentes à partir d'observations directes — et ainsi être capable de comprendre des phénomènes complexes 
                    et leurs implications sans qu'il n'ait besoin d'une longue explication de la théorie, qu'il déduit alors de lui même.`,
        directory : "2023-EAS",
        int_links : {"Pour consulter le poster présenté lors de cette conférence (en anglais)" : "young_minds_liege_poster_eas2023_v3.pdf"},
        ext_links : {"Pour consulter le programme de la conférence (en anglais)" : "https://eas2023programme.kuoni-congress.info/presentation/the-transit-simulator-from-dark-to-sparks",
                     "Pour plus d'explications sur notre Transit Simulator (en français)" : "workshop.html"},
        mainImg : "EAS2023_logo.png",
        altImg : "Logo de la conférence", 
        status : "done"
    },
    {
        title : "Ciné-Sciences",
        date : "Novembre 2023",
        type : ["Science", "Vulgarisation"],
        desc : `Retrouvez-nous en novembre pour un nouveau Ciné-Sciences pour allier plaisir du cinéma et découverte de la Physique.
                    <br><br>Plus d'infos sur l'évènement dans les prochaines semaines.`,
        directory : "2023-CineSciences2",
        mainImg : "cinesciences.jpg",
        altImg : "Photo du Ciné-Sciences 'Seul sur Mars'", 
        status : "planned"
    },
    {
        title : "Alum'Night",
        date : "Avril-Mai 2024",
        type : ["Rencontre"],
        desc : `Après le succès de l'Alum'Night 2019 et celui de l'Alum'Night Astro en avril dernier, retrouvez-nous en novembre pour 
                    une nouvelle soirée à la rencontre d'anciens étudiants en Sciences Physiques mais également en Sciences
                    Spatiales. Venez découvrir les différentes possibilités de carrière après un bachelier, un master ou même un doctorat 
                    (monde académique, recherche en entreprise, enseignement, start-ups...).
                    <br><br> Plus d'infos sur l'évènement  dans les prochains mois.`,
        directory : "2023-AlumNight",
        mainImg : "AlumNight.jpg",
        altImg : "Photo de l'AlumNight organisée en 2019", 
        status : "planned"
    }
]