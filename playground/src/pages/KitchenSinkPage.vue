<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { Notify } from "quasar";
import DynamicCard from "@/components/DynamicCard.vue";
import DynamicFormLabel from "@/components/DynamicFormLabel.vue";
import PageLayout from "@/layout/PageLayout.vue";
import PageSection from "@/components/PageSection.vue";

// consts
const bindContainer = {
  class: "flex row items-start q-gutter-x-md",
};
const selectOptions = Object.freeze(["London", "Paris", "Madrid"]);
const tree = Object.freeze([
  {
    label: "Satisfied customers",
    children: [
      {
        label: "Good food (with icon)",
        icon: "restaurant_menu",
        children: [{ label: "Quality ingredients" }, { label: "Good recipe" }],
      },
      {
        label: "Good service (disabled node with icon)",
        icon: "room_service",
        disabled: true,
        children: [
          { label: "Prompt attention" },
          { label: "Professional waiter" },
        ],
      },
      {
        label: "Pleasant surroundings (with icon)",
        icon: "photo",
        children: [
          {
            label: "Happy atmosphere (with image)",
          },
          { label: "Good table presentation" },
          { label: "Pleasing decor" },
        ],
      },
    ],
  },
]);

// refs
const showCard = ref(true);
const showLabel = ref(false);
const input = ref("");
const input2 = ref("");
const input3 = ref([]);
const checkbox = ref(false);
const checkbox2 = ref(true);
const toggle = ref(false);
const toggle2 = ref(null);
const toggle3 = ref(true);
const radio = ref("rectangle");
const date = ref("");
const datetime = ref("");
const time = ref("");
const tab = ref("issues");
const dialog = ref(false);
const dropdownOptions = ref<string[]>(Array(50));

// lifeCycle
onMounted(() => {
  void nextTick(() => {
    input2.value = "wrong value";
    dropdownOptions.value.fill("Option");
  });
});
</script>

