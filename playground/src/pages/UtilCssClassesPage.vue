<script setup lang="ts">
import PageSection from "@/components/PageSection.vue";
import TodoBanner from "@/components/TodoBanner.vue";
import PageLayout from "@/layout/PageLayout.vue";

const entryContainerBind = {
  class: "q-gutter-lg",
};
const exampleContainerBind = {
  class: "flex row items-center",
  style: "gap: 10px",
};
</script>

<template>
  <PageLayout title="Added CSS Classes">
    <TodoBanner />
    <PageSection subtitle="no-focus-helper" card>
      <div v-bind="entryContainerBind">
        <div>Disable focus helper</div>
        <div v-bind="exampleContainerBind">
          <q-btn label="Regular" color="secondary" />
          <q-btn
            label="No focus helper"
            color="secondary"
            class="no-focus-helper"
          />
        </div>
      </div>
    </PageSection>

    <PageSection subtitle="menu-item" card>
      <div v-bind="entryContainerBind">
        <div>
          Menu entry special looking for interactive menu (e.g the drawer of the
          doc)
        </div>
        <div v-bind="exampleContainerBind">
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="rocket_launch" />
            </q-item-section>

            <q-item-section> Regular </q-item-section>
          </q-item>

          <q-item clickable class="menu-item">
            <q-item-section avatar>
              <q-icon name="rocket_launch" />
            </q-item-section>

            <q-item-section> Menu item </q-item-section>
          </q-item>
        </div>
        <div>Also support active style with `menu-item-active`</div>
        <div v-bind="exampleContainerBind">
          <q-item clickable active>
            <q-item-section avatar>
              <q-icon name="rocket_launch" />
            </q-item-section>

            <q-item-section> Regular active </q-item-section>
          </q-item>
          <q-item
            clickable
            active
            activeClass="menu-item-active"
            class="menu-item"
          >
            <q-item-section avatar>
              <q-icon name="rocket_launch" />
            </q-item-section>

            <q-item-section> Menu item active </q-item-section>
          </q-item>
        </div>
      </div>
    </PageSection>
  </PageLayout>
</template>
