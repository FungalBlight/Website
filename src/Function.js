function fadeBackground() {
    const background = document.querySelector('.background');
    background.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Light black with transparency
}
 
/**
 * Function to display a welcome message in the middle of the Bloxflip website.
 */
function displayWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '50%';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translate(-50%, -50%)';
    welcomeMessage.style.fontSize = '24px';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.textContent = 'Welcome to Sky 3.0';
 
    document.body.appendChild(welcomeMessage);
}
 
/**
 * Function to fade out the welcome message.
 */
function fadeOutWelcomeMessage() {
    const welcomeMessage = document.querySelector('.welcome-message');
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transition = 'opacity 1s';
 
    setTimeout(() => {
        welcomeMessage.remove();
    }, 1000); // Remove the welcome message after 1 second
}