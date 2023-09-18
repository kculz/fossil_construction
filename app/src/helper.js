
export const userStore = (data) => {
    localStorage.setItem("user", JSON.stringify({
        username: data.user.username,
        jwt: data.token
    }))
    console.log(data)
};

export const userData = () => {
    const userStringfied = localStorage.getItem("user") || '""';
    return JSON.parse(userStringfied || {});
};

