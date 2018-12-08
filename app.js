/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ManageUsers.Application',

    name: 'ManageUsers',

    requires: [
        // This will automatically load all classes in the ManageUsers namespace
        // so that application classes do not need to require each other.
        'ManageUsers.*'
    ],

    // The name of the initial view to create.
    mainView: 'ManageUsers.view.main.Main'
});
