document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const message = document.getElementById('message').value;
    const company = document.getElementById('company').value;
    const country = document.getElementById('country').value;
    const select = document.getElementById('select').value;
    const social1 = document.getElementById('social-1').value;
    const social2 = document.getElementById('social-2').value;
    const social3 = document.getElementById('social-3').value;
    const service1 = document.getElementById('option-1').value;
    const service2 = document.getElementById('option-2').value;
    const service3 = document.getElementById('option-3').value;

    fetch('http://localhost:5501/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            tel,
            message,
            company,
            country,
            select,
            social1,
            social2,
            social3,
            service1,
            service2,
            service3

        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar email: ' + error.message);
    });
});