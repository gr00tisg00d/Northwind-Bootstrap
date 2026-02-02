document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();

            const toastEl = document.getElementById('liveToast');
            const productEl = document.getElementById('product');
            const titleEl = document.getElementById('dTitle');
            const codeEl = document.getElementById('dCode');

            document.getElementById('product').innerHTML = e.target.dataset['product'];
            document.getElementById('dTitle').innerHTML = e.target.dataset['title']
            document.getElementById('dCode').innerHTML = e.target.dataset['code']

            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });
    // Hide the toast
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    })
});