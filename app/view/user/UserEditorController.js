Ext.define('ManageUsers.view.user.UserEditorController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.usereditorcontroller',
  config: {
    store: ''
  },

  close: function() {
    var user = this.getViewModel().get('user');
    user.reject();

    this.getView().close();
  },

  delete: function() {
    var user = this.getViewModel().get('user');
    var s = Ext.getStore(this.getSource());
    this.getView().close();
  },

  isValid: function() {
    var user = this.getViewModel().get('user');
    return user.getValidation().isValid();
  },

  save: function() {
    if (this.isValid()) {
      this.getView().close();
    }
  }
});
