/**
 * This is a custom plugin that projext loads automatically when it detects that the file exists.
 * The plugin is only used by the `webappcopy` target in order to insert the current time in one
 * of the files it copies.
 * @param {Projext} app projext's dependency injection container.
 */
module.exports = (app) => {
  /**
   * Add a listener for the event triggered every time projext builds the list of files a target
   * needs to copy (the ones specified on the `copy` setting).
   */
  app.get('events').on('target-copy-files', (list, target) => {
    // Define a new reference for the list, to avoid mutating (if needed) the recevied one.
    let updatedList;
    // Make sure to only update the list if the target is the one the plugin is looking for.
    if (target.name === 'webappcopy') {
      // Loop all the items on the list.
      updatedList = list.map((item) => {
        // Like for the list, define a new reference for the item that will be removed.
        let updatedItem;
        // Make sure the items is the one the plugin needs to modify.
        if (item.from.endsWith('time.html')) {
          // Copy the item and add a `transform` function.
          updatedItem = Object.assign(
            {
              /**
               * This is just an example of how you can modify the files being copied. The function
               * will replace the `{{buildTime}}` placeholder on the file with the current time.
               * @param {Buffer} contents The file original contents.
               * @return {string}
               */
              transform: (contents) => (
                contents
                .toString()
                .replace('{{buildTime}}', (new Date()).toLocaleTimeString())
              ),
            },
            item
          );
        } else {
          /**
           * If the item wasn't the one the plugin was looking for, just set the recevied object
           * as the reference for the one that will be returned.
           */
          updatedItem = item;
        }
        // Return the _"new"_ reference for the item.
        return updatedItem;
      });
    } else {
      /**
       * If the target wasn't the one the plugin was looking for, just set the recevied list as
       * the reference for the one that will be returned.
       */
      updatedList = list;
    }

    // Return the _"new"_ reference for the item.
    return updatedList;
  });
};
