import { useState, useEffect } from 'react';

export type TApiResponse = {
  status: number;
  statusText: string;
  data: any;
  error: any;
  loading: boolean;
};

export const useApiGet = (url: string, token?: string): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const headers = {'Authorization': `Bearer ${token}`}
      const apiResponse = await fetch(url, { headers });
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  // NIH DI SPREAD DATA NYA BIAR GA DATA.DATA.DATA
  return { status, statusText, ...data, error, loading };
};

export const useApiPost = (url: string, token?: string, payload?: any): TApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const postAPIData = async () => {
    setLoading(true);
    try {
      const headers = {'Authorization': `Bearer ${token}`}
      const apiResponse = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(payload)
      });
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    postAPIData();
  }, []);

  // NIH DI SPREAD DATA NYA BIAR GA DATA.DATA.DATA
  return { status, statusText, ...data, error, loading };
}