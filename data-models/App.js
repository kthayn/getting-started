/**
 * This example app performs a full CRUD lifecycle of a user story.
 */
Ext.define('Rally.gettingstarted.DataModels', {
    extend: 'Rally.app.App',
    
    /**
     * The app execution entry point
     * _getStoryModel should be called here
     */

    launch: function() {
        this._getStoryModel();
    },

    /**
     * Use Rally.data.ModelFactory to retrieve the story data model.
     * When complete, call _createStory
     */
    _getStoryModel: function() {
        console.log("Now getting User Story Model");
        Rally.data.ModelFactory.getModel({
        type: 'UserStory',
        success: this._createStory
        });
    },

    /**
     * Create a new user story and persist it to the server.
     * The model's save method should be useful here.
     * When complete, call _readStory
     */
    _createStory: function(model) {
        console.log("Let's create some magic!");
        var newStory = Ext.create(model, {
            Name: 'App Awesomesauce!',
            Description: 'How do you like me now?!',
            ScheduleState: 'In-Progress'
        });

        console.log("Saving the story");
        newStory.save({
            callback: this._readStory,
            scope: this
        });
    },

    /**
     * Read the record you just created.
     * The model's load method should be useful here.
     * When complete call _printStory
     */
    _readStory: function(story, operation) {
        console.log("Reading the Story record");
        var model = story.self;
        model.load(story.getId(), {
            fetch: ['Name', 'State', 'Owner'],
            callback: this._printStory,
            scope: this
            });
    },

    /**
     * Print the story's FormattedID to the console.
     * The model's get method should be useful here.
     * Hint: did you remember to fetch FormattedID in _readStory?
     * Call _updateStory when done.
     */
    _printStory: function(story, operation) {

    },

    /**
     * Set the story's PlanEstimate to 5.
     * The model's set and save methods should be useful here.
     * When complete call _deleteStory
     */
    _updateStory: function(story) {

    },

    /**
     * Delete the story.
     * The model's destroy method should be useful here.
     * When complete console.log a success message.
     */
    _deleteStory: function(story, operation) {

    }
});
