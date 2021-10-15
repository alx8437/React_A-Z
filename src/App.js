import React, {useState} from "react";

function App() {

    const [like, setLike] = useState(7);

    function increment() {
        setLike(like + 1);
    }

    function decrement() {
        setLike(like - 1);
    }

    return (
        <div className="App">
            <h1>{like}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
