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
        $("#fromLocalStorage").append("<h3>" + date + "</h3>" + "<a href='#AddNewRace' id='editbutton' data-key='" + key + "'>| Edit |</a>"
                                       + "<a href='#' class='deletebutton' data-key='" + key + "'> | Delete |</a>");
         
    };
    
    $("#fromLocalStorage").append('<p></p>');
    $("#fromLocalStorage").append('<a href="#" id="deletestorage" data-role="button">Delete Local Storage</a>');
    
    $("#deletestorage").on("click", function(){
        localStorage.clear();
        location.reload(true);
        return false;
    });
    
    $("#editbutton").on("click", function(key){
        var value = localStorage.getItem(key);
        var object = JSON.parse(value);
        var item = $(this).data(object);
        console.log(key);
        $("#date").val(value[0]);
        $("#teamname1").val(value[1]);
        $("#teamname2").val(value[2]);
        $("#teamname3").val(value[3]);
        $("#teamname4").val(value[4]);
        $("#teamname5").val(value[5]);
        $("#teamname6").val(value[6]);
    });
    
    
    
    $.ajax({
       url: 'xhr/json.php',
       type: 'GET',
       dataType: 'json',
       success: function(response){
           for (var i=0, j=response.races.length; i<j; i++){
                var races = response.races[i];
                var JSONraceDate = races.date;
                $("#fromJSON").append("<h3>" + JSONraceDate + "</h3>" + "<a href='#' class='editbutton' data-key='" + key + "'>| Edit |</a>"
                                       + "<a href='#' class='deletebutton' data-key='" + key + "'> | Delete |</a>");
           
           };
           
    
       }
    });
    
    
    $.ajax({
       url: 'xhr/other.xml',
       type: 'GET',
       dataType: 'xml',
       success: function(result){
            $(result).find('races').each(function() {
                $(this).find("race").each(function() {});
                $(this).find("date").text();
            });
       }
    });
    
    
   
    
    
});

$('#about').on('pageinit', function(){
	//code needed for page goes here
});	