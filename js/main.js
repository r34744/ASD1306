// Gregory Koenig
// ASD 1306


$('#main').on('pageinit', function(){
	//code needed for page goes here
});

$('#AddNewRace').on('pageinit', function(){
	
    var teamNamesForm = $("#teamNamesForm");
    teamNamesForm.validate({
        submitHandler: function(key){
            var data= teamNamesForm.serializeArray();
            var html='';
            var id=Math.floor(Math.random()*100000000);
            localStorage.setItem(id, JSON.stringify(data));
            alert("Teams are saved");
            
        }
       
    });

});

$('#PastRaces').on('pageinit', function(){
	
    for (var i=0, j=localStorage.length; i<j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
        var date = object[0].value;
        $("#fromLocalStorage").append("<h3>" + date + "</h2>" + "<a href='#' class='editbutton' data-key='" + key + "'>Edit</a>");
    };
    
    $(".editbutton").on("click", function(){
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
        var item = $(this).data(object);
        $("#editbox").html('<p>' + item + '<p/>');
    })
    
    
    $.ajax({
       url: 'data/json.js',
       type: 'GET',
       dataType: 'json',
       success: function(response){
           console.log(response);
       }
    });
    
    
    
});

$('#about').on('pageinit', function(){
	//code needed for page goes here
});	