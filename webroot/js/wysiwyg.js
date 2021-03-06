/**
 * @fileoverview Wysiwyg Javascript
 * @author nakajimashouhei@gmail.com (Shohei Nakajima)
 */


/**
 * NetCommonsWysiwyg factory
 */
NetCommonsApp.factory('NetCommonsWysiwyg', function() {

  /**
   * tinymce optins
   *
   * @type {{mode: string, menubar: string, plugins: string, toolbar: string}}
   */
  var options = {
    mode: 'exact',
    menubar: ' ',
    plugins: 'textcolor advlist autolink charmap code link ',
    toolbar: 'undo redo  |' +
        ' forecolor |' +
        ' styleselect |' +
        ' bold italic |' +
        ' alignleft aligncenter alignright alignjustify |' +
        ' bullist numlist outdent indent |' +
        ' link |'
  };

  /**
   * variables
   *
   * @type {Object.<string>}
   */
  var variables = {
    options: options
  };

  /**
   * functions
   *
   * @type {Object.<function>}
   */
  var functions = {
    /**
     * new method
     */
    new: function() {
      return angular.extend(variables, functions);
    }
  };

  return functions.new();
});
