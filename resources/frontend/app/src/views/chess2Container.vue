<template>
    <div>
        <h1>Chess 128</h1>
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
                    <p>Defeaten units <small>(Drag Here)</small></p>
                    <hr>
                    <div class="pion">
                        <draggable v-model="t1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t1"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                    <div class="pion">
                        <draggable v-model="t2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t2"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                    <div class="pion">
                        <draggable v-model="t3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t3"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                    <div class="pion">
                        <draggable v-model="t4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t4"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                </div>
            </div>
            <div class="chessBoardContainer">

                <div class="chessboard">

                    <div id="eighthRow">
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="a8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="b8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="c8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="d8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="e8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="f8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="g8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="h8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="i8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="j8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="k8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="l8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="m8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="n8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="o8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="p8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p8"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>
                    
                    <div id="seventhRow">
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="a7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="b7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="c7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="d7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="e7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="f7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="g7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="h7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="i7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="j7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="k7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="l7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="m7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="n7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="o7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="p7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p7"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>
                    
                    <div id="sixthRow">
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="a6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="b6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="c6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="d6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="e6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="f6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="g6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="h6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="i6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="j6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="k6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="l6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="m6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="n6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="o6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="p6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p6"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>

                    <div id="fifthRow">
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="a5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="b5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="c5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="d5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="e5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="f5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="g5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="h5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="i5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="j5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="k5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="l5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="m5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="n5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="o5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="p5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p5"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>
                    
                    <div id="fourthRow">
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="a4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="b4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="c4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="d4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="e4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="f4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="g4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="h4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="i4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="j4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="k4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="l4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="m4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="n4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="o4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="p4" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p4"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>
                    
                    <div id="thirdRow">
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="a3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="b3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="c3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="d3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="e3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="f3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="g3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="h3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="i3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="j3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="k3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="l3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="m3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="n3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="o3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="p3" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p3"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>
                    
                    <div id="secondRow">
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="a2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="b2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="c2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="d2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="e2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="f2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="g2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="h2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="i2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="j2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="k2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="l2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="m2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="n2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="o2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="p2" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p2"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>

                    <div id="firstRow">
                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="a1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in a1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="b1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in b1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="c1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in c1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="d1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in d1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="e1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in e1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="f1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in f1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="g1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in g1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="h1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in h1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="i1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in i1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="j1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in j1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="k1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in k1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="l1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in l1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="m1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in m1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="n1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in n1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="blackTile">
                            <div class="pion">
                                <draggable v-model="o1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in o1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>

                        <div class="whiteTile">
                            <div class="pion">
                                <draggable v-model="p1" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                                    <div v-for="element in p1"  :key="element.order">{{element.name}}</div>
                                </draggable>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div class="blackContainer">
                <div class="blackHeading">
                    <h2>BLACK</h2>
                </div>
                <div class="blackMove">
                    <p>Defeaten units <small>(Drag Here)</small></p>
                    <hr>
                    <div class="pion">
                        <draggable v-model="t5" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t5"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                    <div class="pion">
                        <draggable v-model="t6" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t6"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                    <div class="pion">
                        <draggable v-model="t7" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t7"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                    <div class="pion">
                        <draggable v-model="t8" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                            <div v-for="element in t8"  :key="element.order">{{element.name}}</div>
                        </draggable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
const a8 = ['\u265C'];
const b8 = ['\u265E'];
const c8 = ['\u265D'];
const d8 = ['\u265B'];
const e8 = ['\u265A'];
const f8 = ['\u265D'];
const g8 = ['\u265E'];
const h8 = ['\u265C'];
const i8 = ['\u265C'];
const j8 = ['\u265E'];
const k8 = ['\u265D'];
const l8 = ['\u265A'];
const m8 = ['\u265B'];
const n8 = ['\u265D'];
const o8 = ['\u265E'];
const p8 = ['\u265C'];

const a7 = ['\u265F'];
const b7 = ['\u265F'];
const c7 = ['\u265F'];
const d7 = ['\u265F'];
const e7 = ['\u265F'];
const f7 = ['\u265F'];
const g7 = ['\u265F'];
const h7 = ['\u265F'];
const i7 = ['\u265F'];
const j7 = ['\u265F'];
const k7 = ['\u265F'];
const l7 = ['\u265F'];
const m7 = ['\u265F'];
const n7 = ['\u265F'];
const o7 = ['\u265F'];
const p7 = ['\u265F'];

const a2 = ['\u2659'];
const b2 = ['\u2659'];
const c2 = ['\u2659'];
const d2 = ['\u2659'];
const e2 = ['\u2659'];
const f2 = ['\u2659'];
const g2 = ['\u2659'];
const h2 = ['\u2659'];
const i2 = ['\u2659'];
const j2 = ['\u2659'];
const k2 = ['\u2659'];
const l2 = ['\u2659'];
const m2 = ['\u2659'];
const n2 = ['\u2659'];
const o2 = ['\u2659'];
const p2 = ['\u2659'];

