<script setup>
import Form from './form'
import FormItem from './form-item'
</script>

<template>
  <!-- Simple example -->
  <Form>
    <!--              ⬇️ changed it but not updated -->
    <FormItem label="second" />
  </Form>

  <!-- Element Plus example -->
  <el-form>
    <el-form-item label="second" />
  </el-form>
</template>
