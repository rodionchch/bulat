const fetchMock = {
  get: <T>(url: string): Promise<{ data: T }> => {
    try {
      const json = require(`.${url}`);

      return new Promise((resolve) =>
        setTimeout(() => resolve({ data: json }), 1000)
      );
    } catch (error) {
      return new Promise((_, reject) =>
        setTimeout(() => reject({ error }), 1000)
      );
    }
  },
};

export default fetchMock;
