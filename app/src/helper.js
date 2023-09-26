
export const userStore = (data) => {
    localStorage.setItem("user", JSON.stringify({
        username: data.username,
        token: data.token,
        id: data.id
    }))
};

export const userData = () => {
    const userStringfied = localStorage.getItem("user") || '""';
    return JSON.parse(userStringfied || {});
};

