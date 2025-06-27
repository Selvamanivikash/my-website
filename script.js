document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e)
{
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth'});
})
});

document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate sending
    const name = document.getElementById('name').value;
    document.getElementById('formResponse').textContent = `Thanks ${name}, your message has been sent!`;

    // Reset the form
    document.getElementById('messageForm').reset();
});
