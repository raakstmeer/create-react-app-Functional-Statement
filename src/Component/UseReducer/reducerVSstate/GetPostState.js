/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';

export default function GetPostState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setError('');
        setPost(data);
      })
      .catch(() => {
        setLoading(false);
        setError('There was a error');
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? 'Loading.....' : post.title}
      {error || null}
    </div>
  );
}
