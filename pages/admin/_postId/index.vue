<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
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