const a1 = ['\u2656'];
const b1 = ['\u2658'];
const c1 = ['\u2657'];
const d1 = ['\u2655'];
const e1 = ['\u2654'];
const f1 = ['\u2657'];
const g1 = ['\u2658'];
const h1 = ['\u2656'];
const i1 = ['\u2656'];
const j1 = ['\u2658'];
const k1 = ['\u2657'];
const l1 = ['\u2654'];
const m1 = ['\u2655'];
const n1 = ['\u2657'];
const o1 = ['\u2658'];
const p1 = ['\u2656'];

export default {
  name: "chess",
  components: {
    draggable
  },
  data() {
    return {
      a8: a8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      b8: b8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      c8: c8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      d8: d8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      e8: e8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      f8: f8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      g8: g8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      h8: h8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      i8: i8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      j8: j8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      k8: k8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      l8: l8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      m8: m8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      n8: n8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      o8: o8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      p8: p8.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      a7: a7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      b7: b7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      c7: c7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      d7: d7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      e7: e7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      f7: f7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      g7: g7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      h7: h7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      i7: i7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      j7: j7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      k7: k7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      l7: l7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      m7: m7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      n7: n7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      o7: o7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      p7: p7.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      a6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      a5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      a4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      a3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      b6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      b5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      b4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      b3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      c6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      c5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      c4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      c3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      d6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      d5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      d4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      d3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      e6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      e5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      e4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      e3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      f6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      f5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      f4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      f3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      g6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      g5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      g4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      g3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      h6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      h5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      h4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      h3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      i6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      i5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      i4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      i3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      j6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      j5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      j4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      j3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      k6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      k5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      k4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      k3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      l6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      l5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      l4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      l3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      m6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      m5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      m4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      m3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      n6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      n5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      n4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      n3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      o6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      o5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      o4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      o3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      p6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      p5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      p4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      p3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      a2: a2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      b2: b2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      c2: c2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      d2: d2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      e2: e2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      f2: f2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      g2: g2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      h2: h2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      i2: i2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      j2: j2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      k2: k2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      l2: l2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      m2: m2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      n2: n2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      o2: o2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      p2: p2.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      a1: a1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      b1: b1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      c1: c1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      d1: d1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      e1: e1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      f1: f1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      g1: g1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      h1: h1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      i1: i1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      j1: j1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      k1: k1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      l1: l1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      m1: m1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      n1: n1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      o1: o1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      p1: p1.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      t1: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t3: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t5: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t6: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t7: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      t8: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    orderList() {
      this.a8 = this.a8.sort((one, two) => {
        return one.order - two.order;
      });
      this.b8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.c8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.d8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.e8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.f8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.g8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.h8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.i8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.j8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.k8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.l8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.m8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.n8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.o8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.p8 = this.b8.sort((one, two) => {
        return one.order - two.order;
      });
      this.a7 = this.a7.sort((one, two) => {
        return one.order - two.order;
      });
      this.b7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.c7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.d7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.e7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.f7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.g7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.h7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.i7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.j7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.k7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.l7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.m7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.n7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.o7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.p7 = this.b7.sort((one, two) => {
        return one.order - two.order;
      });
      this.a2 = this.a2.sort((one, two) => {
        return one.order - two.order;
      });
      this.b2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.c2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.d2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.e2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.f2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.g2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.h2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.i2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.j2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.k2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.l2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.m2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.n2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.o2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.p2 = this.b2.sort((one, two) => {
        return one.order - two.order;
      });
      this.a1 = this.a1.sort((one, two) => {
        return one.order - two.order;
      });
      this.b1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.c1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.d1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.e1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.f1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.g1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.h1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.i1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.j1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.k1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.l1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.m1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.n1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.o1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
      this.p1 = this.b1.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    a8String() {
      return JSON.stringify(this.a8, null, 2);
    },
    b8String() {
      return JSON.stringify(this.b8, null, 2);
    },
    c8String() {
      return JSON.stringify(this.c8, null, 2);
    },
    d8String() {
      return JSON.stringify(this.d8, null, 2);
    },
    e8String() {
      return JSON.stringify(this.e8, null, 2);
    },
    f8String() {
      return JSON.stringify(this.f8, null, 2);
    },
    g8String() {
      return JSON.stringify(this.g8, null, 2);
    },
    h8String() {
      return JSON.stringify(this.h8, null, 2);
    },
    i8String() {
      return JSON.stringify(this.i8, null, 2);
    },
    j8String() {
      return JSON.stringify(this.j8, null, 2);
    },
    k8String() {
      return JSON.stringify(this.k8, null, 2);
    },
    l8String() {
      return JSON.stringify(this.l8, null, 2);
    },
    m8String() {
      return JSON.stringify(this.m8, null, 2);
    },
    n8String() {
      return JSON.stringify(this.n8, null, 2);
    },
    o8String() {
      return JSON.stringify(this.o8, null, 2);
    },
    p8String() {
      return JSON.stringify(this.p8, null, 2);
    },
    a7String() {
      return JSON.stringify(this.a7, null, 2);
    },
    byString() {
      return JSON.stringify(this.by, null, 2);
    },
    c7String() {
      return JSON.stringify(this.c7, null, 2);
    },
    d7String() {
      return JSON.stringify(this.d7, null, 2);
    },
    e7String() {
      return JSON.stringify(this.e7, null, 2);
    },
    f7String() {
      return JSON.stringify(this.f7, null, 2);
    },
    g7String() {
      return JSON.stringify(this.g7, null, 2);
    },
    h7String() {
      return JSON.stringify(this.h7, null, 2);
    },
    i7String() {
      return JSON.stringify(this.i7, null, 2);
    },
    j7String() {
      return JSON.stringify(this.j7, null, 2);
    },
    k7String() {
      return JSON.stringify(this.k7, null, 2);
    },
    l7String() {
      return JSON.stringify(this.l7, null, 2);
    },
    m7String() {
      return JSON.stringify(this.m7, null, 2);
    },
    n7String() {
      return JSON.stringify(this.n7, null, 2);
    },
    o7String() {
      return JSON.stringify(this.o7, null, 2);
    },
    p7String() {
      return JSON.stringify(this.p7, null, 2);
    },
    a2String() {
      return JSON.stringify(this.a2, null, 2);
    },
    b2String() {
      return JSON.stringify(this.b2, null, 2);
    },
    c2String() {
      return JSON.stringify(this.c2, null, 2);
    },
    d2String() {
      return JSON.stringify(this.d2, null, 2);
    },
    e2String() {
      return JSON.stringify(this.e2, null, 2);
    },
    f2String() {
      return JSON.stringify(this.f2, null, 2);
    },
    g2String() {
      return JSON.stringify(this.g2, null, 2);
    },
    h2String() {
      return JSON.stringify(this.h2, null, 2);
    },
    i2String() {
      return JSON.stringify(this.i2, null, 2);
    },
    j2String() {
      return JSON.stringify(this.j2, null, 2);
    },
    k2String() {
      return JSON.stringify(this.k2, null, 2);
    },
    l2String() {
      return JSON.stringify(this.l2, null, 2);
    },
    m2String() {
      return JSON.stringify(this.m2, null, 2);
    },
    n2String() {
      return JSON.stringify(this.n2, null, 2);
    },
    o2String() {
      return JSON.stringify(this.o2, null, 2);
    },
    p2String() {
      return JSON.stringify(this.p2, null, 2);
    },
    a1String() {
      return JSON.stringify(this.a1, null, 2);
    },
    byString() {
      return JSON.stringify(this.by, null, 2);
    },
    c1String() {
      return JSON.stringify(this.c1, null, 2);
    },
    d1String() {
      return JSON.stringify(this.d1, null, 2);
    },
    e1String() {
      return JSON.stringify(this.e1, null, 2);
    },
    f1String() {
      return JSON.stringify(this.f1, null, 2);
    },
    g1String() {
      return JSON.stringify(this.g1, null, 2);
    },
    h1String() {
      return JSON.stringify(this.h1, null, 2);
    },
    i1String() {
      return JSON.stringify(this.i1, null, 2);
    },
    j1String() {
      return JSON.stringify(this.j1, null, 2);
    },
    k1String() {
      return JSON.stringify(this.k1, null, 2);
    },
    l1String() {
      return JSON.stringify(this.l1, null, 2);
    },
    m1String() {
      return JSON.stringify(this.m1, null, 2);
    },
    n1String() {
      return JSON.stringify(this.n1, null, 2);
    },
    o1String() {
      return JSON.stringify(this.o1, null, 2);
    },
    p1String() {
      return JSON.stringify(this.p1, null, 2);
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
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


.chessboard {
    width: 640px;
    height: 320px;
    margin: 20px;
    border: 10px solid #333;
}
.blackTile {
    float: left;
    width: 40px;
    height: 40px;
    background-color: #999;
    text-align:center;
    display: table-cell;
    vertical-align:middle;
}
.whiteTile {
    float: left;
    width: 40px;
    height: 40px;
    background-color: #fff;
    text-align:center;
    display: table-cell;
    vertical-align:middle;
}
.pion{
    font-size:25px;
    cursor: pointer;
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
