
/*Contact Me*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const serviceID = 'service_i6xlkud';
    const templateID = 'template_8arq9qi';
    
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        Subject: document.getElementById('Subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then((response) => {
            document.getElementById('contactForm').reset();
        }, (error) => {
            console.log('Failed to send email', error);
        });
});

/*side bar*/
document.getElementById('Close').addEventListener('click', function(){
    sidebar.style.transform = 'translateX(-100%)';
});

/*side bar*/
document.getElementById('sidebarToggle').addEventListener('click', function(){
    sidebar.style.transform = 'translateX(0%)';
});

/*side bar*/
['Home', 'Education', 'Experiences', 'contacts', 'skills'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function() {
            sidebar.style.transform = 'translateX(-100%)';
        });
    }
});


/*pop up*/
let Popup = document.getElementById("pop");
function openPopup(){
    Popup.classList.add("open-pop");

}
function closePopup(){
    Popup.classList.remove("open-pop");
    
}   