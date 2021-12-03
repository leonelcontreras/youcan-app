import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const SecureAreaProvider = ({ children }) => (
  <SafeAreaProvider>
    {children}
  </SafeAreaProvider>
)

export default SecureAreaProvider
