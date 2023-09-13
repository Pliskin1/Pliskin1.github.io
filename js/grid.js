$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'borci.json',
        datasrc: 'borci',
        cache: false,
        // contentType: true,
        // processData: false,
        success: function (data) {

       
            let jsonArray = [];
            let resObj = data;

            console.log(data);
            for(let i in data){
                jsonArray.push([data [i]])
            }
            console.log(jsonArray);

        
         
            for(let key in jsonArray){

                // $("#toAppnedTo").append(`<div class='col-sm-3' style='text-align: center;'> <img src='images/${data[key][key].slika}' width='250px' height='200px'><p>${data[key][key].ime} ${data[key][key].prezime} </p></div>`);
                $("#text_container").append(jsonArray.forEach(function(borac){
                    console.log(borac[key]);
                    $("#toAppnedTo").append(`<div class='col-sm-3' style='text-align: center;'> <img src='images/${borac[key][key].slika}' width='250px' height='200px'><p>${borac[key][key].ime} ${borac[key][key].prezime} </p></div>`);
                }));
            }
            // jsonArray.forEach(function(borac){ 
            //     let x = borac.ime ;
            //    
            //      });

                 for (let [borac,b] of jsonArray) {
                    console.log(borac); // Will display contents of the object inside the array
                    $("#text_container").html(borac);
                }
                    // if(resObj.hasOwnProperty(key)){
                    // console.log(data[key]);
                    // alert(data[key][0].ime);
                    // $("#toAppnedTo").append(`<div class='col-sm-3' style='text-align: center;'> <img src='images/'${data[key][i].slika}' width='250px' height='200px'><p>${data[key][i].ime} ${data[key][i].prezime} </p></div>`);


                    // $("#text_container").append(data[key][0].ime);
                    // $("#ime").html(data[key][i].ime + " "+ data[key][i].prezime);
                    // $("#first_name").append(" ("+ data[key][i].imeOca+")")
                    // $("#last_name").text(data[key][i].prezime);
                    // $("#bio").text(data[key][i].bio);
                    // $("#modal-image").attr('src', 'images/'+data[key][i].slika);
                    // $("#life_time").text(data[key][i].datumRodjenja + "-" + data[key][i].datumSmrti)
                    // $("#life_places").text(data[key][i].mjestoRodjenja + "-" + data[key][i].mjestoSmrti)
                    // }

                    // counter++;



                    // for(let key in resObj){
                    //     //  if(resObj[key][i].id === 0){
                    //         jsonArray.push(resObj[key]);
                    //         console.log('i='+key); 
                    //         console.log('i='+data[key][0].id); 
                    //         $("#target").attr("src", 'images/'+resObj[key][0].slika);
                    //         $("#ime").html(resObj[key][0].ime + " "+ resObj[key][0].prezime);
                    // $("#first_name").append(" ("+ resObj[key][idGlobal].imeOca+")")
                    // $("#last_name").text(resObj[key][idGlobal].prezime);
                    // $("#bio").text(resObj[key][idGlobal].bio);
                    // $("#modal-image").attr('src', 'images/'+resObj[key][idGlobal].slika);
                    // $("#life_time").text(resObj[key][idGlobal].datumRodjenja + "-" + resObj[key][idGlobal].datumSmrti)
                    // $("#life_places").text(resObj[key][idGlobal].mjestoRodjenja + "-" + resObj[key][idGlobal].mjestoSmrti)
                    // console.log(resObj[key][idGlobal].ime);
                    // console.log(`${key}: ${resObj[key][0]}`);

                    //         //  }   
                    //     } 


                    //   jsonArray.forEach(function(element){
                    //     console.log("!"+jsonArray[element]);
                    //   });

            
          
        }
    })



});


$(document).on('click', '.biography', function showCombatant (){
    //  $("#target").text($(this).attr('id'));
     let idGlobal = $(this).attr('id')-1;
     $.ajax({
        type: "GET",
        url: 'borci.json',
        data: JSON.stringify({ 'id': idGlobal }),
        cache: false,
            // contentType: true,
            // processData: false,
        success: function (data) {
            let  = $(this).attr('id');
            // console.log('ID GLOBAL'+idGlobal);

            // console.log(idGlobal);
            let jsonArray = [];
            let resObj = data;
         
           
            for(let key in resObj){
                    jsonArray.push(resObj[key][idGlobal]);
                    $("#first_name").text(resObj[key][idGlobal].ime);
                    $("#fathers_name").text(" ("+ resObj[key][idGlobal].imeOca+") ");
                    $("#last_name").text(resObj[key][idGlobal].prezime);
                    $("#bio").html(resObj[key][idGlobal].bio);
                    $("#modal-image").attr('src', 'images/'+resObj[key][idGlobal].slika);
                    $("#life_time").text(resObj[key][idGlobal].datumRodjenja + "-" + resObj[key][idGlobal].datumSmrti);
                    $("#life_places").text(resObj[key][idGlobal].mjestoRodjenja + "-" + resObj[key][idGlobal].mjestoSmrti);
                    console.log(resObj[key][idGlobal].slika);
                    // image.src ='images/'+resObj[key][idGlobal].slika;
                    $("#pdf").attr('image','images/'+resObj[key][idGlobal].slika);

            }
           },error: function(data){
            console.log(data);
        }
        
    })});
        
    
    // On modal close event, scrolls the content back to top!
    $('#myModal').on('hide.bs.modal', function () {
        $('#bio').scrollTop(0);
    });


        
    
