const fetcher =async (url) => {
  /* return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    // mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // Authorization: `OAuth ${OAuth}`,
    },
  }).then((r) => r.json()); */
  console.log(url)
  const res = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    // mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // Authorization: `OAuth ${OAuth}`,
    },
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    /* 
    error.info = await res.json()
    error.status = res.status*/
    // console.log(res);
    throw error
  }

  return res.json()
};

export default fetcher;
