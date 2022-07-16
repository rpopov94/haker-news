import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/newstories.json?print=pretty");
  }
  get(id) {
    return http.get(`/item/${id}.json?print=pretty`);
  }
}
export default new TutorialDataService();