const parseArgs = () => {
  const env = process.argv;

  const res = env
  .filter((el) => el.startsWith("--"))
  .map((el) => `${el.slice(2)} is ${env[env.indexOf(el) + 1]}`)
  .join(', ');

  console.log(res); // some-arg is value1, other is 1337, arg2 is 42
};

parseArgs();