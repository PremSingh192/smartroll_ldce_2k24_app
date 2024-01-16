import React from 'react'
import Svg, {Path, SvgXml} from 'react-native-svg';


export default function SvgCall(props) {
    const svgCode = `${props.logo_code}`;
    return <SvgXml xml={svgCode} />;
}