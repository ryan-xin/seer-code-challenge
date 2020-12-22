export const getAllPosts = (response) => {
  return response.data.data.content_type.contents;
};

export const getPageNumber = (posts) => {
  return Math.round(posts.length / 10);
};

export const getTenPosts = (posts, pageNum) => {
  return posts.slice((pageNum - 1) * 10, (pageNum * 10));
};

export const windowScrollPosition = (y) => {
  window.scrollTo({
    top: y,
    left: 0,
    behavior: 'smooth'
  });
};