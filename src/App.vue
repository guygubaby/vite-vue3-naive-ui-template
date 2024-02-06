<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * https://uicolors.app/create
 */
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#374EFC',
    primaryColorHover: '#4f71ff',
    primaryColorPressed: '#2336df',
    primaryColorSuppl: '#374EFC',
    borderRadius: '0.5rem',
  },
}
</script>

<template>
  <n-config-provider
    abstract
    preflight-style-disabled
    :theme-overrides="themeOverrides"
  >
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
