import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer uS3xBY-B2swgzih_pZjjeuPLDpcPnOrDYiVJB234Lu4ZkFbJzRJ1O-aNb2D1FKHbEBHf43hqjAx2OwxA_GWl801cc-DcufP5Gtp-5iRIerRfvD-E9Z6T8bkiUIgRYXYx",
  },
});
