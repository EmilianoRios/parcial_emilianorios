const API_URL_MENU = "https://www.cultura.gob.ar/api/v2.0/?format=json"

export async function menu() {
    try {
        const response = await fetch(API_URL_MENU);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function organismos(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function programas(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function museos(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function institutos(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function tramites(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function convocatorias(url) {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}