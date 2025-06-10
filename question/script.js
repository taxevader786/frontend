function updateLabel(id) {
  const value = document.getElementById(id).value;
  console.log(`${id} updated to ${value}`);
}

document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {};
  for (let i = 1; i <= 10; i++) {
    const input = document.getElementById("q" + i);
    data["q" + i] = input ? input.value : '';
  }
  console.log("Submitted Data:", data);
  // Redirect to chat page after survey submission
  window.location.href = '../chatpage/index.html';
});
