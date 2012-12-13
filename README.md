# Link Anything

Link Anything is small jQuery plugin for enabling you to link **anything**. It is structured around the data-api approach used by the guys on the Twitter Bootstrap team.

## Usage

Include the Link Anything plugin on your site however you would like.

On any element add a `data-href` attribute whose value is the location you'd like to direct the user to (e.g. `data-href="http://example.com"`). The plugin will find the element using the `data-href` attribute and act on it automatically.  

When a user clicks (or touches) on this element, the user will be redirected to the location you specified.

If the element you have linked has a `class="disabled"` or a `disabled` attribute, the plugin will respect this and not relocate the user.  

Once the plugin has attached itself to an element in the DOM, you are able to use `$(".element").linkanything("scoot");` to programatically send the user on their way.

## Todo
I wrote this script for use on an application I am working on, I am posting it here for others if they need such a thing. I'm not sure if I will continue development on this project aside of tweaks for personal use (which I may or may not post). If anyone would like to contribute to this plugin, here are a few things I think should be done:

- Set up unit tests
- Provide demo / full example
- Add support for keyboard navigation

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
