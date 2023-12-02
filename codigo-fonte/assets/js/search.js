<script>
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('form');
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita a submissão padrão do formulário
            var searchTerm = form.querySelector('input[name="q"]').value;
            
            // Adicione lógica aqui para processar a pesquisa com base em 'searchTerm'
            // Por exemplo, você pode manipular a visibilidade de elementos na página.
            console.log('Termo de pesquisa:', searchTerm);
        });
    });
</script>