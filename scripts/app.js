var apiKey = "6744072037a643ffba6d962a501c6170";


$.ajax({
    url: "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/",
    headers: {
     "X-API-Key": apiKey
    }
   }).done(function(json){
    console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
   });