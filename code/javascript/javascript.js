document.addEventListener('DOMContentLoaded', () => {
    const directoryPath = './data/media';
    const files = [];
    const xhr = new XMLHttpRequest();
    xhr.open('GET', directoryPath);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
            const links = htmlDoc.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                const link = links[i];
                if (link.getAttribute('href').match(/\.(jpg|jpeg|png|gif)$/)) {
                    files.push(link.getAttribute('href'));
                }
            }
            console.log(files);
        } else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
})