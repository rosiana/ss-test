$(document).ready(function () {

    var navListItems = $('.bs-wizard-dot'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn'),
            allPrevBtn = $('.prevBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this),
                $curWizard = $($(this).parent());

        if (!$curWizard.hasClass('disabled')) {
            /*if ($curWizard.hasClass('complete')) {
                $curWizard.removeClass('complete');
            }
            $curWizard.addClass('active');*/
            allWells.hide();
            $target.show();
            if ($target.is($('#step-1'))) {
                $('.panel-subtitle').text('Isi data Sista dulu ya');
            }
            else if ($target.is($('#step-2'))) {
                $('.panel-subtitle').text('Silakan masukkan nomor order dan pilih barang yang ingin Sista kembalikan');
            }
            else if ($target.is($('#step-3'))) {
                $('.panel-subtitle').text('Silakan lengkapi data pengembalian barang');
            }
            else if ($target.is($('#step-4'))) {
                $('.panel-subtitle').text('Done!');
                $('.panel-body').css('background-color','white');
            }
            $target.find('input:eq(0)').focus();
            $dot = $('.bs-wizard-dot[href=\'' + $(this).attr('href') + '\']');
            $dot.css({"width": "35px", "height": "35px", "top":"40px"});
            if ($dot.hasClass('return')) {
                $dot.removeClass('return');
            }
            $dot.addClass('change');

            $curWizard.find('.bs-wizard-steptitle').css({"font-weight":"700"});

            for(var i = 0; i < navListItems.length; i++) {                
                if ($(($(navListItems.eq(i))).parent()).hasClass('active') && !($(navListItems.eq(i)).is($item))) {
                    $(($(navListItems.eq(i))).parent()).addClass('complete');
                }
                if($(($(navListItems.eq(i))).parent()).hasClass('complete') && !($(navListItems.eq(i)).is($item))) {
                    $dot1 = $('.bs-wizard-dot[href=\'' + $(navListItems.eq(i)).attr('href') + '\']');
                    $dot1.css({"width": "21px", "height": "21px", "top":"45px"});
                    $dot1.addClass('return');
                    $curWizard.find('.bs-wizard-steptitle').css({"font-weight":"300"});
                }
            }

            console.log($(navListItems.parent()));
        };
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
            nextStepWizard.children('.bs-wizard-dot').trigger('mouseover');
        }
    });

    allPrevBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            curWizard = $('.bs-wizard-dot[href=\'#' + curStepBtn + '\']').parent(),
            prevStepWizard = $('.bs-wizard-dot[href=\'#' + curStepBtn + '\']').parent().prev(),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;


            prevStepWizard.children('.bs-wizard-dot').trigger('click');
            prevStepWizard.children('.bs-wizard-dot').trigger('mouseover');
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

        function checkCheck() {         

            if ($('#check1').prop("checked") == true || $('#check2').prop("checked") == true) {
                $('.nextBtn').removeClass('disabled');
            }
            else {
                $('.nextBtn').addClass('disabled');
            }
        };
        checkCheck();
});