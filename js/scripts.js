var fieldCount = 2;
$(function() {
  $("#add-btn").click(function(){
    $(".form-fields").append("<div class='form-group'><label for='item" + fieldCount  + "'>Item " + fieldCount + "</label><input type='text' class='form-control' id='item" + fieldCount + "' placeholder='Name'></div>");
    fieldCount += 1;
  });
  $("#grocery-list-form form").submit(function (event) {
    event.preventDefault();
    debugger;
    var groceryList = [];
    for (i = 1; i < fieldCount; i++) {
      groceryList.push($("input#item" + i).val());
    }
    groceryList.forEach(function(item) {
      $("#grocery-list").append("<li>" + item + "</li>");
    });
  });
});
