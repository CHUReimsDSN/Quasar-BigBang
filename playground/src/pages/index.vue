<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { Dark, Notify } from "quasar";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

// consts
const bindContainer1 = {
  class: "flex column",
};
const bindContainer2 = {
  class: "flex row items-center q-gutter-x-md q-pb-md",
};
const bindSeparator = {
  class: "q-ma-xl",
};
const selectOptions = Object.freeze(["London", "Paris", "Madrid"]);

// refs
const input = ref("");
const input2 = ref("");
const input3 = ref([]);
const checkbox = ref(false);
const checkbox2 = ref(true);
const date = ref("");
const datetime = ref("");
const time = ref("");
const tab = ref("issues");

// lifeCycle
onMounted(() => {
  void nextTick(() => {
    input.value = "Hello";
  });
});
</script>

<template>
  <q-layout view="lhh lpR fFf">
    <q-header style="background-color: var(--banner-color)">
      <q-toolbar class="GPL__toolbar" style="height: 54px">
        <div class="flex row items-center justify-between full-width">
          <h1>Q-BigBang</h1>
          <div class="flex row items-center q-gutter-x-md">
            <q-icon
              :name="Dark.isActive ? 'light_mode' : 'dark_mode'"
              class="cursor-pointer"
              @click="Dark.toggle()"
            />
            <q-icon class="cursor-pointer" name="palette">
              <q-popup-proxy>
                <qbb-theme-preview />
              </q-popup-proxy>
            </q-icon>
          </div>
        </div>
        <q-space />
      </q-toolbar>
    </q-header>

    <NavigationDrawer />

    <q-page-container class="GPL__page-container">
      <q-page class="column q-px-lg q-py-sm">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div class="column">
            <div class="flex row items-center q-gutter-x-md">
              <h2>Preview</h2>
            </div>

            <div v-bind="bindContainer1">
              <h3>Boutons</h3>
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
                    <q-item clickable>
                      <q-item-section> Option 1 </q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section> Option 2 </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>

            <q-separator v-bind="bindSeparator" />

            <div v-bind="bindContainer1">
              <h3>Formulaire</h3>
              <div v-bind="bindContainer2">
                <q-input v-model="input" label="Input" />
                <q-input v-model="input2" placeholder="Placeholder" />
                <q-input v-model="input" />
                <q-input v-model="input" label="Clearable" clearable />
              </div>
              <div v-bind="bindContainer2">
                <q-input v-model="input" label="With hint" hint="I'm a hint" />
                <q-input
                  v-model="input"
                  label="With rules"
                  :rules="[() => 'An error']"
                />
              </div>
              <div v-bind="bindContainer2">
                <q-input v-model="input" label="Prefix" prefix="€" />
                <q-input v-model="input" label="Suffix" suffix="Kg" />
              </div>
              <div v-bind="bindContainer2">
                <q-select
                  v-model="input"
                  :options="selectOptions"
                  label="Select"
                />
                <q-select v-model="input2" :options="selectOptions" />
              </div>
              <div v-bind="bindContainer2">
                <q-select
                  v-model="input2"
                  :options="selectOptions"
                  useInput
                  label="Use input"
                />
                <q-select
                  v-model="input3"
                  :options="selectOptions"
                  multiple
                  useChips
                  label="Multiple with chips"
                />
              </div>
              <div v-bind="bindContainer2">
                <q-checkbox v-model="checkbox" label="Checkbox" />
                <q-checkbox v-model="checkbox2" label="Checked" />
              </div>
              <div v-bind="bindContainer2">
                <q-input v-model="date" label="Date">
                  <template v-slot:append>
                    <q-icon name="event" />
                  </template>
                  <q-popup-proxy fit noFocus>
                    <div class="flex flex-center">
                      <q-date v-model="date" mask="DD/MM/YYYY" />
                    </div>
                  </q-popup-proxy>
                </q-input>

                <q-input v-model="datetime" label="Datetime">
                  <template v-slot:append>
                    <q-icon name="event" />
                    <q-icon name="access_time" />
                  </template>
                  <q-popup-proxy fit noFocus>
                    <div class="flex flex-center column">
                      <q-date
                        todayBtn
                        v-model="datetime"
                        mask="DD/MM/YYYY HH:mm"
                      />
                      <qbb-time v-model="datetime" mask="DD/MM/YYYY HH:mm" />
                    </div>
                  </q-popup-proxy>
                </q-input>

                <q-input v-model="time" label="Time">
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

            <q-separator v-bind="bindSeparator" />

            <div v-bind="bindContainer1">
              <h3>Typographie</h3>
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
            </div>

            <q-separator v-bind="bindSeparator" />

            <div v-bind="bindContainer1">
              <h3>Notifications</h3>
              <div v-bind="bindContainer2">
                <q-btn
                  label="Succès"
                  color="secondary"
                  @click="
                    Notify.positive('Vos modifications ont été enregistrées.')
                  "
                />
                <q-btn
                  label="Erreur"
                  color="secondary"
                  @click="
                    Notify.negative('Nous n\'avons pas pu effectuer l\'action.')
                  "
                />
                <q-btn
                  label="Avertissement"
                  color="secondary"
                  @click="
                    Notify.warning(
                      'Certains champs ont besoin de votre attention.',
                    )
                  "
                />
                <q-btn
                  label="Information"
                  color="secondary"
                  @click="Notify.info('Vous avez 4 nouveaux messages.')"
                />
              </div>
            </div>

            <q-separator v-bind="bindSeparator" />

            <div v-bind="bindContainer1">
              <h3>Chips</h3>
              <div v-bind="bindContainer2">
                <q-chip label="Default" />
                <q-chip label="🌶️ Emoji" />
                <q-chip label="With icon" icon="settings" />
                <q-chip label="Clickable" clickable />
                <q-chip label="Primary" color="primary" />
              </div>
            </div>

            <q-separator v-bind="bindSeparator" />

            <div v-bind="bindContainer1">
              <h3>Tabs (dans q-card)</h3>
              <div v-bind="bindContainer2">
                <q-card class="flex column no-padding">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore.
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card>
              </div>
            </div>
          </div>
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
