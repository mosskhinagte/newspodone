export const authEndpoint = "http://accounts.spotify.com/authorize";
const redirectURLs = "http://localhost:3000/";
const clientId = "5778db38ba7c464b8b86e071e25d434b";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //#accessToken=mysuper
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURLs}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
