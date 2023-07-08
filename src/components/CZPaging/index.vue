<script setup lang="ts">
import { ref } from 'vue'
import type { IPagedEnumerable } from '../../.generated/models/IPagedEnumerable'

interface IProps {
  api: (...args) => Promise<IPagedEnumerable<typeof args & any>>
  params?: object & { offset?: number; limit?: number }
}

const props = withDefaults(defineProps<IProps>(), { })

const pagingRef = ref()

watch(props?.params, () => {
  props?.params && pagingRef.value.refresh()
})

// watchEffect(() => {
//   // pagingRef.value && pagingRef.value.refresh()
//   console.log('%c [  pagingRef.value ]-20', 'font-size:13px; background:#e07ffc; color:#ffc3ff;', pagingRef.value)
// })

async function queryList(pageNo: number, pageSize: number) {
  const paged = { limit: 20, offset: (pageNo - 1) * pageSize }

  const params = { ...(props.params ?? {}), ...paged }

  if (!props?.api)
    return console.error('api不能为空')

  try {
    const res = await props.api(params)

    pagingRef.value.complete(res.items)
  }
  catch (error) {
    console.log('%c [ error ]-24', 'font-size:13px; background:#868f58; color:#cad39c;', error, props.api)
    pagingRef.value.complete(false)
  }
}

defineExpose({
  ...pagingRef.value,
})
</script>

<template>
  <z-paging ref="pagingRef" v-bind="$attrs" @query="queryList">
    <template v-for="k in Object.keys($slots)" #[k] :key="k">
      <slot :name="k" />
    </template>
  </z-paging>
</template>
