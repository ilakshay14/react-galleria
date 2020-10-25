import { keyframes } from 'styled-components';

export const FadeIn = keyframes`
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
`;

export const SlideUp = keyframes`
    0%{
        opacity: 0;
        transform: translate(0, 10px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;

export const Bounce = keyframes`
    0% {
        -webkit-transform: translateY(-45px);
                transform: translateY(-45px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
        opacity: 1;
    }
    24% {
        opacity: 1;
    }
    40% {
        -webkit-transform: translateY(-24px);
                transform: translateY(-24px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
    }
    65% {
        -webkit-transform: translateY(-12px);
                transform: translateY(-12px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
    }
    82% {
        -webkit-transform: translateY(-6px);
                transform: translateY(-6px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
    }
    93% {
        -webkit-transform: translateY(-4px);
                transform: translateY(-4px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
        opacity: 1;
    }

`;
