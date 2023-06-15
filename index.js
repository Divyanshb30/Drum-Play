
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
    });

function makeSound(key)
{
    switch (key)
        {
            
            case "w":
                var s1 = new Audio("sounds/tom-1.mp3");
                s1.play();
                break;
            case "a":
                var s2 = new Audio("sounds/tom-2.mp3");
                s2.play();
                break;
            case "s":
                var s3 = new Audio("sounds/tom-3.mp3");
                s3.play();
                break;
            case "d":
                var s4 = new Audio("sounds/tom-4.mp3");
                s4.play();
                break;
            case "j":
                var s5 = new Audio("sounds/snare.mp3");
                s5.play();
                break;
            case "k":
                var s6 = new Audio("sounds/crash.mp3");
                s6.play();
                break;
            case "l":
                var s7 = new Audio("sounds/kick-bass.mp3");
                s7.play();
                break;
            
            
            default: console.log(innerHTML);

            
        }
}

function buttonAnimation(currentKey)
{
    var pressedKey = document.querySelector("." + currentKey);
    
    pressedKey.classList.add("pressed");

    setTimeout(function () {
        pressedKey.classList.remove("pressed");
    }, 100);


}


