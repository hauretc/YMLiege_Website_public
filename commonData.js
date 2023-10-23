
export const navBarHtml = `

    <!-- Actual navbar -->
    <div class="navbar" id="navbar">

        <div class="navbar-logoitems">

            <!-- Logo YM -->
            <div> 
                <a href="index.html">
                    <img class="navbar-logo" src="./Images/Logos/Logo-Web-Combo-Yellow-L.Grey.png" alt="Logo de Young Minds Liège"> 
                </a> 
            </div>
            
            <!-- Liens autres pages -->
            <div class="navbar-items">
                <div class="navbar-item" id="navbar-item-accueil">
                    <a href="index.html" class="navbar-item-text" id="navbar-item-accueil"> Accueil </a> 
                </div>
                <div class="navbar-item navbar-mainitem" id="navbar-item-project">
                    <a href="project.html" class="navbar-item-text" id="navbar-item-project"> Projet </a> 
                </div>
                <div class="navbar-item navbar-mainitem" id="navbar-item-members">
                    Membres
                    <i class="fa-solid fa-chevron-down fa-xs navbar-chevron" id="navbar-item-members-more"></i>
                </div>
                <div class="navbar-item navbar-mainitem" id="navbar-item-activities">
                    Activités
                    <i class="fa-solid fa-chevron-down fa-xs navbar-chevron" id="navbar-item-activities-more"></i>
                </div>
            </div>
        
        </div>
        
        <!-- Logo contacts + réseaux sociaux -->
        <div class="navbar-contact">
            <div class="navbar-contact-item"> 
                <i class="fa-regular fa-envelope contact-email" id="navbar-contact-email"></i> 
            </div>
            <div class="navbar-contact-item"> 
                <a href="https://www.facebook.com/YMLiege" target="_blank">
                    <i class="fa-brands fa-facebook-f fa-sm"></i> 
                </a>
            </div>
            <div class="navbar-contact-item"> 
                <a href="https://www.instagram.com/ymuliege/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    
    </div>

    <!-- Different modal windows -->
    <div class="modals">

        <!-- Modals of navigation bar -->
        <div class="navbar-modal" id="modal-members">
            <a href="members.html" class="navbar-item" id="navbar-item-members-members"> 
                Membres actuels
            </a>
            <a href="membersOld.html" class="navbar-item" id="navbar-item-members-old"> 
                Anciens membres
            </a>
        </div>

        <div class="navbar-modal" id="modal-activities">
            <a href="events.html" class="navbar-item" id="navbar-item-activities-events"> 
                Nos évènements 
            </a>
            <a href="workshops.html" class="navbar-item" id="navbar-item-activities-workshops"> 
                Nos ateliers
            </a>
            <a href="spacedebris/SpaceDebris.html" class="navbar-item" id="navbar-item-activities-spacedebris"> 
                Notre jeu Space Debris
            </a>
        </div>

        </-- Email modal -->
        <div class="modal-email" id="navbar-modal-email">
            <div class="modal-email-header" id="navbar-modal-email-header">
                <i class="fa-classic fa-solid fa-xmark modal-email-closebtn" id="navbar-modal-closebtn"></i>
            </div>
            <p class="modal-email-text" id = "navbar-modal-email-text"> 
                Vous voulez nous contacter? <br> 
                Envoyez-nous un email à l'adresse <br>
                <span class="modal-email-adress" id="modal-email-adress">  youngminds.liege@gmail.com </span> 
            </p>
        </div>

    </div>
`


export const footerHtml = `

    <!-- Actual footer -->
    <div class="footer" id="footer">

        <div class="footer-linkscopyright">

            <!-- Liens utiles -->
            <div class="footer-links">

                <div class="footer-links-text"> Liens utiles </div>

                <div class="footer-links-list">
                    <div class="footer-links-listitem"> 
                        <a href="https://www.epsyoungminds.org" target="_blank">
                            Projet Young Minds
                        </a> 
                    </div>
                    <div class="footer-links-listitem"> 
                        <a href="https://www.belgianphysicalsociety.be" target="_blank">
                            Société Belge de Physique (BPS)
                        </a> 
                    </div>
                    <div class="footer-links-listitem"> 
                        <a href="https://www.eps.org" target="_blank">
                            Société Européenne de Physique (EPS)
                        </a> 
                    </div>
                    <div class="footer-links-listitem-space"></div>
                    <div class="footer-links-listitem"> 
                        <a href="https://www.uliege.be" target="_blank">
                            Université de Liège
                        </a> 
                    </div>
                    <div class="footer-links-listitem"> 
                        <a href="https://www.physique.uliege.be" target="_blank">
                            Département de Physique (DEPHY)
                        </a> 
                    </div>
                    <div class="footer-links-listitem"> 
                        <a href="http://www.ago.ulg.ac.be" target="_blank">
                            Département Astrophysique, Géophysique et Océanographie (AGO)
                        </a> 
                    </div>
                    <div class="footer-links-listitem"> 
                        <a href="https://www.rejouisciences.uliege.be" target="_blank">
                            Réjouisciences (Cellule de diffusion des Sciences et Techniques de l'ULiège)
                        </a> 
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div class="footer-copyright">
                <i class="fa-regular fa-copyright"></i> Young Minds Liège - 2023
            </div>
        
        </div>

        <!-- Logo contacts + réseaux sociaux -->
        <div class="footer-contact">
            <p class="footer-contact-text">
                Pour nous contacter
            </p>
            <div class="footer-contact-items">
                <div class="footer-contact-item"> 
                    <i class="fa-regular fa-envelope contact-email" id="footer-contact-email"></i> 
                </div>
                <div class="footer-contact-item"> 
                    <a href="https://www.facebook.com/YMLiege" target="_blank">
                        <i class="fa-brands fa-facebook-f fa-sm"></i> 
                    </a>
                </div>
                <div class="footer-contact-item"> 
                    <a href="https://www.instagram.com/ymuliege/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Different modal windows -->
    <div class="modals">

        <!-- Email modal -->
        <div class="modal-email" id="footer-modal-email">
            <div class="modal-email-header" id="footer-modal-email-header">
                <i class="fa-classic fa-solid fa-xmark modal-email-closebtn" id="footer-modal-closebtn"></i>
            </div>
            <p class="modal-email-text" id="footer-modal-email-text"> 
                Vous voulez nous contacter? <br> 
                Envoyez-nous un email à l'adresse <br>
                <span class="modal-email-adress" id="modal-email-adress"> youngminds.liege@gmail.com </span> 
            </p>
        </div>
    </div>

`