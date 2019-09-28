<template>
  <div class="row justify-center q-my-xl">
    <q-form class="col-12 col-md-10 bg-white q-mb-xl shadow-1">
      <div class="row justify-center q-mb-lg">
        <div class="col-12">
          <q-card class="my-card">
            <q-parallax
              src="statics/images/admin.jpg"
              :max-height="200"
            >
              <div
                class="absolute-bottom text-subtitle1 text-center q-py-lg"
                style="background-color: rgba(0, 0, 0, .5)">
                <p class="text-h4 text-white">{{ $t('complaint_monitor') }}</p>
              </div>
            </q-parallax>

            <q-card-section>
              <div class="row justify-between q-my-lg fix-center">
                <div class="col-md-4 color-content">
                    <div class="sem-red"><div class="s-red"></div>asdasdasd</div>
                </div>
                <div class="col-md-4 color-content">
                    <div class="sem-orange">asdasdasd</div>
                </div>
                <div class="col-md-4 color-content">
                    <div class="sem-green">asdasdasd</div>
                </div>
                <!-- <div class="col-8">
                  <q-btn
                    :loading="isBusy"
                    color="primary"
                    :label="`${$t('register')}`"
                    class="full-width"
                    push glossy
                    @click="onSubmit"
                  />
                </div> -->
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.sphere {
  min-height: 4rem;
  max-width: 4rem;
  border-radius: 50%;
}
.fix-center {
  display: flex;
  align-content: space-between
}
.color-content {
  display: flex;
  flex-direction: column;
  justify-self: center;
}
.sem-red, .sem-orange, .sem-green {
  text-align: center;
}
.sem-red {
  margin: 0 auto;
}
.s-red {
  width: 4rem;
  height: 4rem;
  background-color: red;
}
</style>
