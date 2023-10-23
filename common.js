
///--------------------------------------------------------------
// Navigation bar & footer
//--------------------------------------------------------------

// Create the navigation bar
import {navBarHtml} from "./commonData.js"
const navBarElement = document.getElementById('header-element')
navBarElement.innerHTML = navBarHtml

// Create the footer
import { footerHtml } from "./commonData.js"
const footerElement = document.getElementById('footer-element')
footerElement.innerHTML = footerHtml



///--------------------------------------------------------------
// User interaction 
//--------------------------------------------------------------

function getIdsFromClassName(className){
    let ids = []
    let elements = document.getElementsByClassName(className)
    for (let element of elements){
        ids.push(element.id)
    }
    return ids
}
     
function setChevronFromModal(chevronElement, modalClassList){
    // If modal displayed, chevron up. Else, chevron down.
    if (modalClassList.contains('modal-displayed')){
        chevronElement.classList.add('fa-chevron-up')
        chevronElement.classList.remove('fa-chevron-down')
    }
    else{
        chevronElement.classList.add('fa-chevron-down')
        chevronElement.classList.remove('fa-chevron-up')
    }
}

function closeNavbarModals(){
    let navbarModalIds = getIdsFromClassName('navbar-modal')
    for (let id of navbarModalIds){
        document.getElementById(id).classList.remove('modal-displayed')
    }
    // Effect on chevrons (all down)
    let navbarChevronIds = getIdsFromClassName('navbar-chevron')
    for (let id of navbarChevronIds){
        document.getElementById(id).classList.remove('fa-chevron-up')
        document.getElementById(id).classList.add('fa-chevron-down')
    }

}

function closeEmailModals(){
    let emailModalIds = getIdsFromClassName('modal-email')
    for (let id of emailModalIds){
        document.getElementById(id).classList.remove('modal-email-displayed')
    }
}


document.addEventListener('click', function(e){

    let navbarItemIds = getIdsFromClassName('navbar-mainitem')
    let navbarItemChevronIds = getIdsFromClassName('navbar-chevron')
    let emailItemIds = getIdsFromClassName('contact-email')

    // Click on navigation bar items and associated chevrons
    if (navbarItemIds.includes(e.target.id) || navbarItemChevronIds.includes(e.target.id)){

        // Navbar modal clicked : toggle display
        let assId = e.target.id.replace('navbar-item-', '').replace('-more', '')
        let assModalClassList = document.getElementById('modal-' + assId).classList
        assModalClassList.toggle('modal-displayed')
        setChevronFromModal(document.getElementById('navbar-item-'+ assId + '-more'), assModalClassList)

        // Other navbar modals : never displayed
        let otherNavbarItemIds
        if (navbarItemIds.includes(e.target.id)){
            otherNavbarItemIds = navbarItemIds.filter(function(id){return id != e.target.id})
        } 
        else {
            otherNavbarItemIds = navbarItemChevronIds.filter(function(id){return id != e.target.id})
        }
        for (let id of otherNavbarItemIds){
            let otherId = id.replace('navbar-item-', '').replace('-more', '')
            try{
                let otherModalClassList = document.getElementById('modal-' + otherId).classList
                otherModalClassList.remove('modal-displayed')
                setChevronFromModal(document.getElementById('navbar-item-' + otherId + '-more'), otherModalClassList)
            }
            catch{}
        }
    }

    // Click on the email buttons : toggle display
    else if (emailItemIds.includes(e.target.id)){
        let assId = e.target.id.replace('-contact-email', '')
        document.getElementById(assId+'-modal-email').classList.toggle('modal-email-displayed')
    }

    // Close the email modal via close button
    else if (e.target.classList.contains("modal-email-closebtn")){
        document.getElementById(e.target.parentElement.parentElement.id).classList.remove('modal-email-displayed')
    }

    // Close all modals if click outside any modal
    else if (!Boolean(e.target.id) || !Boolean(document.getElementById(e.target.id).closest('.modals'))) {
        closeNavbarModals()
        closeEmailModals()
    }
    
})