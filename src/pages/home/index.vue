<template>
  <q-page>

    <!-- <iframe
      id="ga"
      name="Framename"
      ref="reference"
      src="https://patrullajebicentenario.mininter.gob.pe/public/public/index"
      style="border: 0; position:fixed; top:0; left:0; right:0; bottom:0; width:100%; height:100%"
      frameborder="0" scrolling="auto" class="frame-area"
      @load="load"
    >
    </iframe> -->

    <banner-home />

    <div class="row justify-center">
      <div class="col-10">
        <q-btn
          color="primary"
          class="full-width q-my-xl"
          label="VER MIS DENUNCIAS"
          :to="{ name: 'monitor' }"
        />
      </div>
    </div>

    <section-title :text="$t('ttt_1')"/>

    <iframe
      frameborder="0"
      height="700px"
      scrolling="auto"
      src="https://patrullajebicentenario.mininter.gob.pe/public/public/index"
      allow="geolocation" width="100%"
    >
    </iframe>

    <!-- <div id="responsability">
      <section-info-home
        v-for="(sih, index) in sectionInfoHome"
        :key="index"
        :reverse="sih.reverse"
        :title="$t(`t_${index + 1}`)"
        :text="$t(`m_${index + 1}`)"
        :src="`statics/mine/${index + 1}.jpg`"
      />
    </div>

    <section-title :text="$t('ttt_1')"/>

    <u-animate-container class="q-my-xl">
    <u-animate
      name="bounceIn"
      delay=".5s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
      class="col-xs-12"
    >
      <div class="q-mx-xl">
        <block-quote type="secondary">
          <p class="text-h5 q-pa-sm">{{ $t('mmm_1') }}</p>
        </block-quote>
      </div>
    </u-animate>
  </u-animate-container>

    <section-info-sosteinable />

    <section-suggestions />

    <div id="suggestions" class="text-center">
      <q-btn
        class="ff"
        style="height: 96px; width: 96px; font-size: 64px"
        fab
        icon="volume_up"
        color="primary" />
        <h1>
          {{ $t('voice_community') }}
        </h1>
    </div> -->

  </q-page>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      slide: 1,
      isScreenDesktop: this.$q.platform.is.desktop,
      sectionInfoHome: [
        { reverse: false, title: 'foo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { reverse: true, title: 'foo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { reverse: false, title: 'foo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
      ],
      test: null
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
.gm-style-iw {
  display: none !important
}
.q-page-container {
  padding-top: 0px !important
}
.ff {
  font-size: 64px !important;
}
</style>
