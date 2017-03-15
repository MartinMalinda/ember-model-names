import Ember from 'ember';

const {inject} = Ember;

export default Ember.Route.extend({

  fastboot: inject.service(),

  model(){
    if(this.get('fastboot.isFastBoot')){
      console.log('pushing record bar with id 1 in Fastboot');    
      return this.store.push({
        data: {
          id: '1',
          type: 'bar',
          attributes: {
            title: 'Lorem',
            body: 'Ipsum'
          }
        }
      });
    }

    // this should be available from shoebox outside fastboot mode
    console.log('peeking record bar with id 1 in browser')
    return this.store.peekRecord('bar', 1);
  }
});
