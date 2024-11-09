import { reactive } from "vue";

/**
 * @class API
 */
export default class {
  /**
   * @type {Object}
   * @description Reactive class defaults
   * 
   * @param {Object} state
   * @param {Number} state.page
   * @param {Number} state.results
   * @param {Boolean} state.pending
   */
  state = reactive({
    page: 1,
    results: 10,
    pending: false
  });

  /**
   * API class constructor
   * 
   * @param {Object} [param0]
   * @param {Number} [param0.page]
   * @param {Number} [param0.results]
   */
  constructor({
    page,
    results
  } = {}) {
    this.state.page = page || this.state.page;
    this.state.results = results || this.state.results;
  }

  /**
   * API fetch
   * 
   * @param {Object} [param0]
   * @param {Number} [param0.page]
   * @param {Number} [param0.results]
   * 
   * @returns {Promise<JSON|Error>}
   */
  async fetch({
    page,
    results
  } = {}) {
    /* Set pending to true */
    this.state.pending = true;

    try {
      /**
       * @type {Response}
       * @description Returns raw data of request
       */
      const response = await fetch(
        `https://randomuser.me/api/?page=${ page || this.state.page }&results=${ results || this.state.results }`
      );

      /* Jsonify readable stream */
      return await response.json();
    } catch (e) {
      /* Throw request error */
      throw new Error(e);
    } finally {
      /* Set pending to false */
      this.state.pending = false;
    }
  }

  /**
   * Get items using API
   * 
   * @param {Object} [param0]
   * @param {Number} [param0.page]
   * @param {Number} [param0.results]
   * 
   * @returns {Promise}
   */
  getItems({
    page,
    results
  } = {}) {
    return this.fetch({ page, results });
  }
}