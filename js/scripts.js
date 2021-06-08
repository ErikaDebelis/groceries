$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    
    const groceries = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val()];
    console.log(groceries);

    const items = [];
    items.push(groceries[0], groceries[1], groceries[2], groceries[3]);
    console.log(items);


    const newGroceries =  [];
    items.forEach(function(item) {
      newGroceries.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
  });
    console.log(newGroceries);
    newGroceries.sort();
});
    $("#click").show();
    $("#hidden").hide();
    $("#output1").text(newGroceries[0]);
    $("#output2").text(newGroceries[1]);
    $("#output3").text(newGroceries[2]);
    $("#output4").text(newGroceries[3]);
    $("#hidden").show();
    $("#click").hide();
});

    
    // function capitalize2(#item2) {
    //   return item2.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // }
    // function capitalize3(#item3) {
    //   return item3.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // }
    // function capitalize4(#item4) {
    //   return item4.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // }
    // console.log(capitalize1)
    // const newGroceries =  [];

      
    // newGroceries.push(capitalize[0], capitalize[1], capitalize[2], capitalize[3]); 
    // newGroceries.sort();
    // }
    // $("#hidden").show();
    // $("#click").hide();
//   });
// });

//const groceries = ["banana", "apple", "pasta", "milk"]

//const items = groceries.split(' ');
//doesnt work//


//const chars = groceries.split('');
//doesnt work//

//const modifiedArray = originalArray.concat(4);