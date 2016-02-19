import computed from "ember-addons/ember-computed-decorators";

export default Ember.Controller.extend({
  needs: ['discovery', 'discovery/topics'],

  @computed("archetype")
  categories() {
    return Discourse.Category.list();
  },

  @computed("filterMode", "archetype")
  navItems(filterMode, archetype) {
    var args = {};
    if (archetype){
      args.archetype = archetype;
    }

    // we don't want to show the period in the navigation bar since it's in a dropdown
    if (filterMode.indexOf("top/") === 0) { args.filterMode = filterMode.replace("top/", ""); }
    return Discourse.NavItem.buildList('', args);
  }
});
