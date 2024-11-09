<script src="./InfiniteLoader.js"></script>

<style lang="sass" src="./InfiniteLoader.sass" />

<template>
  <main>
    <div
      class="users"
      @scroll="handleScroll"
    >
      <div
        ref="page"
        v-for="p in page"
        :key="p"
        :class="{
          [`page-${ p }`]: true,
          'page': true,
          'empty': !paginateItems(p).length
        }"
      >
        <Item
          v-for="item in paginateItems(p)"
          :key="item.email"
          :item="item"
        />
      </div>

      <div class="loading" v-if="API.state.pending">Loading...</div>
    </div>

    <Pagination
      :pages="page"
      @switch="scrollTo"
    />
  </main>
</template>