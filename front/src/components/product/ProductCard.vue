<template>
  <div class="flex p-6 font-mono w-5/12 m-2 bg-gray-200">
    <div class="flex-none w-40 relative">
      <img
        :src="imageUrl"
        alt=""
        class="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          border border-black
          shadow-offset-lime
        "
      />
    </div>
    <form class="flex-auto pl-6">
      <div
        class="
          flex flex-wrap
          items-baseline
          pl-52
          -mt-6
          -mr-6
          -ml-52
          py-6
          pr-6
          bg-black
          text-white
        "
      >
        <h1 class="w-full flex-none text-2xl leading-7 mb-2 font-bold">
          {{ title }}
        </h1>
        <div class="text-2xl leading-7 font-bold">${{ price }}.00</div>
        <div class="text-xs font-sans ml-3">Стартовый набор</div>
      </div>
      <div class="flex items-baseline py-8">
        <div
          class="
            space-x-3.5
            flex
            text-center text-sm
            leading-none
            text-gray-600
          "
        >
        {{ desc }}
        </div>
      </div>
      
      <div class="flex space-x-3 text-sm font-bold uppercase mb-4">
        <div class="flex-auto flex space-x-3">
          <button
            v-if="inCart"
            @click.prevent="$emit('add-to-cart')"
            class="
              w-1/2
              h-9
              flex
              items-center
              justify-center
              bg-lime-300
              text-black
              border border-black
              shadow-offset-black
              hover:bg-black
              hover:text-gray-100
              hover:underline
            "
            type="button"
          >
            Убрать из корзины
          </button>
          <button
            v-else
            @click.prevent="$emit('add-to-cart')"
            class="
              w-1/2
              h-9
              flex
              items-center
              justify-center
              border border-black
              shadow-offset-black
              hover:bg-black
              hover:text-gray-100
              hover:underline
            "
            type="button"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    inCart: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    desc() {
      return this.description.length > 200 ? this.description.substr(0, 200) + '...' : this. description
    }
  }
};
</script>