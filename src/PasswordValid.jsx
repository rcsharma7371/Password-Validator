import { useState } from "react"

export default function PasswordValid(){
    let [password, setPassword] = useState("");
    let [isStrong, setIsStrong] = useState(null);

    let isStrongPassword = function (password) {
        let hasUpperCase = /[A-Z]/;
        let hasLowerCase = /[a-z]/;
        let hasNumric = /[0-9]/;
        let hasSymbol = /[!@#$%^&*(),.?"':{}|<>]/;
        let minLength = 8;

        let isLengthValid = password.length >= minLength;
        let isUpperCaseAvailable = hasUpperCase.test(password);
        let isLowerCaseAvailable = hasLowerCase.test(password);
        let isNumericAvailable = hasNumric.test(password);
        let isSymbolAvailable = hasSymbol.test(password);
        
        let passwordStrong = (isLengthValid && isUpperCaseAvailable && isLowerCaseAvailable && isNumericAvailable && isSymbolAvailable);
        console.log(passwordStrong);
        return passwordStrong;
    }

    let handlePassword = (event)=>{
        setPassword(event.target.value);
        setIsStrong(isStrongPassword(event.target.value));
        // console.log(isStrong);

    }


    


    return(
        <div>
            <h3>Check your password strength</h3>
            <label htmlFor="password">Enter password to check strength : </label>
            <input type="text" name="password" value={password} onChange={handlePassword}/>
            {/* <p>{isStrong}</p> */}
            <p>{password == "" ? null:isStrong ? "Password is strong":"password is weak"}</p>
        </div>
    )
}