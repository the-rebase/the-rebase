/**
 * This reveal.js plugin is wrapper around the highlight.js
 * syntax highlighting library.
 */
(function( root, factory ) {
    if (typeof define === 'function' && define.amd) {
        root.RevealRemoveLiquid = factory();
    } else if( typeof exports === 'object' ) {
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.RevealRemoveLiquid factory();
    }
}( this, function() {

	// Function to perform a better "data-trim" on code snippets
	// Will slice an indentation amount on each line of the snippet (amount based on the line having the lowest indentation length)
	var RevealRemoveLiquid = {
		init: function() {

			// Read the plugin config options and provide fallbacks
			var config = Reveal.getConfig().removeLiquid || {};
			config.removeLiquid = typeof config.removeLiquid === 'boolean' ? config.removeLiquid : true;

      

		},

	}

	Reveal.registerPlugin( 'removeLiquid', RevealRemoveLiquid );

	return RevealRemoveLiquid;

}));
