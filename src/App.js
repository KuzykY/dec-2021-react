import React, {useReducer} from 'react';

const App = () => {
    const [state,dispatch] = useReducer(reducer,{cats:[],dogs:[]});
    return (
        <div>
          App
        </div>
    );
};

export default App;