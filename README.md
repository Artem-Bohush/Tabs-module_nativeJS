# Tabs-module_nativeJS
  This is a simple code for tabs on your site. It provides a switching between tabs that contains description block and block with photo. Any changing is up to you.
## Usage
  Your layout should contains next code structure:
```
<div class="info">
  <!-- there is tab title block below -->
  <div class="info-header">
    <div class="info-header-tab">Tab1-title</div>
    <div class="info-header-tab">Tab2-title</div>
    <div class="info-header-tab">Tab3-title</div>
    <div class="info-header-tab">Tab4-title</div>
  </div>
  <!-- then the same blocks with tab content -->
  <div class="info-tabcontent">
    <div class="description">
      <div class="description-title">Tab1-description-title</div>
      <div class="description-text">Tab1-description-text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum doloribus vitae ab
        dicta temporibus nisi harum blanditiis tempora, aliquam qui dolores laboriosam, architecto similique ut culpa
        aut inventore reprehenderit veritatis!
      </div>
    </div>
    <div class="photo">
      <img src="img/massage.jpg" alt="Massage">
    </div>
  </div>
  <div class="info-tabcontent">
    <div class="description">
      <div class="description-title">Tab2-description-title</div>
      <div class="description-text">Tab2-description-text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum doloribus vitae ab
        dicta temporibus nisi harum blanditiis tempora, aliquam qui dolores laboriosam, architecto similique ut culpa
        aut inventore reprehenderit veritatis!
      </div>
    </div>
    <div class="photo">
      <img src="img/sunset.jpg" alt="sunset">
    </div>
  </div>
  <div class="info-tabcontent">
    <div class="description">
      <div class="description-title">Tab3-description-title</div>
      <div class="description-text">Tab3-description-text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum doloribus vitae ab
        dicta temporibus nisi harum blanditiis tempora, aliquam qui dolores laboriosam, architecto similique ut culpa
        aut inventore reprehenderit veritatis!
      </div>
      <div class="photo">
        <img src="img/sunrise.jpg" alt="sunrise">
      </div>
    </div>
  </div>
  <div class="info-tabcontent">
    <div class="description">
      <div class="description-title">Tab4-description-title</div>
      <div class="description-text">Tab4-description-text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum doloribus vitae ab
        dicta temporibus nisi harum blanditiis tempora, aliquam qui dolores laboriosam, architecto similique ut
        culpa
        aut inventore reprehenderit veritatis!
      </div>
    </div>
    <div class="photo">
      <img src="img/yoga.jpg" alt="yoga">
    </div>
  </div>

</div>
```
Next step - add tabs.js to you project and import this module. Then just call a function with passing corresponding classes to it(in the appropriate order):
 ```
 tabs('info-header', 'info-header-tab', 'info-tabcontent');
 ```
The example has only four tabs, but you can easily scale it by adding the same blocks with tab title and tab content to your site layout, as much as necessary.
