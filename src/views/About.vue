<template>
  <div class="about">
    <h1>Cool things GTM can do</h1>

    <p>Google Analytics !== Google Tag Manager.  google tag manager lets you manage javascript tracking codes on your website.  Google Analytics tracks and collects the data and displays in nice reports.</p>
    <p>What you can track: Clicks, Link clicks, Form submissions, Time spent on a page, etc.</p>

    <p>All givng you lots of nice behavioural insights</p>

    <h2>What you can do on GA (without tagging)</h2>
    <ul>
      <li>Track website page views</li>
    </ul>

    <p>Google supports says:</p>
    <p>"Tag: A tag is code that send data to a system such as Google Analytics. Trigger: A trigger listens for certain events, such as clicks, form submissions, or page loads. When an event is detected that matches the trigger definition, any tags that reference that trigger will fire.""</p>


    <h2>GA + GTM</h2>
    <ul>
      <li>Track button clicks</li>
      <li>Track file downloads, e.g. PDFs.</li>
      <li>Track outbound (external) link clicks. - https://www.analyticsmania.com/google-tag-manager-recipes/outbound-links/</li>

      <li>Track form submissions and abandonment </li>
      <li>Drop-down field selection tracking</li>
      <li>Form field timing tracking - track how long does it take your users to fill out a particular form field.</li>
      <li>Form submission timing tracking. - track how long does it take your users to submit a form.</li>
      <li>Track checkboxes</li>

      <li> Implement Google Analytics Standard Ecommerce features - not sure how useful this is for SA right now?</li>

      <li>Browser related:</li>
      <li>Check if an ad blocker is present</li>
      <li>Detect the incognito mode</li>
      <li>Track visitor’s intentions to leave a website </li>
      <li>Track when visitor prints or copies the page</li>
      <li>Track when a mouse hovers on a particular website element</li>
      <li>SERP bounce rate - Find out how many people are jumping back to the search results right after landing on your website.</li>
      <li>Track Page not found errors (404) and find out where your website’s dead ends.</li>

      <li>Track engagement time on every page</li>
      <li>Track page load times</li>
      <li>Track an average time until an event occurs (in Google Analytics)</li>

      <li>Track rage clicks - https://reflectivedata.com/tracking-rage-clicks-using-google-tag-manager-and-google-analytics/</li>


    </ul>

    <h2>What i've added to this dummy website</h2>

    <h3>1. Page views</h3>

    <p>Because the site is a single-page application, we don't reload the pages - instead We're going to define a trigger type called "History State Change".</p>

      <ol>
        <li>First make a new Data Layer Varible called 'New History Fragment' which has a Data Layer Vairble Name of 'gtm.newUrlFragment'</li>
        <li><img :src="'src\assets\fieldstoset.png'" ></li>
        <li>Find the 'Google Analytics Setting' varible that holds the Tracking ID for website.  Make sure that this varible is set.</li>
        <li><img :src="'src\assets\dlv.PNG'" /></li>
        <li>In 'fields to set', set name as 'page' and Value as "New History Fragment" with curly braces (the Data Layer Varible we just created)</li>
        <li><img :src="'src\assets\trigger.PNG'" ></li>
        <li>Now when we got to GA, we can go to Real-time/Content, then click on 'Page views (last 30 min)' and we should see a list of pages and page views </li>
        <li><img :src="'src\assets\ga.PNG'" ></li>

      </ol>

      <h3>2. Tracking clicks</h3>

      <p>There are 2 types of clicks.  'All Elements' and 'Just Links'.  If a 'Just Links' trigge is clicked and it doesnt have a hyperlink (or parent doesnt have a hyperlink), the 'Just Links' trigger will not catch the link.  when an element is clicked, it will climb the website's document until it finds the link.  ie you can click a plan, but the 'a' link will be triggerd not the span trigger.  'All Elements' are triggered regardless of whether they have a link or not.</p>


      <h2>Link Click Tracking</h2>

      <p>fyi by default, lcicks are not automatically tracked, this needs to be done in the Preview and Debug mode and then refreshing the page.</p>

      <ol>
        <li>first, decide what you want to traick.</li>
        <li>Next create a click listener.  if gtm sees a click, it will display it in the GTm Preview and Debug mode and we can then push ocinditions to fire tags - or in other words, the listener pushes the clikc data into the Data Layer.</li>
        <li>In gtm, go to Triggers > New </li>
        <li>In Trigger Configuration, select 'Click - Just Links'</li>

        <li><img src="src\assets\trigger.PNG" /></li>

        <li>leave the setting as is and name the trigger 'All Links Clicks'</li>
        <li>Now go into preview mode and anytime you try and click a link the 'gtm.linkClick' event is called - or this could be called 'Click'</li>

        <li>By default not all built-in vairbles are already configured.  So in GTm, got to varibles and in the 'Built-in' section, click Configure.  In the open panel that appears on the left hand side, click the varibles you want to enable.  For now, we want to enable all the 'Clicks' varibles</li>
        <li>Now go back to website, if we click on the abotu title we'll get lots of lovely information and click varibles</li>
      </ol>



  </div>
</template>

<style media="screen">
  ul, li, ol {
    text-align: left;
  }
</style>
