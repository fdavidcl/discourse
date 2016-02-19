import computed from "ember-addons/ember-computed-decorators";
import NavigationDefaultController from 'discourse/controllers/navigation/default';
import { setting } from 'discourse/lib/computed';

export default NavigationDefaultController.extend({
  subcategoryListSetting: setting('show_subcategory_list'),
  showingParentCategory: Em.computed.none('category.parentCategory'),
  showingSubcategoryList: Em.computed.and('subcategoryListSetting', 'showingParentCategory'),

  @computed("showingSubcategoryList", "category", "noSubcategories", "archetype")
  navItems(showingSubcategoryList, category, noSubcategories, archetype) {
    if (showingSubcategoryList) { return []; }
    var args = { noSubcategories };
    if (archetype){
      args.archetype = archetype;
    }
    return Discourse.NavItem.buildList(category, args);
  }
});
