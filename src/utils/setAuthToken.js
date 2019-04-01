import fetchDefaults from 'fetch-defaults';

const setAuthToken = token => {
  const headers = new Headers();
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
    // TODO не уверен, что для того чтобы задать какие-то стандартные параметры, стоит подключать доп библиотеку(у которой тоже есть свои зависимости)
    // но судя по докам, fetchDefaults возвращает новую ф-цию обёртку, а тут он ничего не возвращает
    fetchDefaults(fetch, {
      headers
    });
  } else {
    headers.delete('Authorization');
  }
};

export default setAuthToken;
