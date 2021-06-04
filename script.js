$(document).ready(function() {
    console.log($('#selections'));

    $(this).keyup(function(e){
    	if(e.keyCode==37 || e.keyCode==38)
    		previousFocus();
    	else if (e.keyCode==39 || e.keyCode==40)
    		nextFocus();
    	else if (e.keyCode==32 || e.keyCode==13)
    		select();
    	    		
    });
    
});

function select() {
   var all = $('a');
    for(i=0;i<all.length;i++){
    	if(all[i].className=='fcs') {
    	    window.location.href=(all[i]);
    	    return;
    	}
    }
}

function previousFocus() {
    var all = $('a');
    for(i=0;i<all.length;i++){
    	if(all[i].className=='fcs') {
    	    if(i==0){
    	    	all[0].className='0';
    	    	all[all.length-1].className='fcs';
    	    	return;
    	    }
    	    	
    	    all[i].className='';
    	    all[i-1].className='fcs';
    	    return;
    	}
    }
}

function nextFocus(){
    var all = $('a');
    for(i=0;i<all.length;i++){
    	if(all[i].className=='fcs') {
    	    if(i==all.length-1){
    	    	all[0].className='fcs';
    	    	all[all.length-1].className='';
    	    	return;
    	    }
    	    	
    	    all[i].className='';
    	    all[i+1].className='fcs';
    	    return;
    	}
    }
}
