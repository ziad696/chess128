<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            <strong>For the second assignment to applying at PT. Manggala Teknik Nusantara. Make Chess with 128 Boxs, 4 kings, 16 pawns, etc.</strong>
        </p>
        <p>Backend : Laravel 8</p>
        <p>Frontend : Vue.js using Vue CLI</p>
        <h3>Todolist</h3>
        <ul>
            <li>First assignment to applying at PT. Manggala Teknik Nusantara.</li>
        </ul>
        <h3>Chess</h3>
        <ul>
            <li>Use <a href="https://github.com/vitogit/vue-chessboard" target="_blank" rel="noopener"><font-awesome-icon icon="external-link-square-alt"/></a></li>
        </ul>
        <h3>Chess 128</h3>
        <ul>
            <li>Second assignment to applying at PT. Manggala Teknik Nusantara.</li>
            <li>Inspired from double chess(1916) <a href="https://en.wikipedia.org/wiki/Double_chess" target="_blank" rel="noopener"><font-awesome-icon icon="external-link-square-alt"/></a></li>
            <li>Chessboard layout, refer to <a href="https://code2care.org/pages/chessboard-with-pieces-using-pure-html-and-css/" target="_blank" rel="noopener"><font-awesome-icon icon="external-link-square-alt"/></a></li>
            <li>Drag And Drop, refer to <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank" rel="noopener"><font-awesome-icon icon="external-link-square-alt"/></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: block;
    margin: 0 10px;
    margin-bottom: 10px;
}
a {
    color: #42b983;
}
</style>
