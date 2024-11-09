<script src="./Pagination.js"></script>

<style lang="sass" src="./Pagination.sass" />

<template>
  <ul class="pagination">
    <!-- Previous page -->
    <li class="prev">
      <a
        href="#"
        @click.prevent="prev"
      >&laquo;</a>
    </li>

    <!-- First page is always visible -->
    <li
      class="first"
      :class="{ 'active': active === 1 }"
    >
      <a
        href="#"
        @click.prevent="change(1)"
      >1</a>
    </li>

    <!-- Ellipsis if current page so far from the start -->
    <span v-if="showLeftEllipsis">...</span>

    <li
      v-for="page in pagesToShow"
      :key="page"
      :class="{ 'active': page === active }"
    >
      <a
        href="#"
        @click.prevent="change(page)"
      >{{ page }}</a>
    </li>

    <!-- Ellipsis if current page so far from the end -->
    <span v-if="showRightEllipsis">...</span>

    <!-- Last page is always visible -->
    <li
      class="last"
      :class="{ 'active': active === pages }"
    >
      <a
        href="#"
        @click.prevent="change(pages)"
      >{{ pages }}</a>
    </li>

    <!-- Next page -->
    <li class="next">
      <a
        href="#"
        @click.prevent="next"
      >&raquo;</a>
    </li>
  </ul>
</template>