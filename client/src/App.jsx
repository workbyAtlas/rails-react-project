import "./App.css";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <div className="app">
        <h1>OP TCG</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <PostsList />
      </div>
    </>
  );
}

export default App;