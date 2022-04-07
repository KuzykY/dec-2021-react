import Users from "./Components/Users";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments"

function App(){
  return(
      <div>
        <Users/>
        <hr/>
        <Posts/>
        <hr/>
        <Comments/>
      </div>
  );
}
export default App;