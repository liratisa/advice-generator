const url = "https://api.adviceslip.com/advice";
const btn = document.querySelector(".btn");

async function showAdvice() {
  const awaitAdvice = await fetch(url);
  const json = await awaitAdvice.json();

  const title = document.querySelector(".title");
  title.innerHTML = `Advice #${json.slip.id}`;
  const div = document.querySelector(".content");
  div.innerHTML = `<p>"${json.slip.advice}"</p>`;
}

showAdvice();

btn.addEventListener("click", showAdvice);
