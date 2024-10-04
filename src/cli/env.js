const parseEnv = () => {
  const env = process.env;
  const res = [];

  for (let key in env) {
    if (key.startsWith('RSS_')) {
      res.push(key + '=' + env[key])
      // console.log(`${key}=${env[key]};`);  // если нужен вывод с новой строки
    }
  } 
  console.log(res.join('; ')); // RSS_foo=bar; RSS_bar=baz
};

parseEnv();