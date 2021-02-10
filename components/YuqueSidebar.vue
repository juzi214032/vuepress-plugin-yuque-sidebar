<template>
  <div>
    <div class="sidebar__container">
      <ul>
        <li :class="currentHash===item.slug?'sidebar__li--current':''" v-for="(item, index) in headers" :key="item.slug">
          <span class="sidebar__span" :class="['sidebar__span--leve-'+item.level,index+1<headers.length&&item.level===headers[index+1].level-1?'collapsible':'']">
            <a v-if="index+1<headers.length&&item.level===headers[index+1].level-1">
              <span role="img" aria-label="caret-down" class="anticon anticon-caret-down" style="font-size: 10px; margin: 5px; color: rgb(140, 140, 140);"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></span>
            </a>
            <a :class="currentHash===item.slug?'active':''" :href="'#' + item.slug">{{ item.title }}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "YuqueSidebar",
  data: function () {
    return {
      currentHash:'',
      headers: [],
    };
  },
  watch: {
    "$page.headers": function (headers) {
      this.headers = this.$page.headers;
    },
    "$route":function(route){
      this.currentHash=route.hash.substring(1)
    },
    headers: function (headers) {
      console.log("headers", headers);
    },
  },
  mounted: function () {
    this.headers = this.$page.headers;
  },
};
</script>

<style lang='stylus' scoped>
ul
  list-style none

.sidebar__container
  position fixed
  top 60px
  right 0
  will-change top
  -webkit-transition top 0.2s ease 0.2s
  transition top 0.2s ease 0.2s
  padding-top 32px
  font-size 12px
  width 20rem
  .sidebar__span--leve-3
    padding-left 1.0rem
  li
    border-left 2px solid #e8e8e8
    line-height 24px
  .sidebar__li--current
    border-color #25b864
  .sidebar__span
    margin 0 10px 0 28px
    width calc(100% - 28px)
    display block
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    &.collapsible
      width: calc(100% - 8px);
      padding: 0 10px 0 0;
      margin-left: 8px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
  a
    color #595959
    &:hover
      color #8c8c8c
    &.active
      color #25b864
    &.active:hover
      color #7cd4a2
</style>

<style lang='stylus'>
.page
  padding-right 20rem !important
</style>