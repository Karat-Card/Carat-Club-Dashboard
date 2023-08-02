﻿/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/
import React from 'react';
import Rectangle24Image from 'src/assets/images/WeekendSpecials_Rectangle_24.png';
import Rectangle4807Image from 'src/assets/images/WeekendSpecials_Rectangle_4807.png';
import { styled } from '@mui/material/styles';
import { WeekendSpecialsProps } from 'src/types';
const WeekendSpecials1 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '100%',
    height: `148px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
});
const Rectangle24 = styled('img')({
    height: `148px`,
    width: `352px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});
const Rectangle4807 = styled('img')({
    height: `148px`,
    width: `295.23px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
});
const MarriottFlorida = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 255, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `600`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `24px`,
    textTransform: `none`,
    width: `136.26px`,
    position: `absolute`,
    left: `23px`,
    top: `20px`,
}));
const HereSADescriptionFor = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(248, 249, 250, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `18px`,
    textTransform: `none`,
    width: `242.99px`,
    position: `absolute`,
    left: `23px`,
    top: `48px`,
}));
const Button1 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.4)`,
    borderRadius: `100px`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `8px 12px`,
    boxSizing: `border-box`,
    width: `107.87px`,
    left: `23px`,
    top: `96px`,
}));
const Q250150Span1 = styled('span')({
    whiteSpace: `pre-wrap`,
    color: `rgba(173, 181, 189, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `line-through`,
    lineHeight: `16px`,
    textTransform: `none`,
});
const Q250150Span2 = styled('span')({
    whiteSpace: `pre-wrap`,
    color: `rgba(33, 37, 41, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
});
const Q250150Span3 = styled('span')({
    whiteSpace: `pre-wrap`,
    color: `rgba(33, 37, 41, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `700`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
});
const Q250150 = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: 'unset',
    fontWeight: `400`,
    fontSize: `13px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
    margin: `0px`,
});
function WeekendSpecials(props) {
    return (React.createElement(WeekendSpecials1, { className: props.className },
        React.createElement(Rectangle24, { src: Rectangle24Image, loading: "lazy", alt: 'Rectangle 24' }),
        React.createElement(Rectangle4807, { src: Rectangle4807Image, loading: "lazy", alt: 'Rectangle 4807' }),
        React.createElement(MarriottFlorida, null, `Marriott Florida`),
        React.createElement(HereSADescriptionFor, null, `Here’s a description for the deal that can go up to two lines.`),
        React.createElement(Button1, null,
            React.createElement(Q250150, null,
                React.createElement(Q250150Span1, null, `$250`),
                React.createElement(Q250150Span2, null, `  `),
                React.createElement(Q250150Span3, null, `$150`)))));
}
export default WeekendSpecials;
//# sourceMappingURL=WeekendSpecials.js.map