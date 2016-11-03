$(document).ready(function () {

    var navListItems = $('.bs-wizard-dot'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            if ($item.hasClass('complete')) {
                navListItems.removeClass('complete');
                $item.removeClass('complete');
            }
            navListItems.addClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
            if ($target == $('#step-2')) {
                $('.panel-subtitle').text('Silakan lengkapi data order Sista');
            }
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            curWizard = $('.bs-wizard-dot[href=\'#' + curStepBtn + '\']').parent(),
            nextStepWizard = $('.bs-wizard-dot[href=\'#' + curStepBtn + '\']').parent().next(),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) {
            curWizard.removeClass('active').addClass('complete');
            nextStepWizard.removeClass('disabled').addClass('active');
            nextStepWizard.children('.bs-wizard-dot').trigger('click');
        }
    });

    $('.active .bs-wizard-dot').trigger('click');

    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            } else {
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img-upload').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        }); 

        var toValidate = $('.name-input');
        toValidate.keyup(function() {            
            if($(this).val().length > 0) {
                $('.nextBtn').removeClass('disabled');
            }
            else {
                $('.nextBtn').addClass('disabled');
            }
        });

        toValidate = $('.order-input');
        toValidate.keyup(function() {            
            if($(this).val().length > 0) {
                $('.order-button').removeClass('disabled');
                $('.nextBtn').removeClass('disabled');
            }
            else {
                $('.order-button').addClass('disabled');
                $('.nextBtn').addClass('disabled');
            }
        });

        $('.goods').hide();

        $('.order-button').click(function() {
            $('.goods').show();
        });
});