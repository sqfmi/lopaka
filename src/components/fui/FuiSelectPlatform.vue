<script lang="ts" setup>
import {toRefs, watch} from 'vue';
import {useSession} from '../../core/session';

const session = useSession();
const {preparePlatform} = session;
const {platform} = toRefs(session.state);
watch(platform, (val) => {
    preparePlatform(val, true);
});
</script>
<template>
    <div class="fui-select fui-platforms">
        <label
            for="library"
            class="fui-select__label pr-2"
        >
            Library:
        </label>
        <select
            id="library"
            class="fui-select__select fui-form-input"
            v-model="platform"
        >
            <option
                v-for="(p, idx) in session.platforms"
                :key="idx"
                :value="idx"
            >
                {{ p.getName() }}
            </option>
        </select>
    </div>
</template>
<style lang="css"></style>
