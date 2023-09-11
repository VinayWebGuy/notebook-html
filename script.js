$('.notebook-textarea').on('change', function(){
    let val = $(this).val();;
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: 'POST',
        url: 'notebook',
        data: {val: val},
        success: function(response){
           
        },
        error: function(error) {
            console.log(error);
        }
    });
});

