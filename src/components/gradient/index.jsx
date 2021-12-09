import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Gradient = (props) => {
  const { children } = props
  return (
    <LinearGradient {...props}>
      {children}
    </LinearGradient>
  )
}

export default Gradient
