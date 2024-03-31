<template>
  <div class="relative inline-block text-left">
    <div @click="toggleDropdown"
         class="cursor-pointer px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm flex items-center space-x-2">
      <span class="w-5">
        {{ selectedLanguage.flag }}
      </span>
      <span>{{ selectedLanguage.name }}</span>
      <i class="fas fa-chevron-down"></i>
    </div>

    <div
        v-show="dropdownOpen"
        class="origin-top-right absolute right-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full"
        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <a v-for="language in languages"
           :key="language.code"
           @click="selectLanguage(language)"
           class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
           role="menuitem" tabindex="-1">
          <div class="flex items-center">
            <span class="mr-2">{{ language.flag }}</span>
            <span>{{ language.name }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CollectLangSwitcher',
  setup() {
    const languages = ref([
      { name: 'English', code: 'en', flag: '🇺🇸' },
      { name: 'French', code: 'fr', flag: '🇫🇷' },
      { name: 'German', code: 'de', flag: '🇩🇪' },
      { name: 'Spanish', code: 'es', flag: '🇪🇸' },
      { name: 'Italian', code: 'it', flag: '🇮🇹' },
      { name: 'Japanese', code: 'ja', flag: '🇯🇵' },
      { name: 'Korean', code: 'ko', flag: '🇰🇷' },
      { name: 'Chinese', code: 'zh-Hans', flag: '🇨🇳' },
      { name: 'Portuguese', code: 'pt', flag: '🇵🇹' },
      // Ajoutez plus de langues ici
    ]);
    const selectedLanguage = ref(languages.value[0]);
    const dropdownOpen = ref(false);

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    const selectLanguage = (language: typeof languages.value[number]) => {
      selectedLanguage.value = language;
      dropdownOpen.value = false;
    };

    return { languages, selectedLanguage, dropdownOpen, toggleDropdown, selectLanguage };
  },
});
</script>

