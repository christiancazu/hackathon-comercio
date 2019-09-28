<template>
  <div>
    <q-scroll-observer
      @scroll="scrollHandler" />
    <q-header
      id="home"
      :elevated="onScrollHeaderBg"
      class="row justify-center transition"
      :class="{
        'fill-transparent': !onScrollHeaderBg || currentRoutePath === '/',
        'fill-color-comercio': onScrollHeaderBg
      }"
    >
      <q-toolbar class="col-md-10">
        <q-btn
          class="lt-md text-black"
          flat outline dense round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-btn
          :to="`${isScreenMd ? '' : '/'}`"
          flat stretch no-caps
          :class="{
            'full-width q-pl-none absolute-center' : isScreenMd
          }"
          class="flex q-ml-xl"
          style="max-width: 50px; max-heigth: 24px"
        >
          <img
            :src="avatarImgPath"
            :style="isScreenMd ? 'height: 26px' : 'height: 32px'"
          >
        </q-btn>

        <q-space />

        <!-- navs links -->
        <q-item
          v-for="nav in navs"
          :key="nav"
          :to="{ name: nav}"
          class="gt-sm text-capitalize"
        >
          <q-item-section>
            <q-item-label
              class="text-h6 font-nav transition"
              :class="{
                'on-transparent-bg': onScrollHeaderBg && currentRoutePath !== '/',
                'on-color-bg': !onScrollHeaderBg && currentRoutePath === '/'
              }"
              :style="currentRoutePath !== '/' || onScrollHeaderBg ? 'color: black' : ''"
            >
              {{ $t(nav) }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown
          :on-scroll-header-bg="onScrollHeaderBg || currentRoutePath !== '/'"
          gt-sm />

      </q-toolbar>
    </q-header>

    <!-- sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      :width="160"
      content-class="bg-grey-2"
    >
      <q-list>
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item
          v-for="nav in navs"
          :key="nav"
          :to="{ name: nav }"
          exact
          exact-active-class
          class="text-center text-capitalize text-dark"
        >
          <q-item-section>
            <q-item-label>{{ $t(nav) }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown arrow-right />
      </q-list>
    </q-drawer>

  </div>
</template>

<script>

export default {
  name: 'TheHeader',
  data () {
    return {
      navs: ['home', 'complaints'],
      appName: process.env.APP_NAME,
      leftDrawerOpen: false,
      avatarImgPath: 'statics/comercio-logo.webp',
      iconImgPath: 'statics/comercio-logo.webp',
      sizeVH: 0,
      onScrollHeaderBg: false,
      currentRoutePath: ''
    }
  },
  mounted () {
    this.sizeVH = Math.max(document.documentElement.clientHeight, window.innerHeight)
  },
  watch: {
    '$route.path' (val) {
      console.error(val)
      this.currentRoutePath = val
    }
  },
  methods: {
    scrollHandler ({ position }) {
      if (position > this.sizeVH) {
        this.onScrollHeaderBg = true
      } else {
        this.onScrollHeaderBg = false
      }
    }
  },
  computed: {
    isScreenMd () {
      return this.$q.screen.lt.md
    }
  }
}
</script>

<style scoped>
.fill-color-comercio {
  background-color: #f7c600;
}
.fill-transparent {
  background-color: transparent;
}
.transition {
  transition: all 1.5s
}
/* navs text styles for active/no active link */
/*.q-item {
  color: #000;
  font-size: 16px;
  font-weight: 600;

  &:not(.q-router-link--active) {
    opacity: 1;
    font-weight: 400;
  }
}

.border-primary {
  border: 1px solid $primary;
}*/
</style>
