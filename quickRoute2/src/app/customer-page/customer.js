////////strawberry quantity-price-add cart
var num = 1,
    price = 7;

$(".fa-plus").on("click",function(){
  
  var _num = parseInt($("span.number").text()) + 1;
  $("span.number").text(_num);
  updatePrice(_num,price);
});

$(".fa-minus").on("click",function(){
  
  var _num = parseInt($("span.number").text()) - 1;
  if(_num > -1)
    $("span.number").text(_num);
  updatePrice(_num,price);
});

function updatePrice(num,price){
  $(".amount").text(num*price);
}


////////add cart animation
document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {

        button.classList.add('loading');

        setTimeout(() => button.classList.remove('loading'), 3700);

    }
    e.preventDefault();
}));
