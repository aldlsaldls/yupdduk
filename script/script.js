//Main_membership :s4
function moveButton(spanElement, width, backgroundColor, borderRadius) {
    spanElement.style.width = width;
    spanElement.style.backgroundColor = backgroundColor;
    spanElement.style.borderRadius = borderRadius;
}

let firstspan = document.querySelector('.move_button span:first-of-type');
let secondspan = document.querySelector('.move_button span:nth-of-type(2)');
let thirdspan = document.querySelector('.move_button span:last-of-type');




document.querySelector('.right_sell').addEventListener('click', function () {
    document.querySelector('.store').style.display = 'none';
    document.querySelector('.store_img').style.display = 'none';

    document.querySelector('.info').style.display = 'none';
    document.querySelector('.info_img').style.display = 'none';

    document.querySelector('.sell').style.display = 'block';
    document.querySelector('.sell_img').style.display = 'block';

    document.querySelector('.move_button span:first-of-type').style.width = '30px';
    document.querySelector('.move_button span:first-of-type').style.backgroundColor = 'red';
    document.querySelector('.move_button span:first-of-type').borderRadius = '10px';


    moveButton(firstspan, '32px', 'red', '10px');
    moveButton(secondspan, '12px', 'white', '50%');
    moveButton(thirdspan, '12px', 'white', '50%');

})


document.querySelector('.right_store').addEventListener('click', function () {
    document.querySelector('.sell').style.display = 'none';
    document.querySelector('.sell_img').style.display = 'none';

    document.querySelector('.info').style.display = 'none';
    document.querySelector('.info_img').style.display = 'none';

    document.querySelector('.store').style.display = 'block';
    document.querySelector('.store_img').style.display = 'block';

    document.querySelector('.move_button span:nth-of-type(2)').style.width = '30px';
    document.querySelector('.move_button span:nth-of-type(2').style.backgroundColor = 'red';
    document.querySelector('.move_button span:nth-of-type(2').borderRadius = '10px';

    moveButton(firstspan, '12px', 'white', '50%');
    moveButton(secondspan, '32px', 'red', '10px');
    moveButton(thirdspan, '12px', 'white', '50%');

})

document.querySelector('.right_info').addEventListener('click', function () {
    document.querySelector('.sell').style.display = 'none';
    document.querySelector('.sell_img').style.display = 'none';

    document.querySelector('.store').style.display = 'none';
    document.querySelector('.store_img').style.display = 'none';


    document.querySelector('.info').style.display = 'block';
    document.querySelector('.info_img').style.display = 'block';

    document.querySelector('.move_button span:last-of-type').style.width = '30px';
    document.querySelector('.move_button span:last-of-type').style.backgroundColor = 'red';
    document.querySelector('.move_button span:last-of-type').borderRadius = '10px';

    moveButton(firstspan, '12px', 'white', '50%');
    moveButton(secondspan, '12px', 'white', '50%');
    moveButton(thirdspan, '32px', 'red', '10px');

})
//주메뉴
$(function () {

    $("nav>ul>li").mouseenter(function () {
        $(".sub,.menuBg").stop().slideDown();
    })

    $(".menuBg").mouseleave(function () {
        $(".sub,.menuBg").stop().slideUp();
    })

}) //ready