import './style/App.css';
import PostForm from './components/PostForm'
import SortRow from './components/SortRow'
import CreateList from './components/CreateList'
function App() {
  return (
    <div className="App">
      <PostForm/>
      <SortRow/>
      <CreateList/>
    </div>
  );
}

export default App;
