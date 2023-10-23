//--------------------------------------------------------------
// Navigation bar & footer
//--------------------------------------------------------------

// Add visual info in navbar about the current page
const navBarCurrentMenuElement = document.getElementById('navbar-item-activities')
navBarCurrentMenuElement.classList.add('currentpage')
navBarCurrentMenuElement.children[0].classList.add('fa-sm')
const navBarCurrentPageElement = document.getElementById('navbar-item-activities-events')
navBarCurrentPageElement.classList.add('currentpage')


//--------------------------------------------------------------
// Events cards creation
//--------------------------------------------------------------

function renderEvents(eventsElement, eventsData){

    let eventsHtml = ""

    for (let event of eventsData) {

        // Collaborationset soutien financiers
        let collabFinStr = ""
        if (event.collab && event.financement){
            collabFinStr = `Organisé en collaboration avec ${event.collab}, avec le soutien financier ${event.financement}`
        } else if (event.collab){
            collabFinStr = `Organisé en collaboration avec ${event.collab}`
        } else if (event.financement){
            collabFinStr = `Organisé avec le soutien financier ${event.financement}`
        }
        
        // Liens extérieurs
        let extLinksStr = ""
        if (event.ext_links){
            for (const [explanation, link] of Object.entries(event.ext_links)){
                extLinksStr += ` <a href=${link} target='_blank'> ${explanation} </a> `
            }
        }

        // Liens intérieurs
        let intLinksStr = ""
        if (event.int_links){
            for (const [explanation, link] of Object.entries(event.int_links)){
                intLinksStr += ` <a href='Images/Activities/${event.directory}/${link}' target='_blank'> ${explanation} </a> `
            }
        }

        // Pictures
        let imgsStr = ""
        if (event.hasPictures){
            let nbrPictures = event.nbrPictures
            for (let i = 1 ; i <= nbrPictures; i++ ){
                let imgPath = 'Images/Activities/' + event.directory + '/Photos/' + i + '.' + event.fmtPictures
                imgsStr += `<img class="event-infos-img"
                            id = "${imgPath}"
                            src = "${imgPath}">`
            }
        }

        eventsHtml += `
                            <div class="event" id="${event.directory}">

                                <div class="event-container">

                                    <div class="event-date">${event.date} </div>

                                    <img 
                                        class="event-img"
                                        src="Images/Activities/${event.directory}/${event.mainImg}"
                                        alt=${event.altImg} > 

                                    <div class="event-infos">

                                        <div class="event-infos-title"> ${event.title} </div>

                                        <div class="event-infos-collab"> ${collabFinStr}</div>

                                        <div class="event-infos-desc"> ${event.desc}</div>

                                        ${extLinksStr}
                                        ${intLinksStr}

                                        <div class="event-infos-imgs">
                                            ${imgsStr}
                                        </div>

                                    </div>
                                
                                </div>
                            
                            </div>
        
        `
    }

    // Creating the events sections
    eventsElement.innerHTML = eventsHtml

}

// All events data
import { eventsData } from "./eventsData.js"


// Render old events (antichronological order)
const oldEventsElement = document.getElementById('past-events')
let oldEventsData = eventsData.filter(function(event){return event.status === "done"})
let oldEventsDataReversed = oldEventsData.reverse()
renderEvents(oldEventsElement, oldEventsDataReversed)

// Render future events (chronological order)
const futureEventsElement = document.getElementById('future-events')
let futureEventsData = eventsData.filter(function(event){return event.status === "planned"})
renderEvents(futureEventsElement, futureEventsData)
