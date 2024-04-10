export const sleep = (t: number) =>
  new Promise((res) => {
    const x = setTimeout(() => {
      clearTimeout(x);
      res(true);
    }, t);
  });