<template>
  <PageLayout title="Kitchen sink">
    <q-toggle v-model="showCard" label="Display card" />
    <PageSection subtitle="Buttons">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-btn label="Primary" color="primary" />
          <q-btn label="Secondary" color="secondary" />
          <q-btn label="With icon" color="secondary" icon="add" />
          <q-btn label="Loading" color="secondary" loading />
          <q-btn icon="rocket_launch" class="no-focus-helper" />
        </div>
        <div v-bind="bindContainer">
          <q-btn label="Positive" color="positive" />
          <q-btn label="Negative" color="negative" />
          <q-btn label="Warning" color="warning" />
          <q-btn label="Info" color="info" />
          <q-btn label="No color" />
        </div>
        <div v-bind="bindContainer">
          <q-btn-dropdown label="Dropdown" color="secondary">
            <q-list>
              <q-item v-for="(option, index) of dropdownOptions" :key="index" clickable>
                <q-item-section>{{ option }} {{ index + 1 }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div v-bind="bindContainer">
          <q-btn-group>
            <q-btn label="A" icon="timeline" color="secondary" />
            <q-btn label="Button" color="secondary" />
            <q-btn label="Group" color="secondary" />
          </q-btn-group>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Input">
      <DynamicCard v-model="showCard">
        <q-toggle v-model="showLabel" label="Outer label" />
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Input" #props="props">
            <q-input v-model="input" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Placeholder" #props="props">
            <q-input v-model="input" placeholder="Placeholder" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Clearable" #props="props">
            <q-input v-model="input" clearable v-bind="props" />
          </DynamicFormLabel>
        </div>
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="With hint" #props="props">
            <q-input v-model="input" hint="I'm a hint" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="With rules" #props="props">
            <q-input v-model="input2" :rules="[() => 'An error']" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="With rules not triggered" #props="props">
            <q-input v-model="input" :rules="[(val) => String(val).length < 1 || 'An error']" v-bind="props" />
          </DynamicFormLabel>
        </div>
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Disabled" #props="props">
            <q-input v-model="input" disable v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Readonly" #props="props">
            <q-input v-model="input" readonly v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Loading" #props="props">
            <q-input v-model="input" loading v-bind="props" />
          </DynamicFormLabel>
        </div>
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Prefix" #props="props">
            <q-input v-model="input" prefix="€" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Suffix" #props="props">
            <q-input v-model="input" suffix="Kg" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Different color" #props="props">
            <q-input v-model="input" color="info" v-bind="props" />
          </DynamicFormLabel>
        </div>
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Date" #props="props">
            <q-input v-model="date" v-bind="props">
              <template v-slot:append>
                <q-icon name="event" />
              </template>
              <q-popup-proxy fit noFocus>
                <div class="flex flex-center">
                  <q-date v-model="date" mask="DD/MM/YYYY" />
                </div>
              </q-popup-proxy>
            </q-input>
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Datetime" #props="props">
            <q-input v-model="datetime" v-bind="props">
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
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Time" #props="props">
            <q-input v-model="time" v-bind="props">
              <template v-slot:append>
                <q-icon name="access_time" />
              </template>
              <q-popup-proxy fit noFocus>
                <div class="flex flex-center">
                  <qbb-time v-model="time" />
                </div>
              </q-popup-proxy>
            </q-input>
          </DynamicFormLabel>
        </div>
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Number" #props="props">
            <q-input v-model="input" type="number" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Native date" #props="props">
            <q-input v-model="input" type="date" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Native time" #props="props">
            <q-input v-model="input" type="time" v-bind="props" />
          </DynamicFormLabel>
        </div>
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Autogrow" #props="props">
            <q-input v-model="input" autogrow v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Textarea" #props="props">
            <q-input v-model="input" type="textarea" v-bind="props" />
          </DynamicFormLabel>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Select">
      <DynamicCard v-model="showCard">
        <q-toggle v-model="showLabel" label="Outer label" />
        <div v-bind="bindContainer">
          <DynamicFormLabel v-model="showLabel" label="Select" #props="props">
            <q-select v-model="input" :options="selectOptions" v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Use input" #props="props">
            <q-select v-model="input" :options="selectOptions" useInput v-bind="props" />
          </DynamicFormLabel>
          <DynamicFormLabel v-model="showLabel" label="Multiple with chips" #props="props">
            <q-select v-model="input3" :options="selectOptions" multiple useChips v-bind="props" />
          </DynamicFormLabel>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Checkbox">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-checkbox v-model="checkbox" label="Checkbox" />
          <q-checkbox v-model="checkbox2" label="Checked" />
          <q-checkbox v-model="checkbox" label="Different color" color="info" />
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Toggle">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-toggle v-model="toggle" label="False value" />
          <q-toggle v-model="toggle2" label="Intermediate value" toggleIndeterminate />
          <q-toggle v-model="toggle3" label="True value" />
          <q-toggle v-model="toggle" label="Different color" color="info" />
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Radio">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-radio v-model="radio" val="line" label="Line" />
          <q-radio v-model="radio" val="rectangle" label="Rectangle" />
          <q-radio v-model="radio" val="ellipse" label="Ellipse" />
          <q-radio v-model="radio" val="polygon" label="Polygon" />
          <q-radio v-model="radio" val="colored" label="Different color" color="info" />
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Uploader">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-uploader color="secondary" label="test" />
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Tooltip">
      <DynamicCard v-model="showCard">
        <div>
          Hover me
          <q-tooltip>I'm a tooltip</q-tooltip>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Banner">
      <DynamicCard v-model="showCard">
        <q-banner> No background class </q-banner>
        <q-banner class="bg-secondary"> Background secondary </q-banner>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Typography">
      <DynamicCard v-model="showCard">
        <div class="flex row items-center q-gutter-x-md">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
        </div>

        <div v-bind="bindContainer">
          <div class="text-body1">
            Text body 1 - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </div>
        </div>
        <div v-bind="bindContainer">
          <div class="text-body2">
            Text body 2 - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </div>
        </div>
        <div v-bind="bindContainer">
          <div class="text-caption">
            Text caption - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </div>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Notification">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-btn label="Success" color="secondary" @click="
            Notify.positive('Vos modifications ont été enregistrées.')
            " />
          <q-btn label="Error" color="secondary" @click="
            Notify.negative('Nous n\'avons pas pu effectuer l\'action.')
            " />
          <q-btn label="Warning" color="secondary" @click="
            Notify.warning(
              'Certains champs ont besoin de votre attention.',
            )
            " />
          <q-btn label="Info" color="secondary" @click="Notify.info('Vous avez 4 nouveaux messages.')" />
          <q-btn label="Secondary" color="secondary" @click="Notify.secondary('Vous avez 4 nouveaux messages.')" />
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Chip">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-chip label="Default" />
          <q-chip label="🌶️ Emoji" />
          <q-chip label="With icon" icon="settings" />
          <q-chip label="Clickable" clickable />
          <q-chip label="Primary" color="primary" />
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Badge">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <q-badge> Default </q-badge>
          <q-badge color="primary"> Primary </q-badge>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Tree">
      <DynamicCard v-model="showCard">
        <q-tree :nodes="tree" node-key="label" tick-strategy="leaf" />
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Tab">
      <DynamicCard v-model="showCard">
        <q-tabs v-model="tab">
          <q-tab name="code" label="Code" icon="code" />
          <q-tab name="issues" label="Issues" icon="bug_report" />
          <q-tab name="pr" label="Pull Requests" icon="merge" />
          <q-tab name="settings" label="Settings" icon="settings" />
        </q-tabs>

        <q-tab-panels v-model="tab">
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
    </PageSection>

    <PageSection subtitle="Expansion item">
      <DynamicCard v-model="showCard">
        <div v-bind="bindContainer">
          <div style="width: 350px">
            <q-expansion-item label="Simple">
              <div class="q-pa-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
                dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </div>
            </q-expansion-item>
          </div>
        </div>
        <div v-bind="bindContainer">
          <div style="width: 350px">
            <q-list bordered>
              <q-expansion-item icon="perm_identity" label="These" caption="expansion items">
                <div class="q-pa-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                  eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
                  dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </div>
              </q-expansion-item>
              <q-separator />
              <q-expansion-item icon="signal_wifi_off" label="Are in a bordered">
                <div class="q-pa-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                  eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
                  dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </div>
              </q-expansion-item>
              <q-separator />
              <q-expansion-item icon="drafts" label="Fixed size" header-class="text-info">
                <div class="q-pa-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                  eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
                  dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </div>
              </q-expansion-item>
              <q-separator />
              <q-expansion-item icon="assessment" label="List" disable>
                <div class="q-pa-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                  eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
                  dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </div>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </DynamicCard>
    </PageSection>

    <PageSection subtitle="Dialog">
      <DynamicCard v-model="showCard">
        <q-btn label="Click me" color="secondary" @click="dialog = true" />
        <q-dialog v-model="dialog">
          <q-card class="flex-center">
            <q-card-section class="row items-center">
              <div class="text-body1 text-center text-weight-bold">
                Hello, I'm a dialog
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn label="Close" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </DynamicCard>
    </PageSection>

  </PageLayout>

</template>
