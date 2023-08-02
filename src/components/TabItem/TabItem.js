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
import { styled } from '@mui/material/styles';
import { TabItemProps } from 'src/types';
const StateActive = styled('div')(({ theme }) => ({
    backgroundColor: `rgba(251, 244, 235, 1)`,
    borderRadius: `20px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `10px 16px`,
    boxSizing: `border-box`,
    height: 'auto',
    width: 'fit-content',
}));
const Label = styled('div')(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(217, 140, 51, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    margin: `0px`,
}));
function TabItem(props) {
    return (React.createElement(StateActive, { className: props.className },
        React.createElement(Label, null, `Label`)));
}
export default TabItem;
//# sourceMappingURL=TabItem.js.map