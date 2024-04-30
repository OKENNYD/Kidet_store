import './css/App.css';
import Layout from './Layout';

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 w-full h-full overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
      <Layout/>
    </div>
  );
}

export default App;
