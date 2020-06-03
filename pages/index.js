import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React from "react";
import SlateApp from "../slateComponent";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  return (
    <div>
      <h1>This is my Slate demo!</h1>
      <SlateApp />
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
