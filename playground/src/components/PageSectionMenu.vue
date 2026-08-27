<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

// types
type TSectionMenu = {
    title: string;
    active: boolean;
    yPos: number;
    elementRef: Element;
    index: number;
}

// lets
let activeSection: TSectionMenu | null = null
let markerElement: HTMLElement | null = null

// consts
const marginClosestSection = 100
const marginWithHeader = -100
const itemHeight = 24

// refs
const sections = ref<TSectionMenu[]>([])

// functions
function scroll() {
    updateYReferences()
    const absSectionPos = sections.value.map((s) => { return { ...s, yPos: Math.abs(s.yPos) } })
        .sort((a, b) => a.yPos - b.yPos)
    const closest = absSectionPos.at(0)
    if (!closest || !activeSection) {
        return
    }
    if (closest.index === activeSection.index) {
        return
    }
    if (sections.value.at(closest.index)!.index > activeSection.index) {
        if (closest.yPos > marginClosestSection) {
            return
        }
    }
    activateSection(sections.value.at(closest.index)!)
}
function updateYReferences() {
    for (const section of sections.value) {
        section.yPos = section.elementRef.getBoundingClientRect().top + marginWithHeader
        if (section.active) {
            activeSection = section
        }
    }
}
function goToAnchor(section: TSectionMenu) {
    window.scrollTo({
        top: section.yPos + window.scrollY - 80,
        behavior: 'instant'
    })
    activateSection(section)
}
function activateSection(section: TSectionMenu) {
    for (const section of sections.value) {
        section.active = false
    }
    section.active = true
    activeSection = section
    if (!markerElement) {
        return
    }
    markerElement.style.top = `${section.index * itemHeight}px`
}

// lifeCycle
onMounted(() => {
    sections.value = Array.from(document.getElementsByClassName('page-section'))
        .map((element, index) => {
            return {
                title: element.innerHTML,
                active: index === 0,
                yPos: 9999,
                elementRef: element,
                index
            }
        })
    if (sections.value.length === 0) {
        return
    }
    document.addEventListener('scroll', scroll)
    updateYReferences()
    void nextTick(() => {
        markerElement = document.getElementsByClassName('section-menu-marker').item(0) as HTMLElement
        markerElement.style.height = `${itemHeight}px`
        for (const element of Array.from(document.getElementsByClassName('section-menu-item'))) {
            (element as HTMLElement).style.minHeight = `${itemHeight}px`
        }
    })
})
onBeforeUnmount(() => {
    document.removeEventListener('scroll', scroll)
})
</script>

<template>
    <div class="section-menu">
        <template v-if="sections.length > 0">
            <div class="section-menu-title">On this page</div>
            <q-list class="section-menu-container">
                <div class="section-menu-marker"></div>
                <q-item v-for="section of sections" :key="section.title" clickable :active="section.active"
                    class="section-menu-item no-focus-helper" active-class="section-menu-item-active"
                    @click="goToAnchor(section)">
                    {{ section.title }}
                </q-item>
            </q-list>
        </template>
    </div>
</template>

<style lang="scss">
.section-menu {
    position: fixed;
    right: 0;
    padding: 40px 60px;
    z-index: 999;

    &-container {
        position: relative;
        border-left: 1px solid var(--card-border-color);
    }

    &-title {
        padding-bottom: 8px;
        font-size: 1em;
        font-weight: 500;
    }

    &-marker {
        position: absolute;
        transition: top 0.2s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.2s;
        width: 1px;
        border-radius: 2px;
        background-color: var(--primary-color);
        left: -1px;
    }

    &-item {
        font-size: 0.9em;
        font-weight: 500;
        padding: 0px !important;
        padding-left: 12px !important;
        cursor: pointer;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        border-radius: 0px;

        &:hover {
            color: var(--secondary-hover-text-color);
        }

        &-active {
            color: var(--text-color);

            &:hover {
                color: var(--text-color);
            }
        }

    }
}
</style>