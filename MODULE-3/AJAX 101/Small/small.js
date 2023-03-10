fetch('./sample.txt')
    .then(response => response.json())

    .then(data => { console.log(data) })