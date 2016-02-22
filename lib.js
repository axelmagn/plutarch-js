// npm packages
const nano = require('nano')
  ;

/**
 * Create a new plutarch lifecycle
 */
const Plutarch = function(appName, dbname, url) {
  // validate arguments
  if(appName === undefined) {
    throw new Error("appName is undefined");
  }
  dbname = dbname !== undefined ? dbname : "plutarch";
  url = url !== undefined ? url : "http://localurl:5984"

  // set up database connector
  const db = nano(url).db.use(dbname);

  /**
   * started state logic
   * TODO: explain
   */
  const start = function() {
  };

  /**
   * configured state logic
   * TODO: explain
   */
  const configure = function() {
  };

  /**
   * ready state logic
   * TODO: explain
   */
  const ready = function() {
  };

  /**
   * stop state logic
   * TODO: explain
   */
  const stop = function() {
  };

}

