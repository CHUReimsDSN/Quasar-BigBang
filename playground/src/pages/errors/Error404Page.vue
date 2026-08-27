<script setup lang="ts">
import { useRouter } from 'vue-router';

// consts
const router = useRouter();

// functions
function redirectToDashboard() {
    void router.push({ name: 'home' });
}
</script>

<template>
    <div class="fullscreen bg-blue-8 text-white text-center q-pa-md flex flex-center">
        <div>
            <div style="font-size: 30vh">404</div>

            <div class="text-h2" style="opacity: 0.4">Woopsy.. there nothing here.</div>

            <q-btn class="q-mt-xl" color="white" text-color="black" unelevated label="Back" @click="redirectToDashboard"
                no-caps />
        </div>
    </div>
</template>
