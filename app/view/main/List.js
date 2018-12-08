/**
 * This view is an example list of people.
 */
Ext.define('ManageUsers.view.main.List', {
  extend: 'Ext.grid.Grid',
  xtype: 'mainlist',

  requires: ['ManageUsers.store.User'],

  title: 'Users',

  store: {
    type: 'user'
  },

  plugins: {
    // gridcellediting: {
    //     selectOnEdit: true
    //   },
    rowoperations: {
      operation: {
        text: 'Delete',
        handler: 'onRowOperation'
      }
    }
  },

  selectable: {
    rows: true,
    cells: false
  },

  columns: [
    {
      text: 'ID',
      dataIndex: 'id',
      width: 50,
      cell: {
        userCls: 'bold'
      }
    },
    {
      text: 'Full Name',
      dataIndex: 'fullname',
      flex: 0.5,
      cell: {
        userCls: 'bold'
      }
    },
    {
      text: 'Email',
      dataIndex: 'email',
      width: 230
    },
    {
      text: 'Phone',
      dataIndex: 'phone',
      width: 150
    }
  ],

  listeners: {
    select: 'onItemSelected'
  }
});
