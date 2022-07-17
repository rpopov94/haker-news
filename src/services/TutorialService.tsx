const getAll = async() => {
  const newsIds= await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then(response => response.json());
  const ids = await newsIds.slice(0, 100);
  // eslint-disable-next-line no-template-curly-in-string
  let requests = ids.map(id => fetch("https://hacker-news.firebaseio.com/v0/item/${id}.json"));
  const data = Promise.all(requests)
    .then(response => response)
  return data;
}
const get = async id => {
  // eslint-disable-next-line no-template-curly-in-string
  const data = await fetch("https://hacker-news.firebaseio.com/v0/item/${id}.json")
  .then()
  return data
}

const TutorialDataService = {
  getAll,
  get
};

export default TutorialDataService;