export const getAll = () => {
    return fetch('http://localhost:1337/starships').then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const get = (id) => {
    return fetch(`http://localhost:1337/starships/${id}`).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const update = (id, starship) => {
    return fetch(`http://localhost:1337/starships/${id}`, { 
        method: 'PUT', 
        body: JSON.stringify(starship),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const del = (id) => {
    return fetch(`http://localhost:1337/starships/${id}`, { 
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const add = (starship) => {
    return fetch('http://localhost:1337/starships/add', { 
        method: 'POST',
        body: JSON.stringify(starship),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}