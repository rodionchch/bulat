const fetchMock = {
  get: <T>(url: string): Promise<{ data: T }> => {
    const json = require(`.${url}`);

    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: json }), 1000)
    );
  },
};

export default fetchMock;
