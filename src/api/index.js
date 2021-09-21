export const fetchPostList = async (host, path, params = {}) => {
  try {
    const query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");

    const url = `https://${host}/${path}${query.length > 0 ? `?${query}` : ""}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
