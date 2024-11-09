import { defineComponent } from "vue";
import API from "@/js/api.js";
import Model from "@/models/Item.js";

import Item from "@/components/Item/Item.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

export default defineComponent({
  components: {
    Item,
    Pagination
  },

  props: {
    results: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {
      API: {},
      items: [],

      page: 1,
      previousScrollTop: 0
    }
  },

  /* TODO: Show/hide pages inside/outside viewport, but specs not required it */

  methods: {
    /**
     * Load items using API
     */
    loadItems() {
      /* Request for items */
      this.API.getItems()
        .then(({ results }) => {
          /* Concat existing items with new */
          this.items = this.items.concat(
            results.map((/** @type {Object} */ item) => new Model(item))
          );
        })
        .catch((/** @type {String} */ e) => {
          /* Throw request error */
          throw new Error(e);
        });

      /* Iterate page */
      this.page++;
    },

    /**
     * Slice items to chunks
     * 
     * @param {Number} page
     * 
     * @returns {Array}
     */
    paginateItems(page) {
      return this.items.slice((page - 1) * this.results, this.results * page);
    },

    /**
     * Scroll view to page #
     * 
     * @param {Number} page
     */
    scrollTo(page) {
      const targetPage = this.$refs.page[page - 1];

      if (!targetPage.classList.contains("empty")) {
        /* Scroll to start of loaded page */
        targetPage.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (!this.API.state.pending) {
        /* Scroll to end of last loaded page */
        targetPage.previousSibling?.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    },
    
    /**
     * Scroll view to page #
     * 
     * @param {Object} e
     */
    handleScroll(e) {
      if (!this.API.state.pending) {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
  
        /** Detect scroll direction: only down */
        if (scrollTop > this.previousScrollTop) {
          /** Check that user reach end and scrolling down */
          if (scrollTop > this.previousScrollTop && scrollTop + clientHeight >= scrollHeight - 5) {
            this.loadItems();
          }
        }
        
        /** Update previouse value of scrollTop */
        this.previousScrollTop = scrollTop;
      }
    },
  },

  created() {
    /* Initialize API */
    this.API = new API({
      page: this.page,
      results: this.results
    });

    /* Load first items */
    if (!this.items.length) {
      this.loadItems();
    }
  }
});