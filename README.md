# chess-web-app
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chess Game</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://unpkg.com/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
</head>
<body>
  <h1>♟️ Chess Game</h1>
  <div id="board" style="width: 400px"></div>
  <p id="status"></p>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>
  <script src="https://unpkg.com/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
const game = new Chess();

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: handleMove
});

function handleMove(source, target) {
  const move = game.move({
    from: source,
    to: target,
    promotion: 'q' // auto-promote to queen
  });

  if (move === null) return 'snapback';

  updateStatus();
}

function updateStatus() {
  let status = '';

  if (game.in_checkmate()) {
    status = 'Checkmate! Game over.';
  } else if (game.in_draw()) {
    status = 'Draw!';
  } else {
    status = `Turn: ${game.turn() === 'w' ? 'White' : 'Black'}`;
    if (game.in_check()) {
      status += ' — Check!';
    }
  }

  document.getElementById('status').textContent = status;
}
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  padding-top: 50px;
}

h1 {
  margin-bottom: 20px;
}

#status {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
