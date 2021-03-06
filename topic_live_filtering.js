function handleOnLoad() {
    $("button.web-button")
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

    var ActiveTopicType = localStorage.getItem('ActiveTopicType') || 'desktop';

    if (ActiveTopicType === 'desktop') {
        desktopClicked();
    } else {
        webClicked();
    }
}


$(document).ready(handleOnLoad);
 
function webClicked() {
    localStorage.setItem('ActiveTopicType', 'web');
     
    $(".Desktop").hide();
    $(".Web").show();

    $("button.web-button").css('border-color', '#43b02a');
    $("button.desktop-button").css('border-color', '#e1e1e1');
}

function desktopClicked() {
    localStorage.setItem('ActiveTopicType', 'desktop');
    
    $(".Desktop").show();
    $(".Web").hide();

    $("button.desktop-button").css('border-color', '#43b02a');
    $("button.web-button").css('border-color', '#e1e1e1');
}