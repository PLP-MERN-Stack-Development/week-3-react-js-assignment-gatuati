import { useState, useEffect } from 'react';
import Button from './Buttton.jsx';  // Fixed import
import Card from './Card.jsx';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(prevPosts => page === 1 ? data : [...prevPosts, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      
      {loading && page === 1 ? (
        <div className="text-center py-8">Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <>
          <div className="space-y-4">
            {posts.map(post => (
              <Card key={post.id} title={post.title}>
                <p className="text-gray-700">{post.body}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              onClick={() => setPage(p => p + 1)} 
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostList;