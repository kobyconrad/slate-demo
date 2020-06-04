import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React from "react";
import SlateApp from "../components/slateComponent";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
import RichTextExample from "../richTextExample";

const App = () => {
  return (
    <div className="appContainer">
      <h1>This is my Slate demo!</h1>
      <div className="slateContainer">
        <RichTextExample />
      </div>

      <style jsx>{`
        .slateContainer {
          width: 40%;
        }
        .appContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
