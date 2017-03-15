import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  modelNames: computed(function(){
    const dataAdapter = Ember.getOwner(this).lookup('data-adapter:main');
    return dataAdapter.getModelTypes().mapBy('name');
  })
});
