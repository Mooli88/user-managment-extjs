Ext.define('ManageUsers.model.User', {
  extend: 'ManageUsers.model.Base',

  fields: [
    { name: 'id', type: 'int' },
    {
      name: 'fullname',
      calculate: function(data) {
        return data.first + ' ' + data.last;
      }
    },
    { name: 'first', type: 'string' },
    { name: 'last', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'phone', type: 'string' }
  ],

  validators: {
    first: [
      'presence',
      { type: 'length', min: 2 },
      { type: 'format', matcher: /^[a-zA-z]+$/gi }
    ],
    last: [
      'presence',
      { type: 'length', min: 2 },
      { type: 'format', matcher: /^[a-zA-z]+$/gi }
    ],
    email: [
      'presence',
      {
        type: 'format',
        matcher: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    ],
    phone: [
      'presence',
      {
        type: 'format',
        matcher: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im
      }
    ]
  }
});
