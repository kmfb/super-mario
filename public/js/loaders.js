export const loadImg = (url) => {
  return new Promise((res) => {
    const img = new Image();
    img.src = url;
    img.addEventListener("load", () => {
      res(img);
    });
  });
};

export const loadLevel = (name) => {
  return fetch(`/levels/${name}.json`).then((res) => res.json());
};
