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
              <div class="row justify-center q-gutter-lg q-my-lg">
                <div class="col-4">
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
