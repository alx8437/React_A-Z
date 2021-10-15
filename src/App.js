import React, {useState} from "react";

function App() {

    const [like, setLike] = useState(7);
    const [value, setValue] = useState('Text in input');

    function increment() {
        setLike(like + 1);
    }

    function decrement() {
        setLike(like - 1);
    }

    return (
        <div className="App">
            <h1>{like}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.currentTarget.value)}
            />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
