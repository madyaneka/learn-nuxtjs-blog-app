<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm
        :post="loadedPost"
        @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',

  components: {
    AdminPostForm
  },

  data() {
    return {
      loadedPost: {
        author: 'Madyan',
        title: 'My awesome post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
      }
    }
  },

  methods: {
    onSubmitted(editedPost) {
      axios.put(`https://nuxt-blog-9836b.firebaseio.com/posts/${ this.$route.params.id }.json`, editedPost)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
