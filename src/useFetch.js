import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    // Use abortController to stop the fetch if it is aborted,
    // so that unmounted React component won't have its state changed
    const abortCont= new AbortController();

    fetch(url, {signal: abortCont.signal})
      .then(res => {
        if(!res.ok) {
          throw Error('Could not find the resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch(err => {
        //A crucial thing about calling the abortController.abort() is that it causes the fetch promise to be rejected.
        // So we catch the abort error
        if(err.name === 'AbortError') {
          console.log('fetch abortet with abort controler')
        } else {
          setError(err.message);
          setIsLoading(false);
          setData(null);
        }
      })

    return() => abortCont.abort();

  }, [url])

  return {data, isLoading, error};
}

export default useFetch;