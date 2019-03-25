/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    this.subscribers[type] = this.subscribers[type] || []
    this.subscribers[type].push(fn)
    return this.subscribers[type]
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    var sub = this.subscribers[type]
    if (!sub) return
    var idx = sub.indexOf(fn)
    sub.splice(idx, 1)
  }

  publish(type, ...args) {
    // todo publish
    var sub = this.subscribers[type]
    if (!sub) return
    sub.forEach(fn => {
      fn(...args)
    });
  }
}
