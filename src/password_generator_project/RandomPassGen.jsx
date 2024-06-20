import { useEffect, useState } from "react"

const RandomPassGen = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [isNumberAllowed, setIsNumberAllowed] = useState(false);
    const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);

    const generateRandomPassword = () => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (isNumberAllowed) {
            str += '0123456789';
        }
        if (isSpecialCharAllowed) {
            str += "!#$%&')(*+,-./:;<=>?@[\]^_`{|}~";
        }
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.round(Math.random() * str.length);
            pass += str.charAt(randomIndex);
        }
        return pass;
    }

    useEffect(() => {
        setPassword(generateRandomPassword());
    }, [length, isNumberAllowed, isSpecialCharAllowed]);

    const handleCopyBtn = () => {
        navigator.clipboard.writeText(password);
        // window.navigator.clipboard.writeText(password); // for copy password purposes ...
    }
    const styles = {
        inputBox: {
            height: '38px',
            width: '420px',
            border: '1px solid black',
            borderRadius: '8px'
        },
        checkbox: {
            // Custom styles for checkbox
            transform: "scale(1.5)", // Adjust the scale to increase or decrease the checkbox size
            marginRight: "8px", // Optional: Add some space between checkbox and label
        }
    }
    return (
        <div className="w-full flex justify-center items-center h-screen flex-col">
            <h1 className="text-2xl mb-5">Random Password Generator</h1>
            <div className="flex flex-row">
                <input
                    type="text"
                    name="password"
                    value={password}
                    style={styles.inputBox}
                    readOnly
                />
                <button
                    onClick={handleCopyBtn}
                    className="ml-5 py-1 px-5 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
                    Copy
                </button>
            </div>
            <div className="my-7 flex text-2xl">
                ({length})
                <input
                    type="range"
                    name="length"
                    value={length}
                    min={8}
                    max={50}
                    onChange={(e) => setLength(e.target.value)}
                /> &nbsp; Length &nbsp; &nbsp; &nbsp;
                <input
                    style={styles.checkbox}
                    type="checkbox"
                    name="isNumberAllowed"
                    checked={isNumberAllowed}
                    // defaultValue={isNumberAllowed}
                    onChange={() => setIsNumberAllowed(!isNumberAllowed)}
                /> &nbsp; isNumber &nbsp; &nbsp; &nbsp;
                <input
                    style={styles.checkbox}
                    type="checkbox"
                    name="isSpecialCharAllowed"
                    checked={isSpecialCharAllowed}
                    // defaultValue={isSpecialCharAllowed}
                    onChange={() => setIsSpecialCharAllowed(!isSpecialCharAllowed)}
                /> &nbsp; isSpecialCharacter &nbsp; &nbsp; &nbsp;
            </div>
        </div>
    )
}

export default RandomPassGen