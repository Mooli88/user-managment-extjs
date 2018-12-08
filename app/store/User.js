Ext.define('ManageUsers.store.User', {
  extend: 'Ext.data.Store',

  alias: 'store.user',
  autoLoad: true,

  model: 'ManageUsers.model.User',

  data: {
    items: [
      {
        id: '1',
        first: 'Jean',
        last: 'picard',
        email: 'jeanluc.picard@enterprise.com',
        phone: '555-111-1111'
      },
      {
        id: '2',
        first: 'Mooli',
        last: 'Pitchon',
        email: 'mooli.pit@enterprise.com',
        phone: '555-222-2222'
      },
      {
        id: '3',
        first: 'Geralt',
        last: 'Butcher of Blaviken',
        email: 'white.wolf@enterprise.com',
        phone: '555-333-3333'
      },
      {
        id: '4',
        first: 'First name',
        last: 'Last name',
        email: 'f.l@enterprise.com',
        phone: '555-444-4444'
      }
    ]
  },

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});
