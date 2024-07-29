
class Api {
  async get() {
    const resp = await fetch('./data.json')

    if (!resp.ok) {
      const message = `Api: An error has occured: ${resp.status}`;
      throw new Error(message);
    }

    const data = await resp.json()
    return data
  }
}

export const api = new Api()