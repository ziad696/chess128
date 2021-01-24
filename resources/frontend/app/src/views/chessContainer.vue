<template>
    <div>
        <h1>Chess</h1>
        <div class="scoreHeading">
            <button class="button button1" @click="reloadGame()">
                <font-awesome-icon icon="chess" /> Start
            </button>
        </div>
        <div class="gameContainer">
            <div class="whiteContainer">
                <div class="whiteHeading">
                    <h2>WHITE</h2>
                </div>
                <div class="whiteMove">
                    White Move
                </div>
            </div>
            <div class="chessBoardContainer">
                <chessboard/>
            </div>
            <div class="blackContainer">
                <div class="blackHeading">
                    <h2>BLACK</h2>
                </div>
                <div class="blackMove">
                    Black Move
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        reloadGame() {

        },
        showInfo(data) {
            this.positionInfo = data;
        }
    }
};
</script>

<style scoped>
.gameContainer {
    width: auto;
    padding: 0 10px;
    display: flex;
}
.chessBoardContainer {
    width: 60%;
    margin: auto;
    width: auto;
    height: auto;
    padding: auto;
    text-align: center;
}
.whiteContainer {
    float: left;
    width: 20%;
    padding: 10px;
    margin: 25px;
    height: auto;
    text-align: center;
}
.blackContainer {
    float: left;
    width: 20%;
    padding: 10px;
    margin: 25px;
    height: auto;
}
.whiteHeading {
    background: #212529;
    padding: 10px;
    color: #f8f9fa;
}
.blackHeading {
    background: #dee2e6;
    padding: 10px;
    color: #212529;
    text-align: center;
}
.blackMove {
    padding: 10px;
    text-align: left;
    border: 5px solid #dee2e6;
}
.whiteMove {
    padding: 10px;
    text-align: left;
    border: 5px solid #212529;
}

#title {
    text-align: center;
}

.button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    margin-bottom: 20px;
    border-radius: 4px;
}

.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
}

.button1:hover {
    background-color: #4caf50;
    color: white;
}
</style>
