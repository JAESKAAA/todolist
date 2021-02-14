const clockContainet = document.querySelector(".js-clock"),
    clocktitle = document.querySelector("h1");

    function getTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        clocktitle.innerText =  `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`:seconds
        }`;
    };

    const clockStyle = document.querySelector("h1");

    const magicHand = {
        handleMouseOver: function(){
            clocktitle.style.color = "#34495e";
        },
        handleMouseLeave: function(){
            clocktitle.style.color = "white";
        }
    }

    clocktitle.addEventListener("mouseover", magicHand.handleMouseOver);
    clocktitle.addEventListener("mouseleave", magicHand.handleMouseLeave);

    
    function init(){
        getTime();
        setInterval(getTime,1000);
    }
    init();