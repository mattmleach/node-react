export const userService = {
    login,
    logout,
    register
};

function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    };

    return fetch("http://localhost:4000/api/users/login", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem("user");
}

function register(user) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    };

    return fetch("http://localhost:4000/api/users/register", requestOptions).then(handleResponse);
}

function handleResponse(res) {
    return res.text().then(text => {
        const data = text && JSON.parse(text);
        if (!res.ok) {
            if (res.status === 401) {
                logout();
            }

            const error = res.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
