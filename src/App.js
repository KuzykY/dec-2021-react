import React, {useReducer} from 'react';

const init = (initCounter) => {
    return {counter1: initCounter, counter2: initCounter, counter3: initCounter}
}
const reducer = (state, action) => {
    const {type} = action
    switch (type) {
        case 'inc1':
            return {...state, counter1: state.counter1 + 1}
        case 'inc2':
            return {...state, counter2: state.counter2 + 1}
        case 'inc3':
            return {...state, counter3: state.counter3 + 1}
        case 'dec1':
            return {...state, counter1: state.counter1 - 1}
        case 'dec2':
            return {...state, counter2: state.counter2 - 1}
        case 'dec3':
            return {...state, counter3: state.counter3 - 1}
        case 'reset1':
            return {...state,counter1:0}
        case 'reset2':
            return {...state,counter2:0}
        case 'reset3':
            return {...state,counter3:0}

    }
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);
    return (
        <div>
            <div>
                <div>{state.counter1}
                    <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
                    <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
                    <button onClick={()=>dispatch({type:'reset1'})}>RESET</button>
                </div>
                <hr/>
                <div>{state.counter2}
                    <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                    <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                    <button onClick={()=>dispatch({type:'reset2'})}>RESET</button>
                </div>
                <hr/>
                <div>{state.counter3}
                    <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                    <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                    <button onClick={()=>dispatch({type:'reset3'})}>RESET</button>
                </div>
            </div>
        </div>
    );
};

export default App;