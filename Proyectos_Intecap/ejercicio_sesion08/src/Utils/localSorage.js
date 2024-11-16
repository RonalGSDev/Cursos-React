export const getPosts = () => {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
};

export const savePost = (post) => {
    const posts = getPosts();
    posts.push(post); 
    localStorage.setItem('posts', JSON.stringify(posts)); 
};
