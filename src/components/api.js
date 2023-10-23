const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-13',
    headers: {
        authorization: '8c0a8217-6e30-44c4-a550-73e8f9bcbe81',
        'Content-Type': 'application/json'
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => {
        err.status = res.status;
        Promise.reject(err);
    });
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
    }).then(checkResponse);
};

export const getAutorizationUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    }).then(checkResponse);
}

export const updateUserData = (body) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify(body)
    }).then(checkResponse);
}

export const createCard = ({name, link}) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({name, link})
    }).then(checkResponse);
}

export const deleteCard = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: config.headers
    }).then(checkResponse);
}

export const updateAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({avatar})
    }).then(checkResponse);
}

export const addLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: "PUT",
        headers: config.headers,
    }).then(checkResponse);
}

export const deleteLike = (id) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: "DELETE",
        headers: config.headers,
    }).then(checkResponse);
}