/* ==========================================================
 * linkanything.js v1.0.0
 * ==========================================================
 * Copyright 2012 Jeremy Worboys <jw@jeremyworboys.com>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ==========================================================
*/
;(function($) {
  "use strict";

  var LinkAnything, data_api;
  data_api = "[data-href]";
  LinkAnything = (function() {

    function LinkAnything(element) {
      var $el;
      $el = $(element).on("click.linkanything.data-api", this.scoot);
    }

    LinkAnything.prototype.scoot = function(e) {
      var $this, href;
      e.preventDefault();
      e.stopPropagation();
      console.log(e);
      $this = $(this);
      if ($this.is(".disabled, :disabled")) {
        return;
      }
      if (!(href = $this.data("href"))) {
        return;
      }
      window.location = href;
      return false;
    };

    return LinkAnything;

  })();
  $.prototype.linkanything = function(option) {
    return this.each(function() {
      var $this, data;
      $this = $(this);
      if (!(data = $this.data("linkanything"))) {
        data = new LinkAnything(this);
        $this.data("linkanything", data);
      }
      if (typeof option === "string") {
        return data[option].call($this);
      }
    });
  };
  $.prototype.linkanything.Constructor = LinkAnything;
  return $(document).on("click.linkanything.data-api touchstart.linkanything.data-api", data_api, LinkAnything.prototype.scoot);
})(window.jQuery);
