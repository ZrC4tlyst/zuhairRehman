$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(1000)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});

//Timezone data fetch request

$("#btnClick").on("click", function () {
  $.ajax({
    url: "/itcareerswitch/php/getTimezone.php",
    type: "POST",
    dataType: "json",
    data: {
      longitude: $("#longitude").val(),
      latitude: $("#latitude").val(),
    },
    success: function (result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {
        $("#sunrise").html(result.data.sunrise);
        $("#sunset").html(result.data.sunset);
        $("#country").html(result.data.countryName);
        $("#timeZone").html(result.data.timezoneId);
        $("#timeNow").html(result.data.time);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    },
  });
});

// Ocean Data fetch request

$("#btnClick2").on("click", function () {
  $.ajax({
    url: "/itcareerswitch/php/getOceandata.php",
    type: "POST",
    dataType: "json",
    data: {
      longitude1: $("#longitude1").val(),
      latitude1: $("#latitude1").val(),
    },
    success: function (result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {
        $("#distance").html(result.data.ocean.distance);
        $("#ocean").html(result.data.ocean.name);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    },
  });
});

// Earthquake Data fetch request

$("#btnClick3").on("click", function () {
  $.ajax({
    url: "/itcareerswitch/php/getEarthquakedata.php",
    type: "POST",
    dataType: "json",
    data: {
      North: $("#north").val(),
      South: $("#south").val(),
      East: $("#east").val(),
      West: $("#west").val(),
    },
    success: function (result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {
        $("#datetime").html(result["data"][0]["datetime"]);
        $("#depth").html(result["data"][0]["depth"]);
        $("#magnitude").html(result["data"][0]["magnitude"]);
        $("#src").html(result["data"][0]["src"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    },
  });
});
