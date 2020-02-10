function handleOnLoad() {
    $("button.light-button")
        .css({
            'background': 'white',
            'outline': 'none',
            'font-size': '14px',
        })
	.text(' ');
	
    $("button.dark-button")
	.css({
            'background': '#4682B4',
            'outline': 'none',
            'font-size': '14px',
        })
	.text(' ');

    var ActiveTopicType = localStorage.getItem('ActiveTopicType') || 'dark';

    if (ActiveTopicType === 'dark') {
        darkClicked();
    } else {
        lightClicked();
    }
}


$(document).ready(handleOnLoad);
 
function lightClicked() {
    localStorage.setItem('ActiveTopicType', 'light');
     
    $(".Dark").hide();
    $(".Light").show();

    $("button.light-button").css('border-color', 'black');
    $("button.dark-button").css('border-color', 'black');
}

function darkClicked() {
    localStorage.setItem('ActiveTopicType', 'desktop');
    
    $(".Dark").show();
    $(".Light").hide();

    $("button.dark-button").css('border-color', 'black');
    $("button.light-button").css('border-color', 'black');
}