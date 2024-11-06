const BASE_URL = "https://sandbox.uberall.com/api";

const HEADERS = {
  "Content-Type": "application/json",
  publicKey:
    "7a9cccda8e21b961f9cdd7c822e12d27fd68bcac40eee033f2a2eb41c0985a35cd3a8c8aca9fd8a6a0fa7beca434a70775389af9375768ff54f7b46ed7a740e5",
};

const search = async (payload) =>
  fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload),
  });

const searchUsingIdAndToken = async (id,token,directory) =>
    fetch(`${BASE_URL}/search/${id}?token=${token}&directory=${directory}`, {
      method: "GET",
      headers: HEADERS,
    });
export { search,searchUsingIdAndToken };
