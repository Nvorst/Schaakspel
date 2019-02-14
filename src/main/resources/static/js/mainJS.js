var editor;
$(document).ready({
});


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
          //      columnDefs:
            //                    [
              //                      {
                //                    data: null,
                  //                  defaultContent: "<button>Delete</button>",
                    //                targets: -1
                      //              }
                        //        ],
                columns:
                [
                    {data: 'firstName'},
                    {data: 'lastName'},
                    {data: 'namePreposition'},
                    {data: 'dateOfBirth'},
                    {data: 'matchesWon'},
                    {data: 'matchesLost'},
                    {data: 'matchesTied'},
                    {defaultContent: "<button>Delete</button>"}
                ]

            })
        }
    })
})

$("#btn_registerPlayer").click(function getTables(){
    var player = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        namePreposition: $('#namePreposition').val(),
        dateOfBirth: $('#dateOfBirth').val()
    };

    var json = JSON.stringify(player);

    $.ajax({
        url: "/register",
        type: "POST",
        data: json,
        contentType: "application/json",
        success: function(data){

        }
    })
})