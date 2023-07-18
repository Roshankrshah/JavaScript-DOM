const toggle = document.querySelector('.toggle')
const articlesContainer = document.querySelector('.articles');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const articlesData = articles.map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

    return `
    <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
        </div>
        <p>
            ${snippet}
        </p>
    </article>`;
}).join("");

articlesContainer.innerHTML = articlesData;