import * as React from "react";
import Marquee from "react-fast-marquee";

/*
    #marquee1 {
        position: absolute;
        color: #DDDDDD;
        left: 32%;
        top: 900px;
        width: 68.507%;
        height: 43px;
        font-size: 33px;
        letter-spacing: .5px;
        text-shadow: 2px 2px 2px #000;
        transform: scale(112%, 100%);
        transform-origin: left;
    }
    #marquee2 {
        color: #171717;
        position: absolute;
        left: 31.35%;
        top: 87.2%;
        width: 68.507%;
        height: 5%;
        font-size: 41.5px;
        font-weight: 400;
        padding-top: .52%;
        font-stretch: expanded;
        transform: scale(110%, 100%);
        transform-origin: left;
        filter: drop-shadow(.5px 0 0 #171717);
    }
*/

interface InfoMarqueeProps {
    top: string
    bottom: string
}

const InfoMarquee = ({ top, bottom }: InfoMarqueeProps) => (
    <div className="absolute left-[31.35%] top-[82.5%] w-full flex flex-col">
        <Marquee className="text-shadow-sm text-[#DDDDDD] text-[33px]" play={true} gradient={false} speed={400} pauseOnHover={true}>
            {top}
        </Marquee>
        <Marquee className="text-[41.5px] font-normal" play={true} gradient={false} speed={325} pauseOnHover={true}>
            {bottom}
        </Marquee>
    </div>
);

export default InfoMarquee;