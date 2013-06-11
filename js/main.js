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
	
    $.ajax({
       url:"data/json.js",
       type: "GET",
       dataType: "json",
       success: function(response){
           console.log(response);
       }
    });
    
    
    
});

$('#about').on('pageinit', function(){
	//code needed for page goes here
});	