### ==========================================================
 * linkanything.js v1.0.0
 * ==========================================================
 * Copyright 2012 Jeremy Worboys.
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
 * ========================================================== ###
(($) ->
    "use strict"

    data_api = "[data-href]"


    class LinkAnything
        constructor: (element) ->
            $el = $(element).on "click.linkanything.data-api", @scoot

        scoot: (e) ->
            e.preventDefault()
            e.stopPropagation()

            $this = $(this)
            return if $this.is ".disabled, :disabled"

            return unless (href = $this.data("href"))

            window.location = href
            false


    $::linkanything = (option) ->
        @each ->
            $this = $(this)

            unless (data = $this.data "linkanything")
                data = new LinkAnything this
                $this.data "linkanything", data

            data[option].call $this if typeof option is "string"


    $::linkanything.Constructor = LinkAnything


    $(document).on("click.linkanything.data-api touchstart.linkanything.data-api", data_api, LinkAnything::scoot)


)(window.jQuery)
