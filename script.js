const link = 'https://ipinfo.io/?token=32dd44973f7949';
const body = document.querySelector('body');

fetch(link)
    .then(data => data.json())
    .then(info => {
        body.insertAdjacentHTML('afterbegin', `
        <div>
        ${info.city}
        </div>`)
    })