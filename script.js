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
