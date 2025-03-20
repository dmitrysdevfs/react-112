import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchArticles } from '../../articleService';

import css from './App.module.css';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ArticleList from '../ArticleList/ArticleList';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const hadnleSearch = (topic) => {
    setSearchTerm(topic);
    setPage(1);
    setArticles([]);
  };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchArticles(searchTerm, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch {
        setError(true);
        toast.error('Plz redoad there waw an error!!!');
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchTerm]);

  return (
    <div className={css.container}>
      <h1>HTTP requests in React</h1>
      <SearchForm onSearch={hadnleSearch} />

      {error && <b>Whoops there was an error plz reload...</b>}

      {articles.length > 0 && <ArticleList items={articles} />}

      {isLoading && <b>Loading data, please waite...</b>}

      {articles.length > 0 && !isLoading && (
        <button onClick={() => setPage(page + 1)}>
          Load more articles {page}
        </button>
      )}

      <Toaster position="top-right" />
    </div>
  );
}
