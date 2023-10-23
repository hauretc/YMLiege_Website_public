/*  

Liste des membres, actuels et anciens (= liste d'objets)

Organisation de la liste :  1. Responsable académique actuel
                            2. Membres du bureau actuel (Président.e, Vice-Président.e, Secrétaire, Trésorier.ère)
                            3. Autres membres actifs actuels
                            4. Anciens membres

=> Pour chaque membre, compléter et copier l'objet suivant : 
{
    id : "",                    // Prénom+Nom collés - Attention, l'id doit être unique parmi tous les membres (a priori, on ne devrait pas avoir de probleme 
                                //   de ce côté là mais on ne sait jamais)
    firstName : "",                  
    lastName : "",              
    inBureau : bool,            // Si dans le bureau, true. Sinon, false.
    orderInBureau : 1-4,        // (Si necessaire) Ordre dans le bureau (Président.e = 1 Vice-Président.e = 2,
                                    Secrétaire = 3, Trésorier.ère = 4)
    title : "",                 // Président.e, Vice-Président.e, Secrétaire, Trésorier.ère, Membre actif.ve, Ancien.ne membre, ...
    domain : "",                // Domaine de recherche (Astrophysique, Physique des matériaux, Physique des fluides...)
    textTitle : ``              // (Si nécessaire) Titre du texte descriptif de la personne et/ou de sa recherche
    text : ``,                  // Texte descriptif de la personne et/ou de sa recherche
    isActive : bool,            // Si toujours actif, true. Sinon, false.
    img : "placeholder.png",    // Image par défault (placeholder.png). Sinon, nom de l'image associée à la personne
    website : ""                // (Si nécessaire) Url (sous forme de string) de site web
}

Quand un membre passe d'actif à ancien, 
    -> (si possible) couper/coller son entrée en bas du fichier
    -> transformer le keyword isActive en false
    -> (si dans le bureau) mofifier son titre en précisant les dates de son passage dans le bureau 
    
*/


