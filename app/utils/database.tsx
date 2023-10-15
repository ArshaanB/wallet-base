export function createAccount(address: string, nickname?: string) {
  return fetch("/api/database", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ address, nickname })
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

export function getAccounts() {
  return fetch("/api/database", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
