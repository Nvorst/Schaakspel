$(document).ready({});

$("#btn_getPlayers").click(function getTables(){
    if($.fn.dataTable.isDataTable('#playerTable')){
        $("#playerTable").DataTable().destroy();
    }

    $.ajax({
        url: "/players",
        type: "GET",
        success: function(data){
            $('#playerTable').DataTable({
                data: data,
                columns:
                [
                    {data: 'firstName'},
                    {data: 'lastName'},
                    {data: 'namePreposition'},
                    {data: 'dateOfBirth'},
                    {data: 'matchesWon'},
                    {data: 'matchesLost'},
                    {data: 'matchesTied'}
                ]
            })
        }
    })
})

$("#btn_registerPlayer").click(function getTables(){
    var player = {
        firstName: 
    }

    $.ajax({
        url: "/register",
        type: "POST",
        data: json,
        contentType: "application/json",
        success: function(data){

        }
    })
})