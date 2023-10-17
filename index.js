const zodiac = document.getElementById("zodiac");
const body = document.body;




const changeBackground = () =>{
    switch (zodiac.value){
        case "aries":
            body.style.backgroundColor = "#EEA47F";

        break;

        case "gemini":
            body.style.backgroundColor = "#FBEAEB";

        break;

        case "cancer":
            body.style.backgroundColor = "#FEE715";

        break;

        case "leo":
            body.style.backgroundColor = "#F9E795";

        break;

        case "virgo":
            body.style.backgroundColor = "#4831D4";

        break;

        case "libra":
            body.style.backgroundColor = "#317773";

        break;

        case "scorpio":
            body.style.backgroundColor = "#FCF6F5";

        break;

        case "sagittarius":
            body.style.backgroundColor = " #FFFFFF";

        break;


        case "capricorn":
            body.style.backgroundColor = "#00FFFF";

        break;

        case "aquarius":
            body.style.backgroundColor = "#EE4E34";

        break;

        case "pisces":
            body.style.backgroundColor = "#EA738D";

        break;
        
        default:
            body.style.backgroundColor = "#000000";
            break;


    }
};