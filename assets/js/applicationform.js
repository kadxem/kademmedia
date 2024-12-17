document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('applicationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('Form Data Submitted:', formObject);

        // You can add your form submission logic here, e.g., sending data to a server
        // fetch('/submit', {
        //     method: 'POST',
        //     body: JSON.stringify(formObject),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));
    });
});