
var imgList =[
  "img/beagle.jpg",
  "img/bunny.jpg",
  "img/cat.jpg",
  "img/iguana.jpg",
  "img/pony.jpg"
];


$('#array-methods-form').on('submit', function(event) {

  // Capture value from select list on submission
  var arraySelectValue = $("#array-methods-select-list").val();

    var img1;



    switch (arraySelectValue) {


      case "Beagle":
      //  img1=imgList[0];
      $("#pics img").attr("src",imgList[0]);

      break;

      case "Bunny":
          $("#pics img").attr("src",imgList[1]);

        break;

        case "Cat":
            $("#pics img").attr("src",imgList[2]);
            break;

          case "Iguana":
              $("#pics img").attr("src",imgList[3]);
              break;

            case "Pony":
                $("#pics img").attr("src",imgList[4]);
                break;

    }
    event.preventDefault();

  }

  );



