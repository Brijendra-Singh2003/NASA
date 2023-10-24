const API_URL = "http://localhost:8000"

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  return await response.json();
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  return await fetch(`${API_URL}/launches`,{
    headers: {"Content-Type" : "application/json"},
    method: "POST",
    body: JSON.stringify(launch)
  });
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  return await fetch(`${API_URL}/launches?id=${id}`,{
    headers: {"Content-Type" : "application/json"},
    method: "DELETE",
  });
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};