<script setup lang="ts">
import type { BookInterface } from '@/interfaces/BookInterface';
import { formatCOP } from '@/utils/currency';

defineProps<{
  book: BookInterface;
}>();
</script>

<template>
  <article>
    <h2>{{ book.title }}</h2>

    <p>{{ formatCOP(book.price) }}</p>

    <RouterLink :to="`/books/${book.id}`">
      Ver libro
    </RouterLink>
  </article>
</template>