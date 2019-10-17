function handleOnLoad() {
    $("button.browser-button")
        .css({
            'background': 'white',
            'outline': 'none',
            'font-size': '14px',
        })
	.text('Web');
	
    $("button.desktop-button")
	.css({
            'background': 'white',
            'outline': 'none',
            'font-size': '14px',
        })
	.text('Desktop');

    var wzActiveTopicType = localStorage.getItem('wzActiveTopicType') || 'desktop';

    if (wzActiveTopicType === 'desktop') {
        desktopClicked();
    } else {
        browserClicked();
    }
}

$(function() {
    $("iframe#topic").on('load', handleOnLoad);
});
 
function browserClicked() {
    localStorage.setItem('wzActiveTopicType', 'browser');
     
    $("iframe#topic").contents().find(".Desktop").hide();
    $("iframe#topic").contents().find(".Browser").show();

    $("button.browser-button").css('border-color', '#43b02a');
    $("button.desktop-button").css('border-color', '#e1e1e1');
}

function desktopClicked() {
    localStorage.setItem('wzActiveTopicType', 'desktop');
    
    $("iframe#topic").contents().find(".Desktop").show();
    $("iframe#topic").contents().find(".Browser").hide();

    $("button.desktop-button").css('border-color', '#43b02a');
    $("button.browser-button").css('border-color', '#e1e1e1');
}