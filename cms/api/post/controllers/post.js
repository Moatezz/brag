module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async kill(ctx) {
    let entities;
    let some = entities[0].group.name;
    if (ctx.query._q) {
      entities = await strapi.services.post.search(ctx.query);
    } else {
      entities = await strapi.services.post.find({ some: 1 });
    }
    console.log(entities[0].group.name);
    return entities;
  },
};
