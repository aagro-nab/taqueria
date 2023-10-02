async function requestfetch(url,data='') {
    let response = await fetch(url, {method: 'POST', body: data});
    return await response.text();
}