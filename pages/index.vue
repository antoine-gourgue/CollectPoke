<template>
  <div class="min-h-screen bg-[#FFE9D3] text-gray-700 pb-16">
    <div class="absolute left-0 right-0 top-0 z-0 h-screen w-full mix-blend-multiply">
      <img
          class="w-full h-full object-cover opacity-[0.1]"
          src="/images/t2.jpg"
          alt=""
      />
    </div>

    <CollectNavbar />

    <div class="p-4">
      <section class="z-2 relative h-[80vh] flex flex-col justify-center gap-12">
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 tracking-tighter">
          Find and Track
          <br />
          Your Favorite Pokémon Cards with
          <span class="underline-red">CollectPoke</span>.
        </h1>

        <div class="w-full flex justify-center items-center">
          <div class="group bg-white px-5 py-8 shadow-lg rounded-lg flex w-full text-gray-700 min-w-[280px] max-w-3xl">
            <div class="flex flex-col md:flex-row items-center gap-4 w-full">
              <CollectInputSelect
                  class="w-full"
                  placeholder="Search for a Pokémon card"
              />

              <CollectLangSwitcher
                  class="w-full md:w-auto" />

              <CollectButton
                  class="flex items-center justify-center w-full md:w-fit"
                  icon="fa-magnifying-glass"
              >
                <p>Search</p>
              </CollectButton>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="flex justify-center items-start z-2 relative">
      <div
          class="flex md:grid grid-cols-3 overflow-x-scroll pb-24 md:overflow-x-hidden xl:grid-cols-4 gap-6 items-start max-w-6xl"
      >
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import CollectNavbar from '~/components/navigations/CollectNavbar.vue'
/* META */
/*
import EpiRoadTripCard from '~/components/cards/EpiRoadTripCard.vue'
*/
import CollectButton from '~/components/buttons/CollectButton.vue'
import CollectInputSelect from '~/components/inputs/CollectInputSelect.vue'
import CollectLangSwitcher from "~/components/i18n/CollectLangSwitcher.vue";

useHead({
  title: 'Bienvenue',
})
</script>

<style>
.underline-red {
  position: relative;
  display: inline-block;
  z-index: 1;
}

.underline-red::after {
  content: '';
  position: absolute;
  top: 100%;
  right: -2px;
  left: -2px;
  height: 10px;
  border-radius: 6.75px;
  margin-top: 0px;
  background-color: #FF1C1C;
  z-index: 0;
}
</style>