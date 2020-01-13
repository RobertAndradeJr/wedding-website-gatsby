import { useState, useEffect } from 'react';

interface InstagramResponse {
  data: Array<{}>;
  error: {};
}

const UseFetch = (url: string): InstagramResponse => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const opts = { signal };
    fetch(url, opts)
      .then(res => res.json())
      .then(json => setData(json.graphql.hashtag.edge_hashtag_to_media.edges))
      .catch(error => setError(error));
    return (): void => {
      abortController.abort();
    };
  }, [url]);

  return { data, error };
};

export default UseFetch;
