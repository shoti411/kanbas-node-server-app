import React, { useState } from "react";


function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <input
                className="form-control"
                placeholder="username"
                value={username}
                type="text"
                title="Input your Username Here!"
                onChange={(e) => setUsername({
                    id: e.target.value
                })} />
            <input
                className="form-control"
                placeholder="password"
                value={password}
                type="password"
                title="Input your Password Here!"
                onChange={(e) => setPassword({
                    id: e.target.value
                })} />
        </div>
    );
}

export default SignIn;