export class Api {

  // constructor( { baseUrl, headers: { authorization } } ) {
  //   this.baseUrl = baseUrl;
  //   this.auth = authorization;
  // }

  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._token = data.token;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  addCardLike(data) {
    return fetch(`${this._baseUrl}cards/${data}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkResponse(res));
  }

  deleteCardLike(data) {
    return fetch(`${this._baseUrl}cards/${data}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {
        authorization: this._token,
      },
    })

    .then((res) => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._token,
      },
    })
    
    .then((res) => this._checkResponse(res));
  }

  editProfile({name, job}) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    })
    .then((res) => this._checkResponse(res));
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.link,
      }),
    })
    .then((res) => this._checkResponse(res));
  }

  addNewCard({name, link}) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
    .then((res) => this._checkResponse(res));
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}cards/${data}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    })
    .then((res) => this._checkResponse(res));
  }


  // async getUserInfo() {
  //   try {
  //     return await fetch('${this.baseUrl}users/me', {
  //       headers: {
  //       authorization: this.auth,
  //       'Content-Type': 'application/json'
  //       }
  //     })

  //     .then(res => {
  //       return res.json();
  //     })

  //     .catch(error => {
  //       console.log(error);
  //     })
  //   } 
    
  //   catch(e) {
  //     console.log(e)
  //   };
  // }

}