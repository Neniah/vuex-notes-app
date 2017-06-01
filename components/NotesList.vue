<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | Vuex</h2>
      <div class="btn-group btn-group-justified" rote="group">
        <button type="button" class="btn btn-default"
          @click="show = 'all'"
          :class="{active: show === 'all'}">
          All Notes
        </button>
      </div>
      <!-- Favorites Button -->
      <div class="btn-group" role="groupd">
        <button type="button" class="btn btn-default"
          @click="show = 'favorites'"
          :class="{active: show === 'favorites'}">
          Favorites
        </button>
      </div>
    </div>
  </div>
  <!-- render notes in a list -->
  <div class="container">
    <div class="list-group">
      <a v-for="note in filteredNotes"
        class="list-group-item"
        href="#"
        :class="{active: activeNote === note}">
        <h4 class="list-group-item-heading">
          {{note.text.trim().substring(0,30)}}
        </h4>
      </a>
    </div>
  </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'

export default {
  data (){
    return {
      show: 'all'
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote
    },
    actiions: {
      updateActiveNote
    }
  },
  computed: {
    filteredNotes(){
      if(this.show === 'all'){
        return this.notes
      } else if(this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  }
}
</script>

<style lang="css">
</style>
