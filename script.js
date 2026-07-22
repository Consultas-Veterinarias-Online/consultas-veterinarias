document.getElementById('vetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Un veterinario se pondrá en contacto contigo a la brevedad.');
    this.reset();
});