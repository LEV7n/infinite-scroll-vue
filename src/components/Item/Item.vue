<script src="./Item.js"></script>

<style lang="sass" src="./Item.sass" />

<template>
  <div class="item">
    <div
      class="avatar"
      :style="strToHsl(item.login.md5)"
    >
      <i>{{ shortName(`${ item.name.first } ${ item.name.last }`) }}</i>
      <img
        :src="item.picture.large"
        :alt="`${ item.name.first } ${ item.name.last }`"
      >
    </div>
    
    <dl class="info">
      <!-- Name -->
      <dt>Name:</dt>
      <dd>{{ item.name.first }} {{ item.name.last }}</dd>

      <!-- Gender -->
      <dt>Gender:</dt>
      <dd>{{ item.gender }}</dd>

      <!-- Location -->
      <dt>Location:</dt>
      <dd>
        {{ item.location.city }}, {{ item.location.country }}
        <img :src="`https://flagcdn.com/16x12/${ item.nat?.toLowerCase() }.png`" :alt="item.nat">
      </dd>

      <!-- Email -->
      <dt>Email:</dt>
      <dd><a :href="`mailto:${ item.email }`">{{ item.email }}</a></dd>

      <!-- Phone -->
      <dt>Phone:</dt>
      <dd><a :href="`tel:${ item.cell }`">{{ item.cell }}</a></dd>
    </dl>
  </div>
</template>