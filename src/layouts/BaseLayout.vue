<template>
  <q-layout view="lHh Lpr lFf">

    <the-header />

    <q-page-container>

      <transition
        name="page"
        mode="out-in">

        <router-view />

      </transition>

    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'BaseLayout'
  /* async mounted () {
    // axios.defaults.headers.common['X-CSRF-TOKEN'] = '7017dcdeaad22fcd025941aed49b0911'.
    const result = await axios.post('https://patrullajebicentenario.mininter.gob.pe/public/public/index/json_inst_by_coord', {
      latitud: -13.812198576673525,
      longitud: -73.2144298372396,
      csrf_patbin_tkn: '7017dcdeaad22fcd025941aed49b0911' })
    console.log('result :', result.data)
  } */
}
</script>
