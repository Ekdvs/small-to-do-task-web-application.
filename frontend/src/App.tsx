import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl h-[90vh] flex bg-white shadow-xl rounded-lg overflow-hidden">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
