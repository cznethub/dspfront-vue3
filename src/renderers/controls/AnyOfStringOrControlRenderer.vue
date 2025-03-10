<template>
  <v-combobox
    :id="control.id + '-input'"
    :class="styles.control.input"
    :disabled="!control.enabled"
    :autofocus="appliedOptions.focus"
    :placeholder="appliedOptions.placeholder"
    :label="computedLabel"
    :hint="description"
    persistent-hint
    :required="control.required"
    :error-messages="control.errors"
    :value="control.data"
    :maxlength="
      appliedOptions.restrict ? control.schema.maxLength : undefined
    "
    :counter="
      control.schema.maxLength !== undefined
        ? control.schema.maxLength
        : undefined
    "
    :items="items"
    :clearable="hover"
    @change="onChange"
    @focus="isFocused = true"
    @blur="isFocused = false"
  />
</template>

<script lang="ts">
import {
  ControlElement,
  JsonFormsRendererRegistryEntry,
  rankWith,
  and,
  uiTypeIs,
  schemaMatches,
  JsonSchema,
} from '@jsonforms/core';
import { defineComponent } from 'vue'
import {
  rendererProps,
  useJsonFormsControl,
  RendererProps,
} from '@jsonforms/vue2';
import { default as ControlWrapper } from './ControlWrapper.vue';
import { useVuetifyControl } from '@/renderers/util/composition';
import { VHover, VCombobox } from 'vuetify/lib';

const controlRenderer = defineComponent({
  name: 'anyof-string-or-enum-control-renderer',
  components: {
    ControlWrapper,
    VHover,
    VCombobox,
  },
  directives: {
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    return useVuetifyControl(
      useJsonFormsControl(props),
      (value) => value || undefined
    );
  },
  computed: {
    items(): string[] {
      // made sure via the testers
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return findEnumSchema(this.control.schema.anyOf!)!.enum!;
    },
    description(): string {
      return this.control.description || this.appliedOptions.description || ''
    },
  },
});

export default controlRenderer;

const findEnumSchema = (schemas: JsonSchema[]) =>
  schemas.find(
    (s) => s.enum !== undefined && (s.type === 'string' || s.type === undefined)
  );
const findTextSchema = (schemas: JsonSchema[]) =>
  schemas.find((s) => s.type === 'string' && s.enum === undefined);

const hasEnumAndText = (schemas: JsonSchema[]): boolean => {
  // idea: map to type,enum and check that all types are string and at least one item is of type enum,
  const enumSchema = findEnumSchema(schemas);
  const stringSchema = findTextSchema(schemas);
  const remainingSchemas = schemas.filter(
    (s) => s !== enumSchema || s !== stringSchema
  );
  const wrongType = remainingSchemas.find((s) => s.type && s.type !== 'string');
  return !!enumSchema && !!stringSchema && !wrongType;
};
const simpleAnyOf = and(
  uiTypeIs('Control'),
  schemaMatches(
    (schema) => Array.isArray(schema.anyOf) && hasEnumAndText(schema.anyOf)
  )
);

export const anyOfStringOrControlRenderer: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(6, simpleAnyOf),
};
</script>