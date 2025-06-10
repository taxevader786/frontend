function handleLogin(event) {
  event.preventDefault(); // Prevent form from submitting

  // Redirect to question page after login
  window.location.href = '../question/index.html';
  return false;
}
