import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-5iRZ0qT4sG29LXL7skb-6CWzdvD-u5mdw&s">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
