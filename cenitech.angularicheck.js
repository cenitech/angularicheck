/******************************************
 *                                        *
 * Author: Lucas Ceni                     *
 * Email: lucas.ceni at gmail             *
 * Date: 2015                             *
 * github: https://github.com/cenitech    *
 *                                        *
 ******************************************/

'use strict';

angular.module('cenitech.icheck', [])
    .directive('icheck', icheck);

function icheck() {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, controller) {
            var self = $(elem),
            label = self.next(),
            label_text = label.text();

            label.remove();
            self.iCheck({
              checkboxClass: 'icheckbox_line-blue',
              insert: '<div class="icheck_line-icon"></div>' + label_text
            });

            $('.icheckbox_line-blue').css('margin-right', '5px');
        }
    };
}
