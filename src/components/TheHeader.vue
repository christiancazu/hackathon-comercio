<template>
  <div>
    <q-scroll-observer @scroll="scrollHandler" />

    <q-header
      id="home"
      elevated
      class="row justify-center transition fill-color-comercio"
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
              class="text-h6 font-nav transition text-black"
            >
              {{ $t(nav) }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown
          gt-sm />

        <q-item
          clickable
          class="gt-sm text-capitalize"
          @click="showLogin"
        >
          <q-item-section avatar>
            <q-icon
              color="primary" name="account_circle"
              style="font-size: 36px; color: black !important"  />
          </q-item-section>
          <q-item-section>
            <q-item-label
              class="text-h6 font-nav transition"
              style="color: black"
            >
              {{ $t(currentLogin) }}
            </q-item-label>
          </q-item-section>
        </q-item>

      </q-toolbar>
    </q-header>

    <!-- sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      :width="120"
      content-class="bg-grey-2"
      behavior="mobile"
    >
      <q-list>
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item
          v-for="nav in navs"
          :key="nav"
          :to="{ name: nav }"
          exact
          exact-active-class
          class="text-center text-capitalize text-dark text-bold"
        >
          <q-item-section>
            <q-item-label>{{ $t(nav) }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown arrow-right />

        <q-item
          clickable
          @click="showLogin"
          class="text-center text-capitalize text-dark text-bold"
        >
          <q-item-section>
            <q-item-label>{{ $t(currentLogin) }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
    <q-dialog v-model="card">
      <q-card class="row justify-center full-width">
            <q-img
              class="col-6"
              src="statics/logo-card.png"
              />
          <div class="col-6 q-pa-md">
            <h6 class="text-accent text-center text-capitalize">{{ $t('login') }}</h6>
            <q-input
              class="q-my-sm"
              :label="`${$t('user')}`"
            />
            <q-input
            type="password"
              class="q-my-sm"
              :label="`${$t('password')}`"
            />
            <q-btn
              color="primary"
              class="full-width q-my-sm"
              :label="`${$t('identificar')}`"
              push glossy
              @click="toAdminView"
            />
          </div>
      </q-card>
    </q-dialog>
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
      currentRoutePath: '',
      card: false,
      currentLogin: 'login'
    }
  },
  mounted () {
    this.sizeVH = Math.max(document.documentElement.clientHeight, window.innerHeight)
  },
  watch: {
    '$route.path' (val) {
      console.error(val)
      this.currentRoutePath = val
      if (val === '/admin') {
        this.currentLogin = 'admin'
      } else {
        this.currentLogin = 'login'
      }
    }
  },
  methods: {
    scrollHandler ({ position }) {
      if (position > this.sizeVH) {
        this.onScrollHeaderBg = true
      } else {
        this.onScrollHeaderBg = false
      }
    },
    showLogin () {
      this.card = true
    },
    toAdminView () {
      this.$router.push({ name: 'admin' })
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
