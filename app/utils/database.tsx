export function createUser(name?: string) {
  return fetch("/api/database", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

export function getUsers() {
  return fetch("/api/database", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
