import React from "react";
import { Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <ListingDetails />;
  return <MessagesScreen />;
}
