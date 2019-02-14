
$(document).ready({
});


$("#btn_getPlayers").click(function getTables(){


    $.ajax({
        url: "/players",
        type: "GET",
        success: function (data){
                var html =
                    "<table id='playerTable' class= 'table table-striped'><thead><tr><th>ID</tH><th>First name</th><th>Last name</th><th>Name preposition</th><th>Date of birth</th><th>Wins</th><th>Losses</th><th>Ties</th><th>Delete</th></tr></thead>"
                $.each(data, function(index,value)
                {
                    html = html + "<tr><td>"+ value.id + "</td><td>" + value.firstName + "</td><td>" + value.lastName + "</td><td>" + value.namePreposition + "</td><td>" + value.dateOfBirth + "</td><td><button class='btn-primary'>-</button>" + value.matchesWon + "<button class='btn-primary'>+</button></td><td><button class='btn-primary'>-</button>" + value.matchesLost + "<button class='btn-primary'>+</button></td><td><button class='btn-primary'>-</button>" + value.matchesTied + "<button class='btn-primary'>+</button></td><td><button class='btn-danger' onclick ='deletePlayer(" + value.id +") '>Delete</button></td></tr>";
                })
                html = html + "</table>";
                $('#playerTable').html(html);
            }


    })
})

function deletePlayer(playerId){
    console.log(playerId);

    $.ajax({
            url: "/delete",
            type: "POST",
            data: playerId,
            success: function(data){

            }
    })
}

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