export let membersData = [
   
    /* 
        MEMBRES ACTIFS 
            -> keyword isActive = true
    */

    //      -- Responsable Académique 
    {
        id : "PeterSchlagheck",
        firstName : "Peter",
        lastName : "Schlagheck",
        isActive : true,
        inBureau : false,
        title : "Responsable académique",
        domain: "Physique quantique statistique",
        text: `L'équipe de recherche théorique de Peter Schlagheck (Physique Quantique Statistique) est active 
                dans le domaine général des systèmes quantiques complexes. L'équipe est particulièrement focalisée 
                sur la compréhension théorique et la modélisation numérique des processus de transport quantique avec 
                des atomes ultrafroids et des condensats de Bose-Einstein. Un objectif principal de ses activités est 
                d'obtenir une perspective complémentaire sur des phénomènes de transport complexes qui ont généralement 
                lieu dans le contexte de la physique mésoscopique électronique (comme l'effet tunnel, la localisation 
                Anderson et faible, ainsi que le blocage par interaction) et de proposer et guider de nouvelles expériences 
                explorant de tels phénomènes en utilisant des gaz quantiques ultrafroids. A long terme, l'équipe vise aussi 
                à contribuer à la réalisation d'un circuit logique quantique qui utilise des transistors dont le principe de 
                fonctionnement est basé sur des atomes ou molécules neutres interagissant entre eux.`,
        website : "http://www.pqs.ulg.ac.be/",
        img : "PeterSchlagheck.png"   
    },

    /*      -- Bureau 
                -> keyword inBureau = true 
                -> préciser l'ordre dans le bureau (président = 1, vice-président = 2, secrétaire = 3, trésorier = 4)
    */
    {
        id : "AntoineThuillier",
        firstName : "Antoine",
        lastName : "Thuillier",
        isActive : true,
        inBureau : true,
        orderInBureau : 1,
        title : "Président",
        domain : "Astrophysique",
        textTitle : `À la recherche des planètes disparues`,
        text : `Il y a dans notre ciel de petites étoiles peu connues, appellées sous-naines chaudes. Elles sont vieilles et ont 
                la particularité d'être bien plus petites que la plupart de leurs congénères à cet age. En plus, elle sont crées 
                juste après une des phases clés de la vie des étoiles : la phase de géante rouge.
                <br><br>Mais voilà, jusqu'ici aucune planète n'a été découverte autours d'elles. Pourtant elles se forment à partir 
                d'étoiles qui ressemble beaucoup à notre Soleil, où on sait que beaucoup de planètes se trouvent. Alors où sont passées 
                les planètes ? Sont elles toutes détruites pendant la phase de géante rouge ?
                <br><br>Ce sont exactement les questions auxquelles je cherche à répondre, en observant un maximum d'étoiles sous-naines 
                chaudes pour y détecter la présence de planètes, ou bien montrer qu'il n'y en a pas ! `,
        img : "AntoineThuillier.jpg" 
    },
    {
        id : "GuillaumeSicorello",
        firstName : "Guillaume",
        lastName : "Sicorello",
        isActive : true,
        inBureau : true,
        orderInBureau : 2,
        title : "Vice-Président",
        domain : "Astrophysique",
        textTitle : `À la poursuite des aurores de Jupiter`,
        text : `Les aurores sont parmi les phénomènes les plus envoutants du système solaire. Observables dans les régions polaires, 
                elles se déclinent sur Terre en de fines draperies aux couleurs multiples. Les aurores existent cependant sur 
                d'autres planètes. En particulier, c'est sur Jupiter qu'elles sont les plus puissantes.
                <br><br>Une aurore est la conséquence directe ou indirecte de la collision entre des particules d'origine spatiale 
                et les atomes et molécules contenus dans l'atmosphère d'une planète. Sur Jupiter, de telles collisions engendrent 
                la formation d'ions H3+, principaux responsables des aurores infrarouges. Dans le cadre de ma thèse, que j'effectue 
                au Laboratoire de Physique Atmosphérique et Planétaire de l'ULiège, je m'intéresse à ces ions et à leur capacité à 
                rendre l'atmosphère jovienne conductrice de courants. Grâce à des mesures réalisées par la sonde Juno, actuellement 
                en orbite autour de Jupiter, et à des modèles atmosphériques, je peux calculer la quantité d'ions H3+ présent dans 
                l'atmosphère et ainsi déterminer sa conductivité électrique.`,
        img : "GuillaumeSicorello.JPG" 
    },
    {
        id : "LinusHead",
        firstName : "Linus",
        lastName : "Head",
        inBureau : true,
        orderInBureau : 3,
        title : "Secrétaire",
        domain : "Astrophysique",
        textTitle : `Jupiter, ses aurores, et leur variabilité`,
        text : `Parmi les planètes du système solaire, Jupiter est de loin la plus grande, la plus impressionnante, et la plus digne du 
                titre de « Roi des Planètes » … et que siérait-il mieux à un roi qu'une couronne ?
                <br><br>Les aurores qui ornent les deux pôles de Jupiter sont bien plus puissantes et plus violentes que celles de la 
                Terre. Contrairement aux aurores terrestres, qui ont besoin du plasma extérieur du vent solaire pour se nourrir, le 
                système jovien dispose d'une richesse de plasma propre à lui-même, venant du volcanisme explosif de sa lune, Io. 
                Ce plasma est contraint à marcher au pas avec le rythme de Jupiter par son magnétisme dominant. Liées par le champ 
                magnétique de Jupiter à sa magnétosphère étendue, les couronnes aurorales servent de reflet à tout ce qu'il se passe 
                dans l'environnement de la planète et qui permettent aux chercheurs astucieux, avec l'aide des télescopes comme Hubble, 
                d'étudier indirectement ses processus magnétosphériques si peu compris. 
                <br><br>Mais le cerveau humain a ses limites et nos bases de données sont énormes. Il nous faut toujours plus de 
                puissance de calcul, des algorithmes encore plus doués, qui intègrent les méthodes Computer Vision et Machine 
                Learning, pour détecter et caractériser la variabilité subtile des aurores joviennes. Pour ma part, j'utilise ces 
                méthodes pour quantifier le dynamisme auroral de Jupiter et essayer, petit à petit, de lever le voile sur les 
                origines des aurores les plus puissantes et les plus majestueuses de notre système solaire. `,
        isActive : true,
        img : "LinusHead.png" 
    },
    {
        id : "IrenePardoCantos",
        firstName : "Irene",
        lastName : "Pardo Cantos",
        inBureau : true,
        orderInBureau : 4,
        title : "Trésorière",
        domain : "Géophysique",
        textTitle : ``,
        text : `Notre atmosphère contient plein de gaz qui donnent lieu à une température, plus ou moins agréable, c'est l'effet de 
                    serre naturel. De plus, on a une couche d'ozone au-dessus de nos têtes, plus spécifiquement à la stratosphère, 
                    qui nous protège des rayonnements solaires très énergétiques. Ces deux éléments sont très importants pour le 
                    développement de la vie sur Terre comme on la connaît aujourd'hui. Néanmoins, à cause de l'activité humaine et 
                    l'émission des différents gaz comme le CO2, le méthane, mais aussi des gaz en traces comme les CFCs, HCFCs et 
                    HFCs, la température de notre planète est en train de grimper de plus en plus (effet de serre additionnel) 
                    et la couche d'ozone est amincie à cause des gaz chlorés. Ce sont ces gaz en traces que j"étudie, car même 
                    s"ils apparaissent en plus petites quantités dans l"atmosphère que les très populaires CO2 et méthane, ces 
                    CFCs, HCFCs et HFCs ont des impacts très importants sur la destruction de l"ozone stratosphérique, ainsi que 
                    sur le réchauffement de la Terre. C"est pourquoi mon équipe et moi mesurons, analysons et surveillons les 
                    abondances atmosphériques de tous ces gaz depuis la station du Jungfraujoch, dans les Alpes suisses, afin de 
                    vérifier que les normes imposées par le Protocole de Montréal sont respectées à niveau mondial.`,
        isActive : true,
        img : "IrenePardoCantos.jpg" 
    },

    /*      -- Autres membres actifs
                -> keyword inBureau = false
    */

    {
        id : "LoicFellay",
        firstName : "Loïc",
        lastName : "Fellay",
        inBureau : false,
        title : "Membre actif",
        domain : "Astrophysique",
        textTitle : ``,
        text : ``,
        isActive : true,
        img : "placeholder.png" 
    },
    {
        id : "LorenzoKonig",
        firstName : "Lorenzo",
        lastName : "König",
        inBureau : false,
        title : "Membre actif",
        domain : "Astrophysique",
        textTitle : ``,
        text : ``,
        isActive : true,
        img : "placeholder.png" 
    },
    {
        id : "CyrilAndre",
        firstName : "Cyril",
        lastName : "André",
        inBureau : false,
        title : "Membre actif",
        domain : "Physique des fluides",
        textTitle : ``,
        text : `"Une antibulle ? Vous voulez dire bulle ?" Non, non, une antibulle. Une antibulle est l'opposé d'une bulle : 
                une coquille d'air séparant deux liquides. Cette curiosité fluidique de petite taille peut apparaître lorsque 
                vous faites la vaisselle ! Il vous suffit de verser délicatement de l'eau savonneuse dans votre évier et le tour 
                est joué ! Cependant, il faut faire attention, car ces objets sont très fragiles et ont une durée de vie limitée. 
                Le but de ma thèse est de trouver des moyens de stabiliser ces antibulles en utilisant des procédés mécaniques, 
                thermiques ou chimiques. Une fois stabilisées, les antibulles pourraient être utilisées pour délivrer des substances 
                de manière localisée dans un liquide ou pour mélanger des fluides à petite échelle.`,
        isActive : true,
        img : "CyrilAndre.jpg" 
    },
    {
        id : "LyneVandeVyvere",
        firstName : "Lyne",
        lastName : "Van de Vyvere",
        inBureau : false,
        title : "Membre active",
        domain : "Astrophysique",
        textTitle : `Étude de l'expansion de l'Univers grâce au phénomène de mirage gravitationnel`,
        text : `Un phénomène bien connu est celui des mirages dans le désert : on croit voir une oasis, un plan d'eau alors qu'en fait 
                il n'y a que du sable. Il s'agit en réalité d'une image du ciel bleu qui apparait parce que les rayons lumineux venant 
                du ciel sont courbés à cause de la différence de température entre l'air très chaud près du sol et l'air ambiant un peu 
                plus froid. Dans l'espace, ce n'est pas une différence de température qui est à l'oeuvre mais bien une différence de 
                gravitation. Il est alors possible de voir plusieurs images d'une même lumière lointaine si une galaxie - un ensemble 
                de centaines de miliard d'étoiles comme notre soleil, c'est très gros et surtout très lourd - est justement sur le chemin 
                de cette lumière. Grâce à ce phénomène, appelé mirage gravitationnel, on peut en apprendre plus sur l'Univers et ce 
                qu'il y a dedans mais surtout, mesurer précisément la vitesse d'expansion de l'Univers. Mon but est d'aider au calcul 
                de ce taux d'expansion et d'identifier et caractériser les erreurs qu'on fait pendant ce calcul. J'effectue ces 
                recherches au département d'Astrophysique, Géophysique et Océanographie (AGO) de l'université de Liège au sein de 
                l'unité STAR (Space sciences, Technologies and Astrophysics Research).`,
        isActive : true,
        img : "LyneVandeVyvere.jpg" 
    },
    {
        id : "MartinFarnir",
        firstName : "Martin",
        lastName : "Farnir",
        inBureau : false,
        title : "Membre actif",
        domain : "Astrophysique",
        textTitle : ``,
        text : ``,
        isActive : true,
        img : "placeholder.png" 
    },
    {
        id : "MathieuVanderDonckt",
        firstName : "Mathieu",
        lastName : "Vander Donckt",
        inBureau : false,
        title : "Membre actif",
        domain : "Astrophysique",
        textTitle : ``,
        text : ``,
        isActive : true,
        img : "placeholder.png" 
    },
    {
        id : "MathildeTimmermans",
        firstName : "Mathilde",
        lastName : "Timmermans",
        inBureau : false,
        title : "Membre active",
        domain : "Astrophysique",
        textTitle : ``,
        text : `La recherche de vie dans l'Univers est une question centrale en astronomie. Loin de l'idée de trouver de petits 
                extra-terrestres verts, les scientifiques comptent plutôt sur la découverte de bio-signatures, des traces de 
                composés chimiques particuliers dans l'atmosphère qui seraient créés par des procédés biologiques. Pour ce faire, 
                il faut avant tout trouver des planètes dans d'autres systèmes solaires qui pourraient abriter la vie. Mon travail 
                au sein de l'équipe ExoTIC de l'Université de Liège consiste à trouver de nouvelles planètes idéales pour la 
                recherche de la vie grâce à la méthode des transits. Un transit se produit lorsqu'une planète passe devant son 
                étoile et produit une éclipse (partielle) de celle-ci. Quand une partie de la lumière de l'étoile est cachée par 
                la planète, on observe une baisse apparente de la luminosité de l'étoile lorsque l'on regarde celle-ci en fonction 
                du temps. Comme la proportion de lumière cachée par la planète dépend de la taille de cette dernière par rapport à 
                celle de l'étoile, un transit d'une planète de taille donnée sera plus marqué pour les plus petites étoiles. Si une 
                planète a une atmosphère, cette dernière pourra absorber la lumière dans certaines couleurs en fonction de sa 
                composition, comme l'atmosphère de notre terre qui absorbe la majorité des UV venant du soleil. En regardant la 
                diminution apparente de luminosité de l'étoile dans les différentes couleurs, on observera que la taille apparente 
                de planète change. En effet, quand la lumière est absorbée par l'atmosphère, la planète paraît plus grosse 
                (la planète ET son atmosphère bloquent la lumière). On peut alors en déduire la composition de l'atmosphère. 
                Pour ma thèse, je me concentre donc sur les systèmes étoile-petite planète produisant les meilleurs signaux pour 
                des études de ce type. Je cherche donc des planètes terrestres orbitant autour de petites étoiles froides.`,
        isActive : true,
        img : "MathildeTimmermans.jpg" 
    },
    {
        id : "JudithBiernaux",
        firstName : "Judith",
        lastName : "Biernaux",
        inBureau : false,
        title : "Membre actif",
        domain : "Astrophysique, Vulgarisation scientifique",
        textTitle : `Mirages gravitationnels, matière sombre et vulgarisation scientifique`,
        text : `Ancienne doctorante au département d'astrophysique de l'ULiège, mon projet de recherche concernait les mirages 
                gravitationnels. Comme les mirages sur Terre, il s'agit d'images multiples et déformées d'objets lointains. Ici, 
                pas de palmiers ni d'oasis, mais des objets lointains et brillants comme des quasars. Ces images trompeuses sont 
                causées par un excès de masse au sein d'une galaxie située sur le trajet de la lumière provenant de l'objet lointain. 
                En étudiant cet artefact, on peut obtenir des informations sur la masse de la galaxie qui les a provoquées. Cet excès 
                de masse est le plus souvent attribué à de la matière sombre. La matière sombre, c'est un peu l'homme invisible de 
                l'espace : on ne peut pas la voir directement, mais on peut voir son effet sur l'environnement, notamment via la 
                gravitation. J'ai étudié huit galaxies différentes avec ce formalisme. Contenaient-elles de la matière sombre ? 
                Un peu ? Beaucoup ? À la folie ? La réponse dans ma thèse...! 
                <br><br> Depuis la fin de ce projet, je me consacre à la 
                communication scientifique. Je suis une astrophysicienne bavarde. Je suis autant passionnée par l'espace que par 
                la communication. Mon credo est que la connaissance est un bien public, et que la science doit être au coeur des 
                sociétés humaines. `,
        isActive : true,
        img : "JudithBiernaux.png" 
    },


    /* 
        ANCIENS MEMBRES
        
        Une fois que le membre n'est plus actif,
            -> déplacer son objet ci-dessous 
            -> transformer le keyword isActive en false
            -> transformer le keyword title en "Ancien/ne membre" ou en "Président + années" si membre a été président
    */

    {
        id : "AlexisDarras",
        firstName : "Alexis",
        lastName : "Darras",
        title : "Président 2018-2019",
        domain : "Physique statistique",
        textTitle : `Évaporation sous champ de gouttes de colloïdes superparamagnétiques`,
        text : `Les colloïdes sont des liquides contenant des petites particules soumises à l'agitation thermique. 
                De nombreux fluides du quotidien, comme la peinture, l'encre, le café, le vin rouge ou le sang, 
                correspondent à cette description. Les taches laissées par ces gouttes après évaporation du liquide 
                sur une surface plate dépendent de nombreux facteurs tels que la température, la composition exacte 
                de la goutte,... Ces 'taches' sont utilisées couramment : quand on peint une surface ou qu'on écrit 
                sur une surface lisse avec un marqueur, par exemple. De plus, concernant le sang, la structure des 
                taches dépend de l'état de santé de la personne d'où vient ce sang. Cependant, les mécanismes qui mènent 
                aux différentes structures que l'on peut observer sont encore mal compris. Le but de mes recherches est 
                de faire le lien entre les interactions des particules et la structure du dépôt observée. Pour cela, 
                j'utilise des particules magnétisables dont on contrôle les interactions à l'aide de champs magnétiques. 
                Ces champs agissent donc comme une télécommande pour contrôler les interactions et les dépôts obtenus.`,
        isActive : false,
        img : "AlexisDarras.png"
    },
    {
        id : "FlorenceMignolet",
        firstName : "Florence",
        lastName : "Mignolet",
        title : "Présidente 2019-2021",
        domain : "Physique des fluides",
        textTitle : ``,
        text : ``,
        isActive : false,
        img : "FlorenceMignolet.jpg"
    },
    {
        id : "JosephLombardo",
        firstName : "Joseph",
        lastName : "Lombardo",
        title : "Secrétaire 2018-2019",
        domain : "Physique des matériaux",
        textTitle : `Nanofabrication de jonctions supraconductrices`,
        text : `Mes recherches se concentrent essentiellement sur la fabrication de nanofils et de jonctions en matériaux 
                supraconducteurs à l'échelle nanoscopique en utilisant une combinaison de méthodes à la fois classiques et 
                innovantes au Laboratoire de Physique Expérimentale des Matériaux Nanostructurés (EPNM) de l'ULiège.`,
        isActive : false,
        img : "JosephLombardo.png"
    },
    {
        id : "EmileFourneau",
        firstName : "Emile",
        lastName : "Fourneau",
        title : "Vice-Président 2018-2021",
        domain : "Physique des matériaux",
        textTitle : `Perturbation locale de l'injection de spin par des champs magnétiques non-homogène`,
        text : `Les électrons possèdent à la fois une charge et un spin. Ces deux propriétés intrinsèques sont individuellement 
                mises à contribution pour manipuler, traiter ou stocker l'information, à travers l'électronique et le magnétisme 
                présent dans tous les oridnateurs. En combinant des matériaux propres à ces deux disciplines tel que les 
                semiconducteurs et les Ferro-aimants, il est possible d'induire un courant d'électrons dont les spins sont 
                majoritairement polarisés dans une direction préférentielle. On parle alors d'injection de spin. Le courants 
                de spin présent dans un matériau non-magnétique est un phénomène hors-équilibre et est donc très sensible aux 
                perturbations magnétiques extérieures. Dans ma thèse, j'étudie l'impact que peu avoir une perturbation magnétique 
                local sur l'injection, le transport et la detection de courant de spin dans le germanium.`,
        isActive : false,
        img : "EmileFourneau.png"
    },
    {
        id : "SylvainBlancoAlvarez",
        firstName : "Sylvain",
        lastName : "Blanco Alvarez",
        title : "Trésorier 2018-2021",
        domain : "Physique des matériaux",
        textTitle : `Structures nanoscopiques et propriétés de transport`,
        text : `On ne roule pas en voiture de la même façon sur l'autoroute que dans un chemin de campagne. Pour les électrons, 
                c'est pareil. Dans mon travail au sein du groupe EPNM, j'utilise des techniques de création de matériaux à l'échelle 
                du nanomètre pour forcer les électrons à prendre ces chemins de campagne et en déduire les propriétés fondamentales 
                des nanomatériaux.`,
        isActive : false,
        img : "SylvainBlancoAlvarez.png"
    },
    {
        id : "ClementineHauret",
        firstName : "Clémentine",
        lastName : "Hauret",
        title : "Secrétaire 2019-2021",
        domain : "Astrophysique extragalactique",
        textTitle : `Vers une meilleure compréhension du côté sombre de notre Univers`,
        text : `Parmi les plus grandes inconnues actuelles de l'Astrophysique, l'énergie et la matière sombres semblent constituer 
                plus de 95% de notre Univers sans que nous ne sachions réellement ce qu'elles sont. Ainsi, ce n'est que par l'action 
                qu'elles ont sur leur environnement, c'est-à-dire sur les étoiles et surtout sur les galaxies qui composent notre 
                Univers, que nous avons des indices de leur existence. Dans mon doctorat, que j'effectue au sein du groupe OrCA de 
                l'unité de recherche STAR, je m'attache à comprendre certaines des observations qui trahissent la présence de matière 
                et d'énergie sombres. J'ai ainsi étudié certaines étoiles en fin de vie, les supernovae de type Ia, ainsi que la façon 
                dont les galaxies spirales tournent sur elles-mêmes, tout cela afin de tenter de faire la lumière sur le côté sombre de 
                notre Univers.`,
        isActive : false,
        img : "ClementineHauret.jpg"
    }, 
    {
        id : "ThomasRatz",
        firstName : "Thomas",
        lastName : "Ratz",
        title : "Ancien membre",
        domain : "Physique des matériaux",
        textTitle : `Prospection théorique de structures de chalcophorytes en vue de la réalisation expérimentale de cellule photovoltaïque`,
        text : `Des panneaux photovoltaïques ? Il est devenu assez commun d'en voir sur nos toits ou dans nos jardins. Cependant, 
                cette technologie encore innovante il y a de ça quelques années, commence à atteindre certaines limites théoriques 
                en terme d'éfficacité. Un intérêt grandissant a donc été porté à l'élaboration de cellules photovoltaïques repoussant 
                ces limites théoriques. Dans ce contexte, ma recherche consiste en une double mission. Premièrement, une recherche de 
                nouveaux matériaux permettant d'augmenter l'éfficacité de ces cellules photovoltaiques tout en gardant à l'esprit la 
                nécessité d'abondance de ces matériaux pour garder des coups de productions faibles. Pour se faire, j'utilise un code 
                de calcul me permettant de varier à l'échelle atomique la structure des matériaux et d'en observer leurs propriétés. 
                Deuxièmement, la réalisation et l'étude de cellules photovoltaïques de manière expérimentale. La technologie dont 
                nous disposons à l'heure actuelle nous permet entre autre de régler le pourcentage d'un élément comparé à un autre 
                dans un matériau donné tout en limitant l'épaisseur déposée à un centième de l'épaisseur d'un cheveu. Cette double 
                approche permet d'avoir à l'esprit les possibilités ainsi que les limitations de la recherhe théorique et expérimentale.`,
        isActive : false,
        img : "ThomasRatz.jpg"
    },
    {
        id : "FrancoisChaltin",
        firstName : "François",
        lastName : "Chaltin",
        title : "Ancien membre",
        domain : "Physique des matériaux",
        textTitle : `Etude expérimentale et théorique du mouillage de pores nanométriques`,
        text : `Le mouillage est le comportement d'un liquide en contact avec une surface solide. Ces comportements qui découlent 
                des interactions intermoléculaires entre les molécules de liquide, solide et de gaz sont bien connus à l'échelle 
                du millimètre mais méconnu lorsqu'on diminue les dimensions jusqu'au nanomètre. Cette diminution d'échelle est 
                importante dans de nombreux domaines comme par exemple l'élaboration et l'amélioration de supercapacitance qui 
                permettent de recharger des véhicules électriques en quelques minutes.`,
        isActive : false,
        img : "FrancoisChaltin.png"
    },
    {
        id : "SébastienMawet",
        firstName : "Sébastien",
        lastName : "Mawet",
        title : "Ancien membre",
        domain : "Physique des fluides",
        textTitle : `Interactions entre bulles de savon et champs : déformations et rupture`,
        text : `Que ce soit lorsqu'on se lave, lorsqu'on se sert une bière ou lorsqu'on tente d'impressionner son petit cousin 
                avec un superbe tube à bulles, les mousses et les bulles sont des phénomènes observés et expérimentés par tous 
                quotidiennement. Cependant, aussi commun qu'ils puissent paraître, ces phénomènes ne sont toujours que partiellement 
                compris physiquement. Ma thèse s'inscrit dans ce cadre et cherche à comprendre un peu mieux l'interaction entre les 
                bulles et les champs magnétiques et électriques. Ces champs vont mener à la déformation des bulles d'une manière 
                toute particulière et c'est ce sujet précis qui m'occupe en ce moment. Au-delà de l'intérêt purement théorique, 
                ce système est une manière unique d'étudier l'importance des effets de surfaces, les bulles étant constituées 
                d'une fine interface de liquide entourée de part et d'autre par de l'air.`,
        isActive : false,
        img : "SebastienMawet.jpg"
    },
    {
        id : "JoséphineVanHulle",
        firstName : "Joséphine",
        lastName : "Van Hulle",
        title : "Ancienne membre",
        domain : "Physique des fluides",
        textTitle : `Transport capillaire de gouttes sur des structures coniques`,
        text : `Dans de nombreuses régions arides, des animaux et des plantes se sont adaptés pour survivre durant de longues 
                périodes de sécheresse. Parmi ces plantes adaptées aux régions désertiques, on peut citer les cactus. En effet, 
                les cactus possèdent des épines qui leurs permettent de collecter l'eau présente dans l'air. Cette collecte se 
                fait en plusieurs temps, tout d'abord, l'eau présente dans l'air se condense au niveau de la pointe de l'épine 
                (nucléation), et ce, jusqu'à former une goutte, ensuite cette goutte est transportée grâce à la forme particulière 
                de l'épine en direction de la plante (transport capillaire). Le but de ma thèse est d'imiter cette collecte d'eau 
                par les épines de cactus, c'est une approche biomimétique. Je me concentre principalement sur la dernière étape de 
                cette collecte d'eau, soit le transport de la goutte sur l'épine. Pour imiter l'épine, une imprimante 3D est utilisée 
                dans le but de créer des cônes. On observe, en laboratoire, qu'une goutte de liquide déposée au niveau de ce cône 
                synthétique est bien transportée en direction de la base du cône. Je cherche donc à décrire et à comprendre physiquement 
                ce transport. Le but étant de créer l'épine synthétique permettant une collecte d'eau la plus efficace.`,
        isActive : false,
        img : "JosephineVanHulle.jpg"
    },
    {
        id : "MichaelLobet",
        firstName : "Michaël",
        lastName : "Lobet",
        title : "Ancien membre",
        domain : "Photonique, physique de l'état solide",
        textTitle : `Photonique et optique numérique`,
        text : `Mes activités de recherche s'intéressent à la photonique et à la physique de l'état solide, avec une emphase 
                sur l'optique numérique. Plus particulièrement, mes domaines d'expertise sont la super-absorption d'ondes 
                électromagnétiques à partir de métamatériaux, les métamatériaux à faible indice de réfraction, l'optique 
                non-linéaire, la plasmonique, et la physique des matériaux 2D. En parallèle, je dispense des cours de physique 
                mathématique (bac 2 physique), de complément de physique classique et quantique (bac 2 chimie) et de Mécaniques 
                et ondes (bac 1 biologie, vétérinaires, géographie et géologie) à l'Université de Namur.`,
        isActive : false,
        img : "MichaelLobet.png"
    },
    {
        id : "PierreXavierMarique",
        firstName : "Pierre-Xavier",
        lastName : "Marique",
        title : "Ancien membre",
        domain : "Didactique de la physique",
        textTitle : `Mise en adéquation des conseils méthodologiques fournis à l'étudiant en fonction de son profil d'apprentissage et, en particulier, de ses compétences de résolution de questions de physique en première année universitaire`,
        text : `Mes travaux de recherche visent à fournir les conseils méthodologiques et pédagogiques les plus adéquats 
                possibles aux étudiants en fonction de son profil d'apprentissage et ce, dans le cadre d'un cours de physique 
                dispensé à une grande population d'étudiants de première année à l'université. Le profilage des étudiants se 
                base sur deux grands types de données : des données dites d'entrée, c'est-à-dire des paramètres sur lesquels 
                l'étudiant n'a plus/n'a jamais eu de moyen d'action (socio-économiques, de formation, de préparation spécifique) 
                et des données de travail durant le quadrimestre (traces de travail en ligne, résultats aux tests formatifs, 
                participation aux remédiations).`,
        isActive : false,
        img : "PierreXavierMarique.jpg"
    },
    {
        id : "AdrienPetrillo",
        firstName : "Adrien",
        lastName : "Petrillo",
        title : "Ancien membre",
        domain : "Physique des matériaux",
        textTitle : `Contrôle de l'interaction RKKY par un champ électrique`,
        text : `De l'outil que l'on utilise au travail, à nos smartphone en passant par nos consoles de jeux, l'ordinateur fait 
                partie de notre vie. De ce fait, les quantités d'informations qu'il est nécessaire de devoir emmagasiner et la 
                rapidité avec laquelle nous devons y accéder ne cesse de croire. C'est pourquoi il est important de développer 
                de nouvelle mémoire et systèmes de stockage de données toujours plus performants. Les systèmes de stockage 
                actuellement utilisé repose sur l'utilisation du magnétisme et plus particulièrement des domaines magnétique 
                au sein d'un matériau. Il est possible au travers des deux états de polarisation de ceux-ci (ferromagnétique 
                ou antiferromagnétique) de stocker les deux Bits fondamentaux de l'informatique qui sont le 0 et le 1. 
                Le but de la thèse de Doctorat que j'effectue à l'Université Technique de Eindhoven est d'étudier la possibilité 
                de modifier ces états de polarisation non pas à l'aide d'un champ magnétique, comme fait généralement, mais grâce 
                à un champ électrique. Puisque le champ électrique demande moins d'énergie que le magnétique pour basculer ces états, 
                il est aisé de comprendre que cet avantage est intéressant.`,
        isActive : false,
        img : "AdrienPetrillo.png"
    },
    {
        id : "LionelPodlecki",
        firstName : "Lionel",
        lastName : "Podlecki",
        title : "Ancien membre",
        domain : "Physique quantique",
        textTitle : `Approche analytique de la force de pression de radiation ressentie par un atome piégé magnéto-optiquement`,
        text : `L'utilisation judicieuse de champ magnétique et de faisceaux lasers permet de piéger dans une région confinée 
        de l'espace des atomes à des températures de l'ordre de quelques millionièmes de degrés seulement au-dessus du zéro absolu. 
        A de telles températures, les atomes, dits froids et piégés magnéto-optiquement, se déplacent très lentement et il devient 
        possible de les sonder et de les manipuler (même individuellement) avec une extrême précision. Ces possibilités ont 
        révolutionné le monde de la physique atomique, permettant l'accomplissement d'expériences auparavant inimaginables en 
        laboratoire, telles que la condensation de Bose-Einstein, la définition de bits quantiques par des atomes, l'obtention 
        d'horloges atomiques aux précisions inégalées ou encore la réalisation de mesures spectroscopiques à ultra-haute résolution. 
        L'objectif de ma recherche est de contribuer à l'étude théorique du piégeage magnéto-optique d'atomes de fer, accompli 
        pour la toute première fois à travers le monde au sein du laboratoire de Physique Atomique de l'Université de Liège en 2015. 
        Dans ce but, je développe un modèle analytique et semi-classique de la force (dite de pression de radiation) ressentie 
        par un atome de structure interne quelconque éclairé par un ensemble arbitraire de faisceaux lasers dans un environnement 
        arbitraire de champ magnétique, ainsi que les codes numériques permettant de calculer cette force. Ce modèle est notamment 
        destiné à être appliqué au cas d'atomes froids de fer piégés magnéto-optiquement, en vue de prédire les grandeurs physiques 
        importantes pour le fonctionnement du piège et d'interpréter au mieux les résultats expérimentaux obtenus.`,
        isActive : false,
        img : "LionelPodlecki.png"
    },
    {
        id : "ValentinChristiaens",
        firstName : "Valentin",
        lastName : "Christiaens",
        inBureau : false,
        title : "Membre actif",
        domain : "Astrophysique",
        textTitle : ``,
        text : `Parmi les milliers d'exoplanètes identifiées à ce jour, seules quelques dizaines ont pu être directement imagées 
                — il s'agit essentiellement de jeunes planètes géantes. La future génération d'imageurs à haut-contraste qui sera 
                installée sur des télescopes extrêmement grands (ELT) devrait considérablement augmenter cet échantillon, et 
                potentiellement permettre les premières images directes d'exoplanètes (super-)terrestres. Dans ce contexte, mes 
                recherches portent sur le développement de nouveaux algorithmes de traitement d'images afin de (i) mieux extraire les 
                faibles signaux des exoplanètes dissimulés dans le halo brillant de leur étoile hôte, et ainsi augmenter notre 
                sensibilité envers des planètes moins massives ; et (ii) reconstruire de manière plus fiable des images de disques
                    protoplanétaires (le berceau des planètes). Ces disques de gaz et de poussière de la taille du système solaire 
                    peuvent receler des structures suggérant l'interaction dynamique entre les planètes et le disque hôte (par ex. bras 
                spiraux, sillons annulaires, ou cavités). Les nouvelles méthodes que je développe visent donc à mieux comprendre 
                les processus impliqués lors de la formation des planètes, et d'apporter des preuves observationnelles aux modèles 
                de formation théoriques. En plus d'appliquer ces méthodes sur des instruments du Very Large Telescope, je m'attèle au 
                traitement de données obtenues sur ces objets avec le télescope spatial James Webb.`,
        isActive : false,
        img : "ValentinChristiaens.jpg" 
    },
]