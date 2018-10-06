<template>
  <section class="posts-page">
    <PostPreview
      id="1"
      thumbnail="https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      title="Hello there!"
      preview-text="This is my first post!"/>
    <PostPreview
      id="2"
      thumbnail="https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      title="Hello there! 2"
      preview-text="This is my first post! 2"/>
    <PostPreview
      id="3"
      thumbnail="https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      title="Hello there! 3"
      preview-text="This is my first post! 3"/>
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
