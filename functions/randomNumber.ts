// Function that return a random number between 0 and 100
export const onRequest: PagesFunction = async () => {
  const randNum = Math.floor(Math.random() * 100);

  return new Response(randNum.toString());
};
