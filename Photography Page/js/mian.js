//Animate smooth scroll

$('#view-work').on('click',function() {
    const images = $('#images').position().top
    $('html,body').amimate(
        {
            scrollTop: images
        },
        900
    );
});