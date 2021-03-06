$(document).ready(function () {
    $('#btnAddTag').on('click', addTag);

    function addTag(e) {
        e.preventDefault();

        var errorCount = 0;
        $('#addTag input').each(function (index, val) {
            if ($(this).val() === '') { errorCount++; }
        });

        if (errorCount === 0) {
            var newTag = { 'nome_tag': $('#addTag fieldset input#inputNometag').val() };

            $.ajax({
                type: 'POST',
                data: newTag,
                datatype: 'JSON'
            });
            
            window.location.reload();
        }
        else {
            alert('Completa tutti i campi!');
        }
    };
});
