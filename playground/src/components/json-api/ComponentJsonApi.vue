<script setup lang="ts">
import type {
  TComponentApi,
  TMethodDefinition,
  TPropDefinition,
} from "quasar-app-extension-big-bang";
import { capitalize, onMounted, ref } from "vue";
import EntryItem, { type TEntryItem } from "./EntryItem.vue";

// types
type TPropDefEntry = TPropDefinition & {
  label: string;
};

// props
const props = defineProps<{
  jsonApi: TComponentApi;
}>();

// consts
const propz = Object.entries(props.jsonApi.props);
const propCount = propz.length;
const propsTabShow = propCount > 0;
const propzByCategory: Map<string, TPropDefEntry[]> = new Map();
for (const prop of propz) {
  const defaultValue = propzByCategory.get(prop[1].category ?? "Content") ?? [];
  defaultValue.push({
    ...prop[1],
    label: prop[0],
  });
  propzByCategory.set(prop[1].category ?? "Content", defaultValue);
}

const methods = Object.entries(props.jsonApi.methods);
const methodCount = methods.length;
const methodsTabShow = methodCount > 0;

const slots = Object.entries(props.jsonApi.slots);
const slotCount = slots.length;
const slotsTabShow = slotCount > 0;

const events = Object.entries(props.jsonApi.events);
const eventCount = events.length;
const eventsTabShow = eventCount > 0;

const showComponent =
  propsTabShow || methodsTabShow || slotsTabShow || eventsTabShow;

const bingBadgeCount = {
  class: "q-ml-sm",
};

// refs
const activeTab = ref("");
const activeTabProps = ref("");

// functions
function formatMethodType(def: TMethodDefinition) {
  let argsFormat: string[] = [];
  if (def.params) {
    for (const entry of Object.entries(def.params)) {
      argsFormat.push(entry[0] + ": " + entry[1].type);
    }
  }
  return `(${argsFormat.join(", ")}) => ${def.returns?.type ?? "void"}`;
}
function propDefToEntry(def: TPropDefEntry): TEntryItem {
  return {
    label: def.label,
    type: Array.isArray(def.type) ? def.type.join(" | ") : def.type,
    desc: def.desc,
    default: def.default ? String(def.default) : undefined,
    params: Object.fromEntries(
      Object.entries(def.params ?? {}).map((entry) => {
        return [
          entry[0],
          {
            label: entry[0],
            type: Array.isArray(entry[1].type)
              ? entry[1].type.join(" | ")
              : entry[1].type,
            default: entry[1].default ? String(entry[1].default) : undefined,
            desc: entry[1].desc,
            params: {},
            examples: (entry[1].examples ?? []).map((ex) => String(ex)),
            returns: undefined,
          },
        ];
      }),
    ),
    examples: (def.examples ?? []).map((ex) => String(ex)),
    returns: undefined
  };
}
function methodDefToEntry(defTuple: [string, TMethodDefinition]): TEntryItem {
  return {
    label: defTuple[0],
    type: formatMethodType(defTuple[1]),
    desc: defTuple[1].desc,
    params: Object.fromEntries(
      Object.entries(defTuple[1].params ?? {}).map((entry) => {
        return [
          entry[0],
          {
            label: entry[0],
            type: Array.isArray(entry[1].type)
              ? entry[1].type.join(" | ")
              : entry[1].type,
            desc: entry[1].desc,
            params: {},
            examples: (entry[1].examples ?? []).map((ex) => String(ex)),
            returns: undefined,
          },
        ];
      }),
    ),
    examples: [],
    returns: defTuple[1].returns
      ? {
          label: "return",
          type: Array.isArray(defTuple[1].returns.type)
            ? defTuple[1].returns.type.join(" | ")
            : defTuple[1].returns.type,
          desc: defTuple[1].returns.desc,
          params: {},
          examples: (defTuple[1].returns.examples ?? []).map((ex) =>
            String(ex),
          ),
          returns: undefined,
        }
      : undefined,
  };
}

// lifeCycle
onMounted(() => {
  let defaultTabValue = "";
  if (eventsTabShow) {
    defaultTabValue = "events";
  }
  if (methodsTabShow) {
    defaultTabValue = "methods";
  }
  if (slotsTabShow) {
    defaultTabValue = "slots";
  }
  if (propsTabShow) {
    defaultTabValue = "props";
  }
  activeTab.value = defaultTabValue;

  if (propzByCategory.size > 0) {
    activeTabProps.value = Array.from(propzByCategory.keys()).at(0) ?? "";
  }
});
</script>

<template>
  <q-card v-if="showComponent" class="no-padding">
    <q-tabs v-model="activeTab" class="tab-container-json-api">
      <q-tab v-if="propsTabShow" name="props" label="Props">
        <q-badge :label="propCount" color="primary" v-bind="bingBadgeCount" />
      </q-tab>
      <q-tab v-if="methodsTabShow" name="methods" label="Methods">
        <q-badge :label="methodCount" color="primary" v-bind="bingBadgeCount" />
      </q-tab>
      <q-tab v-if="slotsTabShow" name="slots" label="Slots">
        <q-badge :label="slotCount" color="primary" v-bind="bingBadgeCount" />
      </q-tab>
      <q-tab v-if="eventsTabShow" name="events" label="Events">
        <q-badge :label="eventCount" color="primary" v-bind="bingBadgeCount" />
      </q-tab>
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="activeTab">
      <q-tab-panel name="props" class="shallow-panel">
        <div class="flex row">
          <div>
            <q-tabs
              v-model="activeTabProps"
              vertical
              class="tab-container-json-api"
            >
              <q-tab
                v-for="propTab of Array.from(propzByCategory.entries())"
                :key="propTab[0]"
                :name="propTab[0]"
                :label="capitalize(propTab[0])"
              >
                <q-badge
                  :label="propTab[1].length"
                  color="primary"
                  v-bind="bingBadgeCount"
                />
              </q-tab>
            </q-tabs>
          </div>
          <q-tab-panels v-model="activeTabProps">
            <q-tab-panel
              v-for="propTab of Array.from(propzByCategory.entries())"
              :key="propTab[0]"
              :name="propTab[0]"
              class="shallow-panel"
            >
              <q-list>
                <template
                  v-for="(def, indexDef) of propTab[1]"
                  :key="def.label"
                >
                  <EntryItem :entry="propDefToEntry(def)" />
                  <q-separator v-if="indexDef < propTab[1].length - 1" />
                </template>
              </q-list>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </q-tab-panel>
      <q-tab-panel name="methods" class="shallow-panel">
        <q-list>
          <template v-for="(method, methodIndex) of methods" :key="method[0]">
            <EntryItem :entry="methodDefToEntry(method)" />
            <q-separator v-if="methodIndex < methods.length - 1" />
          </template>
        </q-list>
      </q-tab-panel>
      <q-tab-panel name="slots" class="shallow-panel">TODO</q-tab-panel>
      <q-tab-panel name="events" class="shallow-panel">TODO</q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style lang="scss">
.shallow-panel {
  padding: 0px;
}
.entry-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px;
}
.entry-title-btn {
  min-height: 1.8em;
}
.entry-subtitle-btn {
  min-height: 1.6em;
}
.tab-container-json-api {
  background-color: var(--page-background);
}
</style>
