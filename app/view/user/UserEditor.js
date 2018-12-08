Ext.define('ManageUsers.view.main.UserEditor', {
  extend: 'Ext.window.Window',
  xtype: 'usereditor',
  modal: true,
  controller: 'usereditorcontroller',
  config: {
    title: 'User Editor'
  },

  bind: { title: 'Edit: {user.fullname}' },

  buttons: [
    {
      xtype: 'button',
      text: 'save',
      handler: 'save'
      // bind: {
      //   // disabled: '{!user.getValidation().isValid()}'
      // }
    },
    {
      xtype: 'button',
      text: 'close',
      handler: 'close'
    },
    {
      xtype: 'button',
      text: 'delete',
      handler: 'delete'
    }
  ],

  items: [
    {
      xtype: 'fieldset',
      modelValidation: true,
      instructions: 'Edit selected user',

      items: [
        {
          xtype: 'textfield',
          label: 'first name:',
          bind: '{user.first}'
        },
        {
          xtype: 'textfield',
          label: 'Last name:',
          bind: '{user.last}'
        },
        {
          xtype: 'textfield',
          label: 'Email:',
          bind: '{user.email}'
        },
        {
          xtype: 'textfield',
          label: 'Phone:',
          bind: '{user.phone}'
        }
      ]
    }
  ],
  updateTitle: function(title) {
    if (title === 'xyz') {
      console.info(title);
    }

    this.callParent(arguments);
  }
});
