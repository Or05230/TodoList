//Check Off specific todos by clicking
$("ul").on("click", "li", function(){ //when LI IS CLICKED inside a UL..run this code
   $(this).toggleClass("completed");
}); 

//click on X to delete Todo
$("ul").on("click", "span", function(event){ //run when span is clicked inside a ul
  $(this).parent().fadeOut(500,function(){ 
    $(this).remove();      //"Parent" will remove the entire li and not just the span
  }); 
 event.stopPropagation();  //clicking on the span will not affect the parent element.
});

  $("input[type='text'").keypress(function(event){
if(event.which === 13){
//grabbing new todo text from inpute
var todoText = $(this).val()
$(this).val(""); //will clear the inpute 'text' after i submit something to TODO
	//create a new li and add to ul
$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + " </li>")
}
});

$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle()

});