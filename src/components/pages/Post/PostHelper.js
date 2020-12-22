export const getPost = (response) => {
  return response.data.data.content;
};

export const getAllPosts = (response) => {
  return response.data.data.content_type.contents;
};
  
export const getRelatedPosts = (posts, currentPost) => {
  // Remove current post from all posts
  posts = posts.filter(post => {
    return post.id !== currentPost.id;
  })
  
  let relatedPosts = [];
  relatedPosts = posts.filter(post => {
    // Make current post and each post title to sorted lowercase array
    const titleArray1 = currentPost.title.toLocaleLowerCase().split(' ').sort();
    const titleArray2 = post.title.toLocaleLowerCase().split(' ').sort();
    // Get same words array
    const sameWorldArray = titleArray1.filter(word => {
      return titleArray2.includes(word);
    });
    // Return if sameWorldArray has equal or more than 2 words
    return sameWorldArray.length >= 2;
  });
  
  // If relatedPosts is more than 3 just show first 3
  const length = relatedPosts.length;
  if(length >= 3) {
    return relatedPosts.slice(0, 3);
  // If relatedPosts is less than 3 push latest posts to relatedPosts to make it 3
  } else {
    for (let i = 0; i < (3 - length); i++) {
      relatedPosts.push(posts[i]);
    }
    return relatedPosts;
  }
};