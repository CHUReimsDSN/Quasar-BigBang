<script setup lang="ts">
import ApiDescriptor from "./ApiDescriptor.vue";

// types
export type TEntryItem = {
  label: string;
  type: string;
  default?: string | undefined;
  desc: string | undefined;
  params: Record<string, TEntryItem>;
  examples: string[];
  returns: TEntryItem | undefined;
};

// props
const propsComponent = defineProps<{
  entry: TEntryItem;
}>();

// functions
function canExpandItem() {
  let canExpand = false;
  for (const param of Object.values(propsComponent.entry.params ?? {})) {
    if (param.desc || param.examples) {
      canExpand = true;
      break;
    }
  }
  if (
    propsComponent.entry.returns?.examples ||
    propsComponent.entry.returns?.desc
  ) {
    canExpand = true;
  }
  return canExpand;
}
function getDefaultValue() {
  if (!propsComponent.entry.default) {
    return ''
  }
  return ` (default: ${propsComponent.entry.default})`
}
</script>

<template>
  <div class="entry-container">
    <div class="flex row items-center">
      <q-btn
        class="entry-title-btn"
        color="warning"
        :label="propsComponent.entry.label"
      />
      <div class="q-pl-sm text-secondary">
        {{ propsComponent.entry.type }} {{ getDefaultValue() }}
      </div>
    </div>
    <ApiDescriptor
      v-if="propsComponent.entry.desc"
      :titleOnly="!canExpandItem()"
      :descr="propsComponent.entry.desc"
    >
      <div class="flex column q-gutter-md q-py-md">
        <template v-if="Object.keys(propsComponent.entry.params).length > 0">
          <div class="flex column">
            <template
              v-for="param of Object.entries(propsComponent.entry.params)"
              :key="param[0]"
            >
              <q-card style="padding: 6px">
                <div class="flex column">
                  <div class="flex row items-center">
                    <q-btn
                      class="entry-subtitle-btn"
                      color="info"
                      :label="param[0]"
                    />
                    <div class="q-pl-sm text-secondary">
                      {{ param[1].type }}
                    </div>
                  </div>
                  <div v-if="param[1].desc">
                    {{ param[1].desc }}
                  </div>
                  <div class="flex column">
                    <div v-if="param[1].examples.length > 0" class="">
                      Exemple{{ param[1].examples.length > 1 ? "s" : "" }}
                    </div>
                    <div></div>
                  </div>
                </div>
              </q-card>
            </template>
          </div>
        </template>

        <template v-if="propsComponent.entry.returns">
          <q-card style="padding: 6px">
            <div class="flex column">
              <div class="flex row items-center">
                <q-btn class="entry-subtitle-btn" color="info" label="return" />
                <div class="q-pl-sm text-secondary">
                  {{ propsComponent.entry.returns.type }}
                </div>
              </div>
              <div v-if="propsComponent.entry.returns.desc">
                {{ propsComponent.entry.returns.desc }}
              </div>
              <div class="flex column">
                <div
                  v-if="propsComponent.entry.returns.examples.length > 0"
                  class=""
                >
                  Exemple{{
                    propsComponent.entry.returns.examples.length > 1
                      ? "s"
                      : ""
                  }}
                </div>
                <div></div>
              </div>
            </div>
          </q-card>
        </template>
      </div>
    </ApiDescriptor>
  </div>
</template>
