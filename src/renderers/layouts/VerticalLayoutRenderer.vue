<template>
  <v-container
    v-if="layout.visible"
    :class="`pa-0`"
    v-bind="vuetifyProps('v-container')"
  >
    <v-row
      v-for="(element, index) in layout.uischema.elements"
      :data-id="`vertical-${index}`"
      :key="`${layout.path}-${index}`"
      no-gutters
      v-bind="vuetifyProps(`v-row[${index}]`)"
    >
      <v-col cols="12" :class="styles.verticalLayout.item">
        <dispatch-renderer
          :schema="layout.schema"
          :uischema="element"
          :path="layout.path"
          :enabled="layout.enabled"
          :renderers="layout.renderers"
          :cells="layout.cells"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  uiTypeIs,
  JsonFormsRendererRegistryEntry,
  Layout,
  rankWith,
} from '@jsonforms/core'
import { defineComponent } from 'vue'
import {
  DispatchRenderer,
  rendererProps,
  useJsonFormsLayout,
  RendererProps,
} from '@jsonforms/vue2'
import { useVuetifyLayout } from '@/renderers/util/composition';
import { VContainer, VRow, VCol } from 'vuetify/lib'

const layoutRenderer = defineComponent({
  name: 'vertical-layout-renderer',
  components: {
    DispatchRenderer,
    VContainer,
    VRow,
    VCol,
  },
  props: {
    ...rendererProps<Layout>(),
  },
  setup(props: RendererProps<Layout>) {
    return useVuetifyLayout(
      useJsonFormsLayout(props)
    )
  },
})

export default layoutRenderer
export const verticalLayoutRenderer: JsonFormsRendererRegistryEntry = {
  renderer: layoutRenderer,
  tester: rankWith(2, uiTypeIs('VerticalLayout')),
}
</script>