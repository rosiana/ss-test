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

    var btnCust = '<button type="button" class="btn btn-default" title="Add picture tags" ' + 
        'onclick="alert(\'Call your custom code here.\')">' +
        '<i class="glyphicon glyphicon-tag"></i>' +
        '</button>'; 
    $(".avatar-2").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: true,
        showCaption: false,
        showBrowse: false,
        browseOnZoneClick: true,
        removeLabel: '',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        elErrorContainer: '.kv-avatar-errors-2',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="assets/img/upload.png" alt="Your Avatar" style="width:140px">',
        layoutTemplates: {main2: '{preview}'},
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $(".avatar-3").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: true,
        showCaption: false,
        showBrowse: false,
        browseOnZoneClick: true,
        removeLabel: '',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        elErrorContainer: '.kv-avatar-errors-2',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="assets/img/upload2.png" alt="Your Avatar" style="width:140px">',
        layoutTemplates: {main2: '{preview}'},
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
});