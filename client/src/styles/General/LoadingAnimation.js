// global imports
import { createGlobalStyle } from "styled-components";

// styled components
const anim_time = 3; // main pan/pancake animation (in seconds)
const flatten_deg = 85; // how round will the pancake be at the top/peak (in deg), affecting general animation though so not really adjustable
const angle = 35; // max pan's angle while flipping (in deg)
const peak = "40px"; // pancake's highest level, obviously ;)
const color = "#333";

export const LoadingAnimationStyle = createGlobalStyle`
    
    #cooking {
        
        position: relative;
        margin: 0 auto;
        top: 0;
        width: 30vh;
        height: 30vh;
        overflow: hidden;
        overflow: visible;
        
        .bubble {
    
            position: absolute;
            border-radius: 100%;
            box-shadow: 0 0 .25vh lighten(${color}, 10%);
            opacity: 0;
            bottom: 0;

        }

        .bubble:nth-child(1) {

            left: 100px;
            width: 2.5vh;
            height: 2.5vh;
            animation: bubble 2s cubic-bezier(.53, .16, .39, .96) infinite;
        
        }
        
        .bubble:nth-child(2) {
            left: 110px;
            width: 2vh;
            height: 2vh;
            animation: bubble 2s ease-in-out .35s infinite;
        
        }
        
        .bubble:nth-child(3) {
        
            left: 115px;
            width: 1.5vh;
            height: 1.5vh;
            animation: bubble 1.5s cubic-bezier(.53, .16, .39, .96) .55s infinite;
        
        }
        
        .bubble:nth-child(4) {
        
            left: 120px;
            width: 1.2vh;
            height: 1.2vh;
            animation: bubble 1.8s cubic-bezier(.53, .16, .39, .96) .9s infinite;
        
        }
        
        .bubble:nth-child(5) {
        
            left: 150px;
            width: 1.1vh;
            height: 1.1vh;
            animation: bubble 1.6s ease-in-out 1s infinite;
        
        }
        
        #area {
        
            position: absolute;
            bottom: 0;
            right: 0;
            width: 120px;
            height: 120px;
            transform-origin: 15% 60%;
            animation: flip ${anim_time}s ease-in-out infinite;
        
            #sides {
            
                position: absolute;
                width: 100%;
                height: 100%;
                transform-origin: 15% 60%;
                animation: switchSide ${anim_time}s ease-in-out infinite;
            
                #handle {
            
                    position: absolute;
                    bottom: 45px;
                    right: 140px;
                    width: 80px;
                    height: 25px;
                    border-radius: 100%;
                    transform: rotate(20deg) rotateX(0deg) scale(1.3, .9);
                
                }
                
                #pan {
                
                    position: absolute;
                    bottom: 25px;
                    right: 33px;
                    width: 100px;
                    height: 20px;
                    border-radius: 0 0 1.4em 1.4em;
                    transform-origin: -15% 0;
                
                }
            
            }
            
            #pancake {
            
                position: absolute;
                top: 25px;
                width: 180px;
                height: 115px;
                transform: rotateX(85deg);
                animation: jump ${anim_time}s ease-in-out infinite;
            
                #pastry {
            
                    position: absolute;
                    bottom: 28px;
                    right: 55px;
                    width: 70px;
                    height: 50px;
                    border-radius: 100%;
                    transform-origin: -20% 0;
                    animation: fly ${anim_time}s ease-in-out infinite;
                
                }
            
            }
        
        }
    
    }
    
    @keyframes jump {
    
        0% {
    
            top: 30px;
            left: -60px;
            transform: rotateX(${flatten_deg}deg);
        
        }
        
        15% {
        
            top: -20px;
            transform: rotateX(-20deg);
        
        }
        
        50% {
        
            top: 30px;
            left: 15px;
            transform: rotateX(${flatten_deg}deg);
        
        }
        
        75% {
        
            transform: rotateX(0deg);
        
        }
        
        100% {
            
            left: -65px;
            transform: rotateX(${flatten_deg}deg);
        
        }
    
    }
    
    @keyframes flip {
        
        0% {
        
            transform: rotate(0deg);
        
        }
        

        5% {
        
            transform: rotate(-${angle}deg);
        
        }
        
        10%,
        50% {
        
            transform: rotate(0deg);
        
        }
        
        55% {
        
            transform: rotate(${angle}deg);
        
        }
        
        83.3% {
        
            transform: rotate(0deg);
        
        }
        
        100% {
        
            transform: rotate(0deg);
        
        }
    
    }
    
    @keyframes switchSide {
        
        0% {
        
            transform: rotateY(0deg);
        
        }
        
        50% {
        
            transform: rotateY(180deg);
        
        }
        
        100% {
        
            transform: rotateY(0deg);
        
        }
    
    }
    
    @keyframes fly {
        
        0% {
        
            bottom: 26px;
            transform: rotate(0deg);
        
        }
        
        10% {
        
            bottom: ${peak};
        
        }
        
        50% {
        
            bottom: 26px;
            transform: rotate(-190deg);
        
        }
        
        80% {
        
            bottom: ${peak};
        
        }
        
        100% {
        
            bottom: 26px;
            transform: rotate(0deg);
        
        }
    
    }
    
    @keyframes bubble {
        
        0% {
        
            transform: scale(.15, .15);
            top: 80%;
            opacity: 0;
        
        }
        
        50% {
        
            transform: scale(1.1, 1.1);
            opacity: .5;
        
        }
        
        100% {
        
            transform: scale(.33, .33);
            top: 60%;
            opacity: 0;
        
        }
    
    }
    
    @keyframes pulse {
        
        0% {
        
            transform: scale(1, 1);
            opacity: .25;
        
        }
        
        50% {
        
            transform: scale(1.2, 1);
            opacity: 1;
        
        }
        
        100% {
            transform: scale(1, 1);
            opacity: .25;
        
        }
  
    }
`;
