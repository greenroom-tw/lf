function handleOnLoad() {
    $("button.viewa-button")
        .css({
            'background': '#faea84',
            'outline': 'none',
            'font-size': '16px',
        })
	.text('View all');
	
    $("button.viewb-button")
	.css({
            'background': '#faea84',
            'outline': 'none',
            'font-size': '16px'
        })
	.text('View latest');

    var ActiveTopicType = localStorage.getItem('ActiveTopicType') || 'viewb';

    if (ActiveTopicType === 'viewb') {
        viewbClicked();
    } else {
        viewaClicked();
    }
}


$(document).ready(handleOnLoad);
 
function viewaClicked() {
    localStorage.setItem('ActiveTopicType', 'viewa');
     
    $(".ViewB").hide();
    $(".ViewA").show();

    $("button.viewa-button").css('border-color', 'black');
    $("button.viewb-button").css('border-color', '#e1e1e1');
}

function viewbClicked() {
    localStorage.setItem('ActiveTopicType', 'viewb');
    
    $(".ViewB").show();
    $(".ViewA").hide();

    $("button.viewb-button").css('border-color', 'black');
    $("button.viewa-button").css('border-color', '#e1e1e1');
}