import TitleCounter from "./components/TitleCounter";
import WindowSize from "./components/WindowSize";
import PostViewer from "./components/PostViewer";
import BrokenEffect from "./exercises/BrokenEffect";

function App() {
  return (
    <div>
      <h1>Lab 3: Hooks, Context & Routing</h1>
      <TitleCounter />
      <WindowSize />
      <PostViewer />
      <BrokenEffect />
    </div>
  );
}

export default App;