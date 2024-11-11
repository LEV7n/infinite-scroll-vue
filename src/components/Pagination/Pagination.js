import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pages: {
      type: Number,
      default: 0
    },
    pageRange: {
      type: Number,
      default: 2
    },
  },

  data() {
    return {
      active: 1,
    };
  },

  computed: {
    /**
     * Calculate that current page so far from start
     * 
     * @returns {Boolean}
     */
    showLeftEllipsis() {
      return this.active - this.pageRange > 2;
    },

    /**
     * Calculate that current page so far from end
     * 
     * @returns {Boolean}
     */
    showRightEllipsis() {
      return this.active + this.pageRange < this.pages - 1;
    },

    /**
     * Calculate which pages should be showed at center
     * 
     * @returns {Array}
     */
    pagesToShow() {
      const
        /** @type {Number} */
        start = Math.max(2, this.active - this.pageRange),

        /** @type {Number} */
        end = Math.min(this.pages - 1, this.active + this.pageRange),

        /** @type {Array} */
        pages = [];

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    }
  },

  methods: {
    /**
     * Change page and emit data as "switch" event
     * 
     * @param {Number} page
     */
    change(page) {
      if (page !== this.active && page >= 1 && page <= this.pages) {
        this.active = page;
        this.$emit("switch", page);
      }
    },

    /**
     * Previous page
     */
    prev() {
      if (this.active > 1) {
        this.change(this.active - 1);
      }
    },

    /**
     * Next page
     */
    next() {
      if (this.active < this.pages) {
        this.change(this.active + 1);
      }
    }
  }
});
