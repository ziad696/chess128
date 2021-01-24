<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/chess.jpg" />
        <HelloWorld msg="Chess 128" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    }
};
</script>
