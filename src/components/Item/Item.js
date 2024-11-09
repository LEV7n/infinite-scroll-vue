import { defineComponent } from "vue";
import NameToHSL from "@/js/nametohsl.js";

export default defineComponent({
  props: {
    item: {
      type: Object
    }
  },

  data() {
    return {
      colorize: new NameToHSL()
    }
  },

  methods: {
    /**
     * Make short name from long
     * 
     * @param {String} name
     * 
     * @returns {String}
     */
    shortName(name) {
      const result = name?.split(" ").map(n => n?.substring(0, 1).toUpperCase()) || ["U", "N"];
      return [result.shift(), result.pop()].join("");
    },

    /**
     * Create css color from name
     * 
     * @param {String} name
     * 
     * @returns {String}
     */
    strToHsl(name) {
      return `--color: ${ this.colorize.generateHSL(name || "User") }`;
    }
  }
});