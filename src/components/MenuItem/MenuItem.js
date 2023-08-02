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
import HeroiconsOutlineHomeImage from 'src/assets/images/MenuItem_heroicons_outline_home.svg';
import HeroiconsOutlineHome1Image from 'src/assets/images/MenuItem_heroicons_outline_home_1.svg';
import HeroiconsOutlineHome2Image from 'src/assets/images/MenuItem_heroicons_outline_home_2.svg';
import HeroiconsOutlineHome3Image from 'src/assets/images/MenuItem_heroicons_outline_home_3.svg';
import { styled } from '@mui/material/styles';
import { MenuItemProps } from 'src/types';
const StateInactive = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    height: 'auto',
    width: 'fit-content',
});
const HeroiconsOutlineHome = styled('img')({
    height: `auto`,
    width: `24px`,
    margin: `0px`,
});
const Home = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(52, 58, 64, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px 0px 0px 12px`,
}));
const HeroiconsOutlineHome1 = styled('img')({
    height: `auto`,
    width: `24px`,
    margin: `0px 0px 0px 12px`,
});
const Home1 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(52, 58, 64, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px 0px 0px 12px`,
}));
const Group1 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `18px`,
    height: `18px`,
    margin: `0px 0px 0px 12px`,
});
const Rectangle1 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(250, 82, 82, 1)`,
    borderRadius: `100px`,
    width: `18px`,
    height: `18px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
}));
const Q3 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 245, 245, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `600`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    position: `absolute`,
    left: `5px`,
    top: `2px`,
}));
const HeroiconsOutlineHome2 = styled('img')({
    height: `auto`,
    width: `24px`,
    margin: `0px 0px 0px 12px`,
});
const Home2 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(217, 140, 51, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `600`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px 0px 0px 12px`,
}));
const Group11 = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `18px`,
    height: `18px`,
    margin: `0px 0px 0px 12px`,
});
const Rectangle11 = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(250, 82, 82, 1)`,
    borderRadius: `100px`,
    width: `18px`,
    height: `18px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
}));
const Q31 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(255, 245, 245, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `600`,
    fontSize: `11px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `14px`,
    textTransform: `none`,
    position: `absolute`,
    left: `5px`,
    top: `2px`,
}));
const HeroiconsOutlineHome3 = styled('img')({
    height: `auto`,
    width: `24px`,
    margin: `0px 0px 0px 12px`,
});
const Home3 = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(217, 140, 51, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `600`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px 0px 0px 12px`,
}));
function MenuItem(props) {
    return (React.createElement(StateInactive, { className: props.className },
        React.createElement(HeroiconsOutlineHome, { src: HeroiconsOutlineHomeImage, loading: "lazy", alt: 'heroicons-outline/home' }),
        React.createElement(Home, null, `Home`),
        false && (React.createElement(HeroiconsOutlineHome1, { src: HeroiconsOutlineHome1Image, loading: "lazy", alt: 'heroicons-outline/home' })),
        false && React.createElement(Home1, null, `Home`),
        false && (React.createElement(Group1, null,
            React.createElement(Rectangle1, null),
            React.createElement(Q3, null, `3`))),
        false && (React.createElement(HeroiconsOutlineHome2, { src: HeroiconsOutlineHome2Image, loading: "lazy", alt: 'heroicons-outline/home' })),
        false && React.createElement(Home2, null, `Home`),
        false && (React.createElement(Group11, null,
            React.createElement(Rectangle11, null),
            React.createElement(Q31, null, `3`))),
        false && (React.createElement(HeroiconsOutlineHome3, { src: HeroiconsOutlineHome3Image, loading: "lazy", alt: 'heroicons-outline/home' })),
        false && React.createElement(Home3, null, `Home`)));
}
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map