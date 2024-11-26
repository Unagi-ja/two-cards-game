const { useState } = React;
const { createRoot } = ReactDOM;

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);

    const startGame = () => {
        alert("ゲームを開始します！");
        setGameStarted(true);
    };

    return (
        <div>
            {!gameStarted && (
                <button id="start_button" onClick={startGame}>
                    START
                </button>
            )}

            {gameStarted && (
                <div id="game_board">
                    <div>作成予定の画面</div>
                </div>
            )}
        </div>
    );
};

createRoot(document.getElementById("root")).render(<App />);
