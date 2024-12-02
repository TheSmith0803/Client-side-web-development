// function to retrieve the users name
function thePrompt() {
    let name = prompt('Enter your name');
    return name;
}

// function to display the users entered name in an alert 
function anotherAlert() {
    let name = thePrompt(); 
    alert('Hi, ' + name + '!');
}