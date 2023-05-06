const createUser = async ({ name, email }) => {
    // Check at https://webhook.site/#!/fbb5a653-d76e-4ff4-89a5-118461af564a/7b6be9bf-e015-4aa8-aba4-30b5bd35f109/1
  await fetch('https://webhook.site/fbb5a653-d76e-4ff4-89a5-118461af564a', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
    return {name,email}
};

export { createUser };
