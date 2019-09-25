
export const fetchSearchGiphys = searchTerm => {
    return $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=RDEni3llhWP2kclUAJC9KmzRqZ8QYUYW&limit=2`
    });
}
