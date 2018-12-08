/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ManageUsers.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  onRowOperation: function(sender, record) {
    console.log(sender);
    console.log(record);
  },

  onItemSelected: function(sender, record) {
    console.log(record);

    var modal = Ext.create({
      xtype: 'usereditor',
      viewModel: { data: { user: record[0] } }
    }).show();
  },

  onConfirm: function(choice) {
    if (choice === 'yes') {
    }
  }
});
