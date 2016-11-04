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
                $('.panel-body').css('cssText', 'background-color: #fff !important');
                $('.panel-subtitle').html('Terima kasih, laporan pengembalian barang Sista sudah kami terima.<br><i>Cashback</i> akan Soraya berikan dalam bentuk <i>voucher</i> belanja ke email dan nomor HP Sista. :)');
                $('.panel-subtitle').css('cssText', 'text-align: center !important');
                $('.panel-heading').find('h3').text('Done!');
                $('.panel-heading').find('h3').css('cssText', 'text-align: center !important');
            }
            $target.find('input:eq(0)').focus();
            $dot = $('.bs-wizard-dot[href=\'' + $(this).attr('href') + '\']');
            $dot.css({"width": "35px", "height": "35px", "top":"40px"});
            if ($dot.hasClass('return')) {
                $dot.removeClass('return');
            }
            $dot.addClass('change');
            $curWizard.find('.bs-wizard-steptitle').css({"font-weight":"600"});

            $curWizard.find('.bs-wizard-steptitle').css({"font-weight":"600"});

            for(var i = 0; i < navListItems.length; i++) {                
                if ($(($(navListItems.eq(i))).parent()).hasClass('active') && !($(navListItems.eq(i)).is($item))) {
                    $(($(navListItems.eq(i))).parent()).addClass('complete');
                }
                if($(($(navListItems.eq(i))).parent()).hasClass('complete') && !($(navListItems.eq(i)).is($item))) {
                    $dot1 = $('.bs-wizard-dot[href=\'' + $(navListItems.eq(i)).attr('href') + '\']');
                    $dot1.css({"width": "21px", "height": "21px", "top":"45px"});
                    $dot1.addClass('return');
                    $(($(navListItems.eq(i))).parent()).find('.bs-wizard-steptitle').css({"font-weight":"400"});
                }
                if ($target.is($('#step-4'))) {
                    $(navListItems.eq(i)).css({"pointer-events":"none"});
                    $(navListItems.eq(i)).removeAttr('href');
                }
            }
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

    var allBtnFile = $('.btn-file'),
        allImgUp = $('.img-upload'),
        allImgInp = $('.img-input');

    /*

    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });
    */

    allBtnFile.change(function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

        function readURL(input, id) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#imgUp-' + id).attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }

        allImgInp.change(function(){
            var id = $(this).attr('id');
            readURL(this, id);
            $('#btnFile-' + id).text('Ganti Foto');
        });  

        var toValidate = $('.name-input');
        toValidate.keyup(function() {            
            if($(this).val().length > 0) {
                $('.step1-button').removeClass('disabled');
            }
            else {
                $('.step1-button').addClass('disabled');
            }
        });

        toValidate = $('.order-input');
        toValidate.keyup(function() {            
            if($(this).val().length > 0) {
                $('.order-button').removeClass('disabled');
            }
            else {
                $('.order-button').addClass('disabled');
            }
        });

        $('.goods').hide();

        $('.order-button').click(function() {
            $('.goods').show();
        });

        $('input[type="checkbox"]').change(function() {  
            console.log("1"); 
            if ($('#check1').is(':checked') || $('#check2').is(':checked')) {
                console.log("2"); 
                $('.step2-button').removeClass('disabled');
            }
            else {
                console.log("3"); 
                $('.step2-button').addClass('disabled');
            }
        });
});