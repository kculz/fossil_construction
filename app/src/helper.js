
export const userStore = (data) => {
    localStorage.setItem("user", JSON.stringify({
        username: data.username,
        token: data.token
    }))
    // console.log(data)
};

export const userData = () => {
    const userStringfied = localStorage.getItem("user") || '""';
    console.log(userStringfied);
    return JSON.parse(userStringfied || {});
};

