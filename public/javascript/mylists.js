async function movieFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#intputTitle-m').value.trim();
    const genre = document.querySelector('#inputGenre-m').value.trim();
    const studio = document.querySelector('#inputStudio').value.trim();
    const rating = document.querySelector('#inputRating-m').value.trim();

    if (title && genre && studio && rating) {
        const response = await fetch('/api/movies', {
            method: 'post',
            body: JSON.stringify({
                title,
                genre,
                studio,
                rating
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

async function showFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#inputTitle-s').value.trim();
    const genre = document.querySelector('#inputGenre-s').value.trim();
    const service = document.querySelector('#inputService').value.trim();
    const rating = document.querySelector('#inputRating-s').value.trim();

    if (title && genre && service && rating) {
        const response = await fetch('/api/shows', {
            method: 'post',
            body: JSON.stringify({
                title,
                genre,
                service,
                rating
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#add-movie').addEventListener('submit', movieFormHandler);
document.querySelector('#add-show').addEventListener('submit', showFormHandler);