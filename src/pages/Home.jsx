import TaskManager from '../components/TaskManager.jsx';
import PostList from '../components/PostList.jsx';

const Home = () => {
  return (
    <div className="space-y-12">
        <h1 className="text-3xl font-bold text-center">Welcome to My App</h1>
      <TaskManager />
      <PostList />
    </div>
  );
};

export default Home;