export const fetchPosts = async (page = 1, searchTerm = '') => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${searchTerm}`
    );
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchPostDetails = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error('Failed to fetch post details');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};