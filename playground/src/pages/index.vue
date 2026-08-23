<script setup lang="ts">
import { inject, nextTick, onMounted, ref } from "vue";
import { Dark, Notify } from "quasar";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import DynamicCard from "@/components/DynamicCard.vue";
import DynamicFormLabel from "@/components/DynamicFormLabel.vue";

// consts
const bindContainer1 = {
  class: "flex column items-start",
};
const bindContainer2 = {
  class: "flex row items-center q-gutter-x-md",
};

const selectOptions = Object.freeze(["London", "Paris", "Madrid"]);
const bigBang = inject("bigBang");

// refs
const showCard = ref(false);
const showLabel = ref(false);
const input = ref("");
const input2 = ref("");
const input3 = ref([]);
const checkbox = ref(false);
const checkbox2 = ref(true);
const date = ref("");
const datetime = ref("");
const time = ref("");
const tab = ref("issues");
const dropdownOptions = ref<string[]>(Array(50));

// lifeCycle
onMounted(() => {
  bigBang.setSaveMode("local-storage");
  bigBang.tryLoadTheme();

  void nextTick(() => {
    input2.value = "wrong value";
    dropdownOptions.value.fill("Option");
  });
});
</script>

<template>
  <q-layout view="lhh lpR fFf">
    <q-header>
      <q-toolbar class="GPL__toolbar" style="height: 54px">
        <div class="flex row items-center justify-between full-width">
          <h1>Quasar BigBang</h1>
          <div class="flex row items-center q-gutter-x-md">
            <q-icon :name="showCard ? 'select_all' : 'padding'" class="cursor-pointer" @click="showCard = !showCard" />
            <q-icon :name="Dark.isActive ? 'light_mode' : 'dark_mode'" class="cursor-pointer" @click="Dark.toggle()" />
            <q-icon class="cursor-pointer" name="palette">
              <q-popup-proxy>
                <qbb-theme-picker />
              </q-popup-proxy>
            </q-icon>
          </div>
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <NavigationDrawer />

    <q-page-container class="GPL__page-container">
      <q-page class="column q-px-lg q-pb-md">
        <div class="column">
          <div class="flex row items-center q-gutter-x-md">
            <h2>Preview</h2>
          </div>

          <div v-bind="bindContainer1">
            <h3>Buttons</h3>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <q-btn label="Primary" color="primary" />
                <q-btn label="With icon" color="primary" icon="add" />
                <q-btn label="Secondary" color="secondary" />
                <q-btn icon="rocket_launch" class="no-focus-helper" />
              </div>
              <div v-bind="bindContainer2">
                <q-btn label="Positive" color="positive" />
                <q-btn label="Negative" color="negative" />
                <q-btn label="Warning" color="warning" />
                <q-btn label="Info" color="info" />
                <q-btn label="No color" />
              </div>
              <div v-bind="bindContainer2">
                <q-btn-dropdown label="Dropdown" color="primary">
                  <q-list>
                    <q-item v-for="(option, index) of dropdownOptions" :key="index" clickable>
                      <q-item-section>{{ option }} {{ index + 1 }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <div class="flex row items-center">
              <h3>Input</h3>
              <q-btn class="q-ml-sm" :icon="showLabel ? 'text_snippet' : 'wrap_text'" @click="showLabel = !showLabel" />
            </div>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <DynamicFormLabel v-model="showLabel" label="Input" #props="props">
                  <q-input v-model="input" v-bind="props" />
                </DynamicFormLabel>

                <DynamicFormLabel v-model="showLabel" label="Placeholder" #props="props">
                  <q-input v-model="input" placeholder="Placeholder" v-bind="props" />
                </DynamicFormLabel>
                <div v-bind="bindContainer1">
                  <qbb-label label="Clearable" />
                  <q-input v-model="input" clearable />
                </div>
              </div>
              <div v-bind="bindContainer2">
                <div v-bind="bindContainer1">
                  <qbb-label label="With hint" />
                  <q-input v-model="input" hint="I'm a hint" />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="With rules" />
                  <q-input v-model="input2" :rules="[() => 'An error']" />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="With rules no triggered" />
                  <q-input v-model="input" :rules="[(val) => String(val).length < 1 || 'An error']" />
                </div>
              </div>
              <div v-bind="bindContainer2">
                <div v-bind="bindContainer1">
                  <qbb-label label="Disabled" />
                  <q-input v-model="input" disable />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Readonly" />
                  <q-input v-model="input" readonly />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Loading" />
                  <q-input v-model="input" loading />
                </div>
              </div>
              <div v-bind="bindContainer2">
                <div v-bind="bindContainer1">
                  <qbb-label label="Prefix" />
                  <q-input v-model="input" prefix="€" />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Suffix" />
                  <q-input v-model="input" suffix="Kg" />
                </div>
              </div>
              <div v-bind="bindContainer2">
                <div v-bind="bindContainer1">
                  <qbb-label label="Date" />
                  <q-input v-model="date">
                    <template v-slot:append>
                      <q-icon name="event" />
                    </template>
                    <q-popup-proxy fit noFocus>
                      <div class="flex flex-center">
                        <q-date v-model="date" mask="DD/MM/YYYY" />
                      </div>
                    </q-popup-proxy>
                  </q-input>
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Datetime" />
                  <q-input v-model="datetime">
                    <template v-slot:append>
                      <q-icon name="event" />
                      <q-icon name="access_time" />
                    </template>
                    <q-popup-proxy fit noFocus>
                      <div class="flex flex-center column">
                        <q-date v-model="datetime" mask="DD/MM/YYYY HH:mm" />
                        <qbb-time v-model="datetime" mask="DD/MM/YYYY HH:mm" />
                      </div>
                    </q-popup-proxy>
                  </q-input>
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Time" />
                  <q-input v-model="time">
                    <template v-slot:append>
                      <q-icon name="access_time" />
                    </template>
                    <q-popup-proxy fit noFocus>
                      <div class="flex flex-center">
                        <qbb-time v-model="time" />
                      </div>
                    </q-popup-proxy>
                  </q-input>
                </div>
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <h3>Select</h3>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <q-select v-model="input" :options="selectOptions" label="Inner label" />
                <q-select v-model="input" :options="selectOptions" useInput label="Use input" />
                <q-select v-model="input3" :options="selectOptions" multiple useChips label="Multiple with chips" />
              </div>
              <div v-bind="bindContainer2">
                <div v-bind="bindContainer1">
                  <qbb-label label="Select" />
                  <q-select v-model="input" :options="selectOptions" />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Use input" />
                  <q-select v-model="input" :options="selectOptions" useInput />
                </div>
                <div v-bind="bindContainer1">
                  <qbb-label label="Multiple with chips" />
                  <q-select v-model="input3" :options="selectOptions" multiple useChips />
                </div>
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <h3>Checkbox</h3>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <q-checkbox v-model="checkbox" label="Checkbox" />
                <q-checkbox v-model="checkbox2" label="Checked" />
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <h3>Typography</h3>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <h4>H4</h4>
                <h5>H5</h5>
                <h6>H6</h6>
              </div>

              <div v-bind="bindContainer2">
                <div class="text-body1">
                  Text body 1 - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
              </div>
              <div v-bind="bindContainer2">
                <div class="text-body2">
                  Text body 2 - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
              </div>
              <div v-bind="bindContainer2">
                <div class="text-caption">
                  Text caption - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <h3>Notification</h3>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <q-btn label="Succès" color="secondary" @click="
                  Notify.positive('Vos modifications ont été enregistrées.')
                  " />
                <q-btn label="Erreur" color="secondary" @click="
                  Notify.negative('Nous n\'avons pas pu effectuer l\'action.')
                  " />
                <q-btn label="Avertissement" color="secondary" @click="
                  Notify.warning(
                    'Certains champs ont besoin de votre attention.',
                  )
                  " />
                <q-btn label="Information" color="secondary" @click="Notify.info('Vous avez 4 nouveaux messages.')" />
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <h3>Chip</h3>
            <DynamicCard v-model="showCard">
              <div v-bind="bindContainer2">
                <q-chip label="Default" />
                <q-chip label="🌶️ Emoji" />
                <q-chip label="With icon" icon="settings" />
                <q-chip label="Clickable" clickable />
                <q-chip label="Primary" color="primary" />
              </div>
            </DynamicCard>
          </div>

          <div v-bind="bindContainer1">
            <h3>Tab</h3>
            <DynamicCard v-model="showCard">
              <q-tabs v-model="tab">
                <q-tab name="code" label="Code" icon="code" />
                <q-tab name="issues" label="Issues" icon="bug_report" />
                <q-tab name="pr" label="Pull Requests" icon="merge" />
                <q-tab name="settings" label="Settings" icon="settings" />
              </q-tabs>

              <q-tab-panels v-model="tab" keep-alive>
                <q-tab-panel name="code">
                  <h4 class="no-margin">Code</h4>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </div>
                </q-tab-panel>
                <q-tab-panel name="issues">
                  <h4 class="no-margin">Issues</h4>
                  <div>There's nothing here</div>
                </q-tab-panel>
                <q-tab-panel name="pr">
                  <h4 class="no-margin">Pull Requests</h4>
                  <div>Lorem ipsum dolor sit amet.</div>
                </q-tab-panel>
                <q-tab-panel name="settings">
                  <h4 class="no-margin">Issues</h4>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </DynamicCard>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
