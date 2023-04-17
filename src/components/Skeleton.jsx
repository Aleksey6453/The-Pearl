import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={330}
    height={500}
    viewBox="0 0 330 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#d8d8d8"
    {...props}
  >
    <circle cx="164" cy="94" r="17" /> 
    <rect x="115" y="143" rx="5" ry="5" width="100" height="31" /> 
    <rect x="174" y="111" rx="0" ry="0" width="4" height="0" /> 
    <rect x="142" y="193" rx="5" ry="5" width="50" height="20" /> 
    <rect x="116" y="267" rx="6" ry="6" width="101" height="20" /> 
    <rect x="293" y="210" rx="0" ry="0" width="2" height="0" /> 
    <rect x="103" y="328" rx="5" ry="5" width="134" height="22" /> 
    <rect x="72" y="387" rx="5" ry="5" width="203" height="40" />
  </ContentLoader>
)

export default Skeleton

