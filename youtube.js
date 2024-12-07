let videoo=document.querySelector("video");

videoo.addEventListener("mouseenter",function()  {
    videoo.play();
});

videoo.addEventListener("mouseleave",function()  {
    videoo.pause();
});