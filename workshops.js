//--------------------------------------------------------------
// Navigation bar & footer
//--------------------------------------------------------------

// Add visual info in navbar about the current page
const navBarCurrentMenuElement = document.getElementById('navbar-item-activities')
navBarCurrentMenuElement.classList.add('currentpage')
navBarCurrentMenuElement.children[0].classList.add('fa-sm')
const navBarCurrentPageElement = document.getElementById('navbar-item-activities-workshops')
navBarCurrentPageElement.classList.add('currentpage')
