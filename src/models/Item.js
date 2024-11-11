/**
 * @class Item
 * 
 * Represents API item
 */
export default class Item {
  /**
   * Model constructor
   * 
   * @param {Object} [props]
   * @param {String} [props.cell]
   * @param {String} [props.email]
   * @param {String} [props.gender]
   * @param {String} [props.nat]
   * @param {String} [props.phone]
   * 
   * @param {Object} [props.dob]
   * @param {String} [props.dob.date]
   * @param {Number} [props.dob.age]
   * 
   * @param {Object} [props.id]
   * @param {String} [props.id.name]
   * @param {String} [props.id.value]
   * 
   * @param {Object} [props.location]
   * @param {String} [props.location.city]
   * @param {Object} [props.location.coordinates]
   * @param {String} [props.location.coordinates.latitude]
   * @param {String} [props.location.coordinates.longitude]
   * @param {String} [props.location.country]
   * @param {Number} [props.location.postcode]
   * @param {String} [props.location.state]
   * @param {Object} [props.location.street]
   * @param {Number} [props.location.number]
   * @param {String} [props.location.name]
   * @param {Object} [props.location.timezone]
   * @param {String} [props.location.timezone.offset]
   * @param {String} [props.location.timezone.description]
   * 
   * @param {Object} [props.login]
   * @param {String} [props.login.md5]
   * @param {String} [props.login.password]
   * @param {String} [props.login.salt]
   * @param {String} [props.login.sha1]
   * @param {String} [props.login.sha256]
   * @param {String} [props.login.username]
   * @param {String} [props.login.uuid]
   * 
   * @param {Object} [props.name]
   * @param {String} [props.name.first]
   * @param {String} [props.name.last]
   * @param {String} [props.name.title]
   * 
   * @param {Object} [props.name.picture]
   * @param {String} [props.name.picture.large]
   * @param {String} [props.name.picture.medium]
   * @param {String} [props.name.picture.thumbnail]
   * 
   * @param {Object} [props.name.registered]
   * @param {Number} [props.name.registered.age]
   * @param {String} [props.name.registered.date]
   */
  constructor(props = {}) {
    /* Iterate all props and set them to model */
    for (const i in props) {
      this[i] = props[i];
    }
  }
}