//--------------------------------------------------------------
// Navigation bar & footer
//--------------------------------------------------------------

// Add visual info in navbar about the current page
const navBarCurrentMenuElement = document.getElementById('navbar-item-members')
navBarCurrentMenuElement.classList.add('currentpage')
navBarCurrentMenuElement.children[0].classList.add('fa-sm')
const navBarCurrentPageElement = document.getElementById('navbar-item-members-old')
navBarCurrentPageElement.classList.add('currentpage')


//--------------------------------------------------------------
// Members cards creation
//--------------------------------------------------------------

function renderMemberCards(ncols, cardsElement, memberData, cardClass){

    let cardsHtml = ""
    let count = 0
    let addDivBefore = ""
    let addDivAfter = ""

    for (let member of memberData){

        // Increment counter
        count += 1

        // Creating line divs
        if (count%ncols === 1){
            addDivBefore = `\n <div class="cards-ligne">`
            addDivAfter = ``
        } else if (count%ncols === 0) {
            addDivBefore = ``
            addDivAfter = `</div>`
        } else {
            addDivBefore = ``
            addDivAfter = ``
        }

        // Building title string if necessary (bureau cards)
        let titleStr = ``
        if (cardClass == "card-bureau"){
            titleStr = `<div class="card-info-title"> ${member.title} </div>`
        }

        // Html code for all cards
        cardsHtml += addDivBefore  + `
                                        <div class="card ${cardClass}" id="${member.id}">
                                        
                                            <img 
                                                class = "card-img"
                                                src="./Images/Members/Individuals/${member.img}" 
                                                alt="Photo de ${member.firstName} ${member.lastName}">

                                            <div class="card-info">

                                                <div class="card-info-name"> ${member.firstName} ${member.lastName} </div>
                                                ${titleStr}
                                                <div class="card-info-domain"> <span class="bold">Domaine:</span> ${member.domain} </div>
                                                <div class="card-info-btncontainer"> 
                                                    <button class="card-info-btn"> Pour plus d'infos </button>
                                                </div>

                                            </div>

                                        </div>
                                    ` + addDivAfter
    }

    // Creating the cards sections
    cardsElement.innerHTML = cardsHtml

}

function renderModal(modalElement, member){

    // Check if textTitle exist for this member
    let textTitleStr = ``
    if (member.textTitle) {
        textTitleStr = `<div class="modal-addinfo-texttitle"> ${member.textTitle} </div>`
    }
 
    // Check if text exist for this member
    let textStr = ``
    if (member.text) {
        textStr = `<div class="modal-addinfo-text"> ${member.text} </div>`
    }

    // Check if website exist for this member
    let websiteStr = ``
    if (member.website) {
        websiteStr = `<div class="modal-addinfo-website"> 
                        <span class="bold">Site web:</span> 
                        <a href="${member.website}" target="_blank"> ${member.website} </a>
                        </div>
                    `
    }

    // Html code for modal
    let modalHtml = `   <div class="modal-header">
                            <button class="modal-closebtn" id="modal-closebtn">
                                <i class="fa-classic fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div class="modal-top">
                                    
                                <img 
                                    class = "modal-img"
                                    src="./Images/Members/Individuals/${member.img}" 
                                    alt="Photo de ${member.firstName} ${member.lastName}">

                                <div class="modal-info">

                                    <div class="modal-info-name"> ${member.firstName} ${member.lastName} </div>
                                    <div class="modal-info-title"> ${member.title} </div>
                                    <div class="modal-info-domain"> <span class="bold">Domaine:</span> ${member.domain} </div>

                                </div>
                                        
                            </div>

                            <div class="modal-addinfo">
                                ${textTitleStr}
                                ${textStr}
                                ${websiteStr}
                            </div>
                                                         
                        </div>
                        ` 

    // Creating the modal 
    modalElement.innerHTML = modalHtml

    // Sowing the modal 
    modalElement.style.display = 'block'

}

// All members data
import { membersData } from "./membersData.js"


// Old members cards
const cardsOldMembersElement = document.getElementById('oldmembers-cards')
let membersOldMembersData = membersData.filter(function(member){return !member.isActive && member.title!='Responsable académique'})
console.log(membersOldMembersData)
renderMemberCards(3, cardsOldMembersElement, membersOldMembersData, "card-activemember")



//--------------------------------------------------------------
// User interaction
//--------------------------------------------------------------

document.addEventListener('click', function(e){

    // Modal windows : appears when one of the buttons (class=card-info-btn) is clicked
    if (e.target.className === "card-info-btn"){

        // Selection of the clicked member
        let memberId = e.target.parentElement.parentElement.parentElement.id
        let memberData = membersData.filter(function(member){return member.id === memberId})

        // Rendering out the modal window
        const modalElement = document.getElementById('modal')
        renderModal(modalElement, memberData[0])
    } 

    // Close modal window when button (id=modal-closebtn) is clicked or when user click outside modal window
    else if (e.target.parentElement.id === "modal-closebtn" || !e.target.className.includes("modal")){
        document.getElementById('modal').style.display = "none"
    }

})