<template>
  <div class="post-list">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },

  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: 'First Post',
              previewText: 'This is our first post!',
              thumbnail: 'https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            },
            {
              id: '2',
              title: 'Second Post',
              previewText: 'This is our second post!',
              thumbnail: 'https://images.pexels.com/photos/1323592/pexels-photo-1323592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            }
          ]
        })
      }, 1500)
    }).then(data => {
      return data
    }).catch(error => {
      context.error(new Error())
    })
  },

  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>
