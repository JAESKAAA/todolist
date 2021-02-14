const clockStyle = document.querySelector("h1");

const magicHand = {
    handleMouseOver: function(){
        clockStyle.innerText = "시간이댱";
    }
}

clockStyle.addEventListener("mouseover", magicHand.handleMouseOver);