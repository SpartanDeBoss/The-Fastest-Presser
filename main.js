let sCount = 0;
let lCount = 0;
let isRunning = false;

document.getElementById('start').addEventListener('click', function() {
  let time = document.getElementById('time').value;
  if (time) {
    isRunning = true;
    setTimeout(endGame, time * 1000);
  }
});

document.getElementById('reset').addEventListener('click', function() {
  sCount = 0;
  lCount = 0;
  isRunning = false;
  document.getElementById('s-count').innerText = 'S count: 0';
  document.getElementById('l-count').innerText = 'L count: 0';
  document.getElementById('message').innerText = '';
});

document.addEventListener('keypress', function (e) {
  console.log('Key pressed:', e.key);
  if (isRunning) {
    if (e.key === 's') {
      sCount++;
      document.getElementById('s-count').innerText = 'S count: ' + sCount;
    } else if (e.key === 'l') {
      lCount++;
      document.getElementById('l-count').innerText = 'L count: ' + lCount;
    }
  }
});


function endGame() {
  isRunning = false;
  if (sCount > lCount) {
    document.getElementById('message').innerText = 'S wins!';
  } else if (lCount > sCount) {
    document.getElementById('message').innerText = 'L wins!';
  } else {
    document.getElementById('message').innerText = 'It\'s a draw!';
  }
  // Adding confetti effect ;)
  var confettiSettings = { target: 'my-canvas' };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}