$(function() {

    //게시판 글자수 제한 및 카운팅

    $('#content').on('keyup', function(){
        if($(this).val().length > 40 ) {
            $(this).val($(this).val().substring(0, 40));
        }

        var content = $(this).val();
        $('#counter').html(content.length);
    
    })

    $('#content2').on('keyup', function(){
        if($(this).val().length > 1000 ) {
            $(this).val($(this).val().substring(0, 1000));
        }

        var content = $(this).val();
        $('#counter2').html(content.length);
    
    })



    // 파일선택 이름
   
    var fileTarget = $('.filebox .upload-hidden');
    
        fileTarget.on('change', function(){
            if(window.FileReader){
                var filename = $(this)[0].files[0].name;
            } else {
                var filename = $(this).val().split('/').pop().split('\\').pop();
            }
    
            $(this).siblings('.upload-name').val(filename);
        });


    // 이메일 셀렉트 박스 인풋에 입력

    
        $('#emailS').on('change', function(){
            var email_3 = $(this).val(); 
            
            if(email_3 == ""){
                $("#emailAdress").prop('readonly',false );
            } else{
                $("#emailAdress").prop('readonly', true);
            }
        
            // $('input:radio[name="sectionCk"]').click(function () {
            //     if (!$('#section9').is(':checked') === true) {
            //       $('#qSel').attr('disabled', true);
            //     } else {
            //       $('#qSel').attr('disabled', false);
            //     }
            //   });
    })
        
});