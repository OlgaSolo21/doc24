class Api {
    constructor({url}) {
        this._url = url
    }
    _request(endpoint, options = {}) {
        const token = localStorage.getItem('jwt')

        return fetch(
            `${ this._url }/${endpoint}`,
            {headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }, ...options})
            .then(this._handleResponse)
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${ res.status }`);
        }
    }


    getInitialCards() { //запрос на сервер для получения карточек
        return this._request('character', {
                method: 'GET'
        })
    }

    getInitialCardID(id) { //запрос на сервер для получения карточек
        return this._request(`character/${id}`, {
            method: 'GET'
        })
    }

}

const api = new Api({
    url: 'https://rickandmortyapi.com/api',
})

export default api