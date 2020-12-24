import { useState } from "react";

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });

export function useApiHandler(apiCall) {
  const [reqtState, setRequestState] = useState({
    error: null,
    data: null,
    loading: false,
  });
  const handler = async (...data) => {
    setRequestState({ error: null, data: null, loading: true });
    try {
      const json = await apiCall(...data);
      setRequestState({ error: null, data: json.data, loading: false });
      //Simply return data
      return json.data;
    } catch (e) {
      console.log(e.response);
      const message =
        (e.response && e.response.data) || "Ooops, something went wrong...";
      setRequestState({ error: message, data: null, loading: false });
      //Reject MEssage
      return Promise.reject(message);
    }
  };
  return [handler, { ...reqtState }];
}
