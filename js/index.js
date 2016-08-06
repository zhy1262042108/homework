$(function () {
    $('.btn-next').on('click',function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    })
})