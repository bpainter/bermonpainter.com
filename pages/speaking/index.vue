<template>
  <div>
    <h1>Speaking Engagements</h1>
    <ul>
      <!-- Replace with GraphQL query to fetch speaking engagements -->
      <li v-for="engagement in engagements" :key="engagement.id">
        <nuxt-link :to="'/speaking/' + engagement.slug">
          {{ engagement.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      engagements: [] // Placeholder for fetched data
    };
  },
  mounted() {
    // Fetch data from Contentful and assign to `engagements`
  }
};
</script>
