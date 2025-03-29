document.addEventListener("DOMContentLoaded", function() {
    fetch("blog-posts.json")  // Fetch JSON data
        .then(response => response.json())
        .then(posts => {
            let blogContainer = document.getElementById("blog-posts");
            posts.forEach(post => {
                let postElement = document.createElement("div");
                postElement.classList.add("blog-post");
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p><small>${post.date}</small></p>
                    <p>${post.summary}</p>
                    <button onclick="viewPost('${post.title}', '${post.date}', '${post.content}')">Read More</button>
                `;
                blogContainer.appendChild(postElement);
            });
        });
});

function viewPost(title, date, content) {
    let blogContainer = document.getElementById("blog-posts");
    blogContainer.innerHTML = `
        <h2>${title}</h2>
        <p><small>${date}</small></p>
        <p>${content}</p>
        <a href="blog.html">Back to Blog</a>
    `;
}
