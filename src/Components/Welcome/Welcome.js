import { useEffect, useState } from 'react';
import './Welcome.css';

const Welcome = (props)  => {
    const { name, age, country, profession } = props.userData;

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    
    return (
        <div className="welcome">
            <h1>Hello {name}! You are {age} years old. Welcome to Our Application!</h1>
            <p className='welcome-paragraph'>We are glad to have you here. Explore our features and enjoy your experience.</p>

            <button onClick={() => setCount(count + 1)}>
                Click Me! Count: {count}
            </button>

        </div>
    );
}

export default Welcome;
// This component can be used in your main App component or any other component to display a welcome message.