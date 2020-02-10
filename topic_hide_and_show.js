function handleOnLoad() {
    $("button.hide-button")
        .css({
            'background': 'white',
            'outline': 'none',
            'font-size': '14px',
        })
	.text('Show all');
	
    $("button.show-button")
	.css({
            'background': 'white',
            'outline': 'none',
            'font-size': '14px',
        })
	.text('Hide text');

    var ActiveTopicType = localStorage.getItem('ActiveTopicType') || 'show';

    if (ActiveTopicType === 'show') {
        showClicked();
    } else {
        hideClicked();
    }
}


$(document).ready(handleOnLoad);
 
function hideClicked() {
    localStorage.setItem('ActiveTopicType', 'hide');
     
    $(".Show").hide();
    $(".Hide").show();

    $("button.hide-button").css('border-color', '#43b02a');
    $("button.show-button").css('border-color', '#e1e1e1');
}

function showClicked() {
    localStorage.setItem('ActiveTopicType', 'show');
    
    $(".Show").show();
    $(".Hide").hide();

    $("button.show-button").css('border-color', '#43b02a');
    $("button.hide-button").css('border-color', '#e1e1e1');
